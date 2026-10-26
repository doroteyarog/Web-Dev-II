// Ensure code runs without polluting the global namespace
document.addEventListener("DOMContentLoaded", () => {
  let baseServings = 2;
  let currentServings = 2;

  // DOM Elements
  const servingsDisplay = document.getElementById("servings-count");
  const increaseBtn = document.getElementById("increase-btn");
  const decreaseBtn = document.getElementById("decrease-btn");
  const quantityElements = document.querySelectorAll(".qty");
  const themeToggleBtn = document.getElementById("theme-toggle");

  // Update ingredient quantities proportionally
  function updateQuantities(newServings) {
    quantityElements.forEach((el) => {
      const baseValue = parseFloat(el.getAttribute("data-base"));
      if (!isNaN(baseValue)) {
        const updatedValue = (baseValue / baseServings) * newServings;
        // Format to 1 decimal place if fractional, otherwise whole number
        el.textContent = Number.isInteger(updatedValue) 
          ? updatedValue 
          : updatedValue.toFixed(1);
      }
    });
    servingsDisplay.textContent = newServings;
  }

  // Event Listeners for Servings
  increaseBtn.addEventListener("click", () => {
    if (currentServings < 12) {
      currentServings++;
      updateQuantities(currentServings);
    }
  });

  decreaseBtn.addEventListener("click", () => {
    if (currentServings > 1) {
      currentServings--;
      updateQuantities(currentServings);
    }
  });

  // Dark/Light Theme Switcher
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
