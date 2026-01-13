const container = document.getElementById("destinations");
const modal = document.getElementById("detailsModal");
const modalContent = document.getElementById("modalContent");
const searchInput = document.getElementById("searchInput");

function renderCards(list) {
  container.innerHTML = "";
  list.forEach((d, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${d.name}</h3>`;
    card.onclick = () => showDetails(d);
    container.appendChild(card);
  });
}

function showDetails(d) {
  modalContent.innerHTML = `
    <h2>${d.name}</h2>
    <p><strong>Highlights:</strong> ${d.highlights.join(", ")}</p>
    <p><strong>Best time:</strong> ${d.bestTime}</p>
    <p><strong>Estimated Budget:</strong> ${d.budget}</p>
    <button onclick="closeModal()">Close</button>
  `;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = destinations.filter(d => d.name.toLowerCase().includes(q));
  renderCards(filtered);
});

renderCards(destinations);
