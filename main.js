// Fetch and display tourist destinations
async function loadDestinations() {
  try {
    const response = await fetch("destinations.json");
    const destinations = await response.json();

    const container = document.getElementById("destinations-container");
    container.innerHTML = "";

    destinations.forEach((destination, index) => {
      const card = createDestinationCard(destination, index);
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading destinations:", error);
    document.getElementById("destinations-container").innerHTML =
      '<div class="loading" style="color: #ff6b6b;">Failed to load destinations. Please try again later.</div>';
  }
}

function createDestinationCard(destination, index) {
  const card = document.createElement("div");
  card.className = "destination-card";

  // Create Google Maps URL with Street View
  const mapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(destination.address)}/@${destination.coordinates},15z`;
  const streetViewUrl = `https://www.google.com/maps/@${destination.coordinates},3a,75y,90t/data=!3m7!1e1!3m5!1s-!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk!7i13312!8i6656`;

  card.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${destination.name}</h3>
        </div>
        <div class="card-body">
            <p class="card-description">${destination.description}</p>
            <div class="card-address">
                <span class="address-icon">📍</span>
                <span>${destination.address}</span>
            </div>
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="maps-button">
                <span>🗺️</span>
                <span>View on Google Maps</span>
            </a>
        </div>
    `;

  return card;
}

// Add click tracking for analytics (optional)
function trackMapClick(destinationName) {
  console.log(`User clicked maps for: ${destinationName}`);
  // You can add analytics tracking here if needed
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadDestinations();

  // Add smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".destination-card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    } else {
      card.style.transform = "";
    }
  });
});