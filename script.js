// Set current year in footer
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// Basic open/closed status (local time)
const statusText = document.getElementById("open-status");
if (statusText) {
  const now = new Date();
  const openHour = 10;
  const closeHour = 22;
  const hour = now.getHours();
  const isOpen = hour >= openHour && hour < closeHour;

  statusText.textContent = isOpen
    ? "Open now • Closes at 10:00 PM"
    : "Closed now • Opens at 10:00 AM";
}
