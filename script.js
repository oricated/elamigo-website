// Set current year in footer
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

/**
 * Open/Closed status using restaurant local time.
 * Valparaiso, IN is typically America/Chicago (Central Time).
 */
const RESTAURANT_TZ = "America/Chicago";

function formatHour12(h) {
  const ampm = h >= 12 ? "PM" : "AM";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return `${hh}:00 ${ampm}`;
}

function getHourInTimeZone(timeZone) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      hour12: false,
    }).formatToParts(new Date());

    const hourPart = parts.find((p) => p.type === "hour");
    return hourPart ? parseInt(hourPart.value, 10) : new Date().getHours();
  } catch {
    return new Date().getHours();
  }
}

const statusWrap = document.getElementById("open-status");
const hoursSimple = document.getElementById("hours-simple");

if (statusWrap) {
  const dot = statusWrap.querySelector(".status-dot");
  const text = statusWrap.querySelector(".status-text");

  const openHour = 10;  // 10:00 AM
  const closeHour = 22; // 10:00 PM

  const hour = getHourInTimeZone(RESTAURANT_TZ);
  const isOpen = hour >= openHour && hour < closeHour;

  // Show hours only once (here)
  if (hoursSimple) {
    hoursSimple.textContent = `Daily: ${formatHour12(openHour)} – ${formatHour12(closeHour)}`;
  }

  // Status line (no extra repeats besides the open time when closed)
  if (text && dot) {
    if (isOpen) {
      text.textContent = "Open now";
      dot.classList.add("open");
    } else {
      text.textContent = `Closed — opens at ${formatHour12(openHour)}`;
      dot.classList.add("closed");
    }
  }
}
