const container = document.getElementById("destinations");
const modal = document.getElementById("detailsModal");
const modalContent = document.getElementById("modalContent");
const searchInput = document.getElementById("searchInput");

function render(destinations) {
  container.innerHTML = "";
  destinations.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${d.name}</h3>
      <span class="tag">${d.country}</span>
      <div class="badge">Budget: ${d.budget}</div>
    `;
    card.onclick = () => showDetails(d);
    container.appendChild(card);
  });
}

function showDetails(d) {
  modalContent.innerHTML = `
    <h2>${d.name}, ${d.country}</h2>
    <p><strong>Highlights:</strong> ${d.highlights.join(", ")}</p>
    <p><strong>Best time to visit:</strong> ${d.bestTime}</p>
    <p><strong>Estimated Budget:</strong> ${d.budget}</p>
  `;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = destinations.filter(d =>
    (d.name + d.country).toLowerCase().includes(q)
  );
  render(filtered);
});

render(destinations);
