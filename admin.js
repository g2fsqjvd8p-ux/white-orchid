document.addEventListener('DOMContentLoaded', () => { initAdmin(); });

function initAdmin() {
  setDefaultDate();
  render();
  renderOperators();
  document.getElementById('admin-date').addEventListener('change', render);
  document.getElementById('clear-cancelled').addEventListener('click', () => {
    const list = readBookings().filter(b => b.status !== 'cancelled');
    writeBookings(list);
    render();
  });
  document.getElementById('export-json').addEventListener('click', () => {
    const data = readBookings();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'bookings.json'; a.click(); URL.revokeObjectURL(url);
  });
  document.querySelector('#admin-table').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]'); if (!btn) return;
    const action = btn.getAttribute('data-action'); const id = btn.getAttribute('data-id');
    if (action === 'delete') { delBooking(id); }
    else if (action === 'confirm' || action === 'cancel') { updateStatus(id, action === 'confirm' ? 'confirmed' : 'cancelled'); }
    else if (action === 'reschedule') {
      const row = btn.closest('tr');
      const dateVal = row.querySelector('.admin-date-input')?.value || todayISO();
      const timeVal = row.querySelector('.admin-time-select')?.value || '';
      const opVal = row.querySelector('.admin-operator')?.value || '';
      const list = readBookings();
      const b = list.find(x => x.id === id);
      const minutes = Number(b?.minutes) || 60;
      const summary = `Date: ${dateVal}\nTime: ${timeVal}\nOperator: ${opVal || '-'}`;
      const ok = window.confirm(summary);
      if (ok) { rescheduleBooking(id, dateVal, timeVal, opVal, minutes); }
    }
    render();
  });
  document.querySelector('#admin-table').addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches('.admin-date-input')) {
      const id = t.getAttribute('data-id');
      const val = t.value;
      updateBookingDate(id, val);
      render();
      return;
    }
    if (t.matches('.admin-time-select')) {
      const id = t.getAttribute('data-id');
      const val = t.value;
      updateTime(id, val);
      const row = t.closest('tr');
      const list = readBookings();
      const b = list.find(x => x.id === id);
      const endEl = row && row.querySelector('.admin-end');
      if (b && endEl) endEl.textContent = b.end;
    }
    if (t.matches('.admin-operator')) {
      const id = t.getAttribute('data-id');
      const val = t.value;
      updateOperator(id, val);
      try { if (val) localStorage.setItem('current_operator', val); } catch {}
    }
  });
  document.querySelector('#admin-table').addEventListener('input', (e) => {
    const t = e.target;
    if (!t.matches('.admin-operator')) return;
    const id = t.getAttribute('data-id');
    const val = t.value;
    updateOperator(id, val);
    try { if (val) localStorage.setItem('current_operator', val); } catch {}
    const row = t.closest('tr');
    const dateEl = document.getElementById('admin-date');
    const iso = (dateEl && dateEl.value) || todayISO();
    const list = readBookings();
    const b = list.find(x => x.id === id);
    if (b && row) {
      const cell = row.children && row.children[1];
      if (cell) cell.innerHTML = buildTimeSelect(b.id, iso, b.operatorId || '', Number(b.minutes) || 60, b.start) + '–<span class="admin-end">' + b.end + '</span>';
    }
  });
  const opsTable = document.querySelector('#operators-table');
  if (opsTable) {
    opsTable.addEventListener('input', (e) => {
      const inp = e.target.closest('.op-name'); if (!inp) return;
      const id = inp.getAttribute('data-id');
      const name = inp.value.trim();
      renameOperator(id, name);
    });
    opsTable.addEventListener('change', (e) => {
      const idInput = e.target.closest('.op-id');
      if (idInput) {
        const oldId = idInput.getAttribute('data-old-id');
        const newId = idInput.value.trim();
        const ok = validateOperatorId(newId, oldId);
        if (!ok) { idInput.value = oldId; return; }
        renameOperatorId(oldId, newId);
        renderOperators();
        render();
        return;
      }
      const inp = e.target.closest('.op-name'); if (!inp) return;
      const id = inp.getAttribute('data-id');
      const name = inp.value.trim();
      renameOperator(id, name);
      renderOperators();
      render();
    });
    opsTable.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action="op-delete"]'); if (!btn) return;
      const id = btn.getAttribute('data-id');
      deleteOperator(id);
      renderOperators();
      render();
    });
  }
}

function render() {
  const tbody = document.querySelector('#admin-table tbody');
  const dateEl = document.getElementById('admin-date');
  const iso = dateEl.value || todayISO();
  const list = readBookings().filter(b => b.date === iso);
  tbody.innerHTML = '';
  list.forEach(b => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="date" class="admin-date-input" data-id="${b.id}" value="${b.date}" /></td>
      <td>${buildTimeSelect(b.id, iso, b.operatorId || '', Number(b.minutes) || 60, b.start)}–<span class="admin-end">${b.end}</span></td>
      <td>${b.minutes || '-'}</td>
      <td>${b.serviceId || '-'}</td>
      <td>${b.name || '-'}</td>
      <td>${b.phone || '-'}</td>
      <td>${b.notes || '-'}</td>
      <td>${b.status || 'pending'}</td>
      <td>${renderOperatorSelect(b.id, b.operatorId)}</td>
      <td>
        <button class="icon-btn" data-action="confirm" data-id="${b.id}">Confirm</button>
        <button class="icon-btn" data-action="cancel" data-id="${b.id}">Cancel</button>
        <button class="icon-btn" data-action="reschedule" data-id="${b.id}">Reschedule</button>
        <button class="icon-btn" data-action="delete" data-id="${b.id}">Delete</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function todayISO() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function setDefaultDate() { const el = document.getElementById('admin-date'); if (el && !el.value) el.value = todayISO(); }

function updateStatus(id, status) {
  const list = readBookings();
  const idx = list.findIndex(b => b.id === id);
  if (idx !== -1) { list[idx].status = status; writeBookings(list); }
}
function delBooking(id) {
  const list = readBookings().filter(b => b.id !== id);
  writeBookings(list);
}

function readOperators() {
  try {
    const raw = localStorage.getItem('operators');
    const def = [ { id: 'op-01', name: 'Anong' }, { id: 'op-02', name: 'Bua' }, { id: 'op-03', name: 'Dao' } ];
    const list = raw ? JSON.parse(raw) : def;
    const normalized = (Array.isArray(list) ? list : def).map(o => ({ id: mapOpId(o.id), name: o.name }));
    return normalized.filter(o => o && o.id && o.name);
  } catch {
    return [ { id: 'op-01', name: 'Anong' }, { id: 'op-02', name: 'Bua' }, { id: 'op-03', name: 'Dao' } ];
  }
}
function mapOpId(id) {
  if (id === 'op-anong') return 'op-01';
  if (id === 'op-bua') return 'op-02';
  if (id === 'op-dao') return 'op-03';
  return id;
}
function writeOperators(list) { localStorage.setItem('operators', JSON.stringify(list)); }
function validateOperatorId(newId, oldId) {
  if (!/^op\-[0-9]{2}$/.test(newId)) { alert('Invalid ID. Use format op-01'); return false; }
  const ops = readOperators();
  if (ops.some(o => o.id === newId && o.id !== oldId)) { alert('ID already exists'); return false; }
  return true;
}
function renameOperatorId(oldId, newId) {
  const ops = readOperators();
  const idx = ops.findIndex(o => o.id === oldId);
  if (idx === -1) return;
  ops[idx].id = newId;
  writeOperators(ops);
  const bookings = readBookings();
  bookings.forEach(b => { if (b.operatorId === oldId) b.operatorId = newId; });
  writeBookings(bookings);
  try {
    const cur = localStorage.getItem('current_operator');
    if (cur === oldId) localStorage.setItem('current_operator', newId);
  } catch {}
}
function renameOperator(id, name) {
  const ops = readOperators();
  const idx = ops.findIndex(o => o.id === id);
  if (idx === -1) return;
  ops[idx].name = name || ops[idx].name;
  writeOperators(ops);
}
function deleteOperator(id) {
  const ops = readOperators().filter(o => o.id !== id);
  writeOperators(ops);
  try { const cur = localStorage.getItem('current_operator'); if (cur === id) localStorage.removeItem('current_operator'); } catch {}
}
function renderOperatorSelect(id, currentId) {
  const ops = readOperators();
  const opts = ['<option value="">-</option>'].concat(ops.map(o => `<option value="${o.id}">${o.name}</option>`)).join('');
  const sel = document.createElement('select');
  sel.className = 'admin-operator';
  sel.setAttribute('data-id', id);
  sel.innerHTML = opts;
  const hasCurrent = currentId && ops.some(o => o.id === currentId);
  sel.value = hasCurrent ? currentId : (getCurrentOperatorId() || '');
  return sel.outerHTML;
}
function getCurrentOperatorId() {
  try {
    const cur = localStorage.getItem('current_operator');
    const mapped = cur ? mapOpId(cur) : '';
    if (mapped && mapped !== cur) localStorage.setItem('current_operator', mapped);
    if (mapped) return mapped;
    const ops = readOperators();
    return ops[0]?.id || '';
  } catch {
    const ops = readOperators();
    return ops[0]?.id || '';
  }
}
const SCHEDULE_STORE_KEY = 'schedule_config';
const DEFAULT_SCHEDULE = { startHour: 10, endHour: 21, slotMinutes: 30 };
const OPERATOR_SCHEDULES = {
  'op-01': { startHour: 10, endHour: 21, slotMinutes: 30 },
  'op-02': { startHour: 11, endHour: 20, slotMinutes: 30 },
  'op-03': { startHour: 10, endHour: 22, slotMinutes: 30 }
};
function getScheduleConfig() {
  try {
    const raw = localStorage.getItem(SCHEDULE_STORE_KEY);
    const cfg = raw ? JSON.parse(raw) : DEFAULT_SCHEDULE;
    const s = Number(cfg.startHour) || DEFAULT_SCHEDULE.startHour;
    const e = Number(cfg.endHour) || DEFAULT_SCHEDULE.endHour;
    const m = Number(cfg.slotMinutes) || DEFAULT_SCHEDULE.slotMinutes;
    return { startHour: s, endHour: e, slotMinutes: m };
  } catch {
    return DEFAULT_SCHEDULE;
  }
}
function getScheduleForOperator(operatorId) {
  const base = getScheduleConfig();
  const op = operatorId ? OPERATOR_SCHEDULES[operatorId] : null;
  return op ? { startHour: op.startHour ?? base.startHour, endHour: op.endHour ?? base.endHour, slotMinutes: op.slotMinutes ?? base.slotMinutes } : base;
}
function toMinutes(hhmm) { const [h,m] = hhmm.split(':').map(Number); return h*60+m; }
function buildTimeSelect(id, iso, operatorId, durationMin, currentStart) {
  const effectiveOperatorId = operatorId || getCurrentOperatorId();
  const cfg = getScheduleForOperator(effectiveOperatorId || null);
  const startMin = cfg.startHour * 60;
  const endMin = cfg.endHour * 60;
  const step = cfg.slotMinutes;
  const toStr = n => String(Math.floor(n/60)).padStart(2,'0') + ':' + String(n%60).padStart(2,'0');
  const appts = readBookings().filter(b => b.date === iso && b.status !== 'cancelled' && (!effectiveOperatorId || (b.operatorId ? b.operatorId === effectiveOperatorId : true)) && b.id !== id);
  const free = [];
  for (let t = startMin; t + durationMin <= endMin; t += step) {
    const s = toStr(t);
    const e = toStr(t + durationMin);
    const overlaps = appts.some(a => toMinutes(a.start) < t + durationMin && toMinutes(a.end) > t);
    if (!overlaps) free.push({ start: s, end: e });
  }
  const sel = document.createElement('select');
  sel.className = 'admin-time-select';
  sel.setAttribute('data-id', id);
  sel.innerHTML = free.map(x => `<option value="${x.start}">${x.start}–${x.end}</option>`).join('');
  sel.value = currentStart;
  return sel.outerHTML;
}
function updateTime(id, startHHMM) {
  if (!/^\d{2}:\d{2}$/.test(startHHMM)) return;
  const [h, m] = startHHMM.split(':').map(Number);
  if (h < 0 || h > 23 || m < 0 || m > 59) return;
  const list = readBookings();
  const idx = list.findIndex(b => b.id === id);
  if (idx === -1) return;
  const minutes = Number(list[idx].minutes) || 60;
  const total = h * 60 + m + minutes;
  const eh = Math.floor(total / 60);
  const em = total % 60;
  list[idx].start = startHHMM;
  list[idx].end = String(eh).padStart(2,'0') + ':' + String(em).padStart(2,'0');
  writeBookings(list);
}
function updateOperator(id, input) {
  const list = readBookings();
  const idx = list.findIndex(b => b.id === id);
  if (idx === -1) return;
  const norm = (input || '').toLowerCase().trim();
  const ops = readOperators();
  const byId = ops.find(o => o.id === mapOpId(input));
  const byName = ops.find(o => o.name.toLowerCase() === norm);
  const op = byId || byName || null;
  list[idx].operatorId = op ? op.id : null;
  list[idx].operatorName = op ? op.name : null;
  writeBookings(list);
}
function updateBookingDate(id, isoDate) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return;
  const list = readBookings();
  const idx = list.findIndex(b => b.id === id);
  if (idx === -1) return;
  list[idx].date = isoDate;
  writeBookings(list);
}
function rescheduleBooking(id, isoDate, startHHMM, operatorId, minutes) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return;
  if (!/^\d{2}:\d{2}$/.test(startHHMM)) return;
  const ops = readOperators();
  const mappedOp = operatorId ? mapOpId(operatorId) : '';
  const op = mappedOp ? ops.find(o => o.id === mappedOp) : null;
  const cfg = getScheduleForOperator(mappedOp || null);
  const [h, m] = startHHMM.split(':').map(Number);
  const startMin = h * 60 + m;
  const endMin = startMin + (Number(minutes) || 60);
  if (startMin < cfg.startHour * 60 || endMin > cfg.endHour * 60) { alert('Outside schedule'); return; }
  const list = readBookings();
  const idx = list.findIndex(b => b.id === id);
  if (idx === -1) return;
  const conflict = list.some(b => b.id !== id && b.date === isoDate && b.status !== 'cancelled' && (mappedOp ? (b.operatorId ? b.operatorId === mappedOp : false) : true) && toMinutes(b.start) < endMin && toMinutes(b.end) > startMin);
  if (conflict) { alert('Conflicts with another booking'); return; }
  const eh = Math.floor(endMin / 60);
  const em = endMin % 60;
  list[idx].date = isoDate;
  list[idx].start = startHHMM;
  list[idx].end = String(eh).padStart(2,'0') + ':' + String(em).padStart(2,'0');
  list[idx].operatorId = op ? op.id : (mappedOp || null);
  list[idx].operatorName = op ? op.name : null;
  writeBookings(list);
}

function readBookings() {
  try { const raw = localStorage.getItem('bookings'); return raw ? JSON.parse(raw) : []; } catch { return []; }
}
function writeBookings(list) {
  localStorage.setItem('bookings', JSON.stringify(list));
}
function renderOperators() {
  const tbody = document.querySelector('#operators-table tbody');
  if (!tbody) return;
  const ops = readOperators();
  tbody.innerHTML = '';
  ops.forEach(o => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="text" class="op-id" data-old-id="${o.id}" value="${o.id}" /></td>
      <td><input type="text" class="op-name" data-id="${o.id}" value="${o.name}" /></td>
      <td><button class="icon-btn" data-action="op-delete" data-id="${o.id}">Delete</button></td>`;
    tbody.appendChild(tr);
  });
}
