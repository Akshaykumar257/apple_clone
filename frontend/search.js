// Button click: save query & redirect
document.querySelector(".search-button").addEventListener("click", function () {
  const query = document.querySelector(".search-input").value.trim().toLowerCase();

  if (query) {
    alert("🔍 You searched for: " + query);
    localStorage.setItem("searchQuery", query); // Save for use in products.html
    window.location.href = "products.html";     // Redirect to product page
  } else {
    alert("⚠️ Please enter a search term.");
  }
});

// Product page logic
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const productCards = document.querySelectorAll(".product-card");
  const isProductsPage = window.location.pathname.includes("products.html");

  if (isProductsPage && productCards.length > 0) {
    const savedQuery = localStorage.getItem("searchQuery")?.toLowerCase();
    if (savedQuery) {
      productCards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const match = name.includes(savedQuery);
        card.style.display = match ? "block" : "none";
      });

      // Optional: scroll to products
      const section = document.getElementById("products");
      if (section) section.scrollIntoView({ behavior: "smooth" });

      localStorage.removeItem("searchQuery"); // Clean up
    }

    // Live filtering on products page
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const liveQuery = searchInput.value.toLowerCase();
        productCards.forEach(card => {
          const productName = card.querySelector("h3").textContent.toLowerCase();
          const isMatch = productName.includes(liveQuery);
          card.style.display = isMatch ? "block" : "none";
        });
      });
    }
  }
});