const container = document.getElementById("locations");
const searchInput = document.getElementById("search");

function render(data) {
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h2>${item.name}</h2>

        <h3>📍 Places to Visit:</h3>
        <ul>${item.places.map(p => `<li>${p}</li>`).join("")}</ul>

        <h3>🍽 Local Food:</h3>
        <ul>${item.food.map(f => `<li>${f}</li>`).join("")}</ul>

        <h3>🧳 Itinerary:</h3>
        <ul>${item.itinerary.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `;
  });
}

// initial load
render(TRAVEL_DATA);

// search filter
searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = TRAVEL_DATA.filter(item =>
    item.name.toLowerCase().includes(value)
  );
  render(filtered);
});
