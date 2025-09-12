const h = document.getElementById('hora');
const m = document.getElementById('minutos');

function tick() {
  const d = new Date();
  h.textContent = String(d.getHours()).padStart(2, '0');
  m.textContent = String(d.getMinutes()).padStart(2, '0');
}

tick();
setInterval(tick, 1000);
