function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);

  document.getElementById("time").textContent = formattedTime;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("date").textContent = formattedDate;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call