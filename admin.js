document.addEventListener('DOMContentLoaded', () => { if (authorized()) initAdmin(); else showAuthModal(); });

function authorized() { return !!sessionStorage.getItem('admin_auth_header'); }
function authHeader() { return sessionStorage.getItem('admin_auth_header') || ''; }

function showAuthModal() {
  const dlg = document.getElementById('admin-auth');
  const closeBtn = document.getElementById('admin-auth-close');
  const loginBtn = document.getElementById('admin-login-btn');
  const userEl = document.getElementById('admin-user');
  const passEl = document.getElementById('admin-pass');
  const errEl = document.getElementById('admin-auth-error');
  if (!dlg) return;
  dlg.showModal();
  closeBtn.addEventListener('click', () => dlg.close());
  loginBtn.addEventListener('click', () => {
    const u = userEl.value || 'admin';
    const p = passEl.value || '';
    const header = 'Basic ' + btoa(u + ':' + p);
    fetch('/api/bookings', { headers: { Authorization: header }})
      .then(r => { if (r.status === 401) throw new Error('unauth'); return r.json(); })
      .then(() => { sessionStorage.setItem('admin_auth_header', header); dlg.close(); initAdmin(); })
      .catch(() => { errEl.textContent = 'Invalid credentials'; });
  });
}

function initAdmin() {
  setDefaultDate();
  render();
  document.getElementById('admin-date').addEventListener('change', render);
  document.getElementById('clear-cancelled').addEventListener('click', () => {
    const iso = document.getElementById('admin-date').value || todayISO();
    fetch('/api/bookings?date=' + iso, { headers: { Authorization: authHeader() }})
      .then(r => r.json())
      .then(list => Promise.all(list.filter(b => b.status === 'cancelled').map(b => delBooking(b.id))).then(render));
  });
  document.getElementById('export-json').addEventListener('click', () => {
    fetch('/api/bookings', { headers: { Authorization: authHeader() }})
      .then(r => r.json())
      .then(data => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = 'bookings.json'; a.click(); URL.revokeObjectURL(url);
      });
  });
  document.querySelector('#admin-table').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]'); if (!btn) return;
    const action = btn.getAttribute('data-action'); const id = btn.getAttribute('data-id');
    const op = action === 'delete' ? delBooking(id) : updateStatus(id, action === 'confirm' ? 'confirmed' : 'cancelled');
    op.then(render);
  });
}

function render() {
  const tbody = document.querySelector('#admin-table tbody');
  const dateEl = document.getElementById('admin-date');
  const iso = dateEl.value || todayISO();
  fetch('/api/bookings?date=' + iso, { headers: { Authorization: authHeader() }})
    .then(r => r.json())
    .then(list => {
      tbody.innerHTML = '';
      list.forEach(b => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${b.date}</td>
          <td>${b.start}–${b.end}</td>
          <td>${b.minutes || '-'}</td>
          <td>${b.serviceId || '-'}</td>
          <td>${b.name || '-'}</td>
          <td>${b.phone || '-'}</td>
          <td>${b.notes || '-'}</td>
          <td>${b.status || 'pending'}</td>
          <td>
            <button class="icon-btn" data-action="confirm" data-id="${b.id}">Confirm</button>
            <button class="icon-btn" data-action="cancel" data-id="${b.id}">Cancel</button>
            <button class="icon-btn" data-action="delete" data-id="${b.id}">Delete</button>
          </td>`;
        tbody.appendChild(tr);
      });
    });
}

function todayISO() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function setDefaultDate() { const el = document.getElementById('admin-date'); if (el && !el.value) el.value = todayISO(); }

function updateStatus(id, status) {
  return fetch('/api/bookings/' + id, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: authHeader() }, body: JSON.stringify({ status }) }).then(r => r.json());
}
function delBooking(id) { return fetch('/api/bookings/' + id, { method: 'DELETE', headers: { Authorization: authHeader() } }).then(r => r.json()); }
