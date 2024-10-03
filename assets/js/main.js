$("#banner-slider").owlCarousel({
  loop: true,
  autoplay: true,
  nav: false,
  dots: false,
  margin: 10, // Ensure global margin setting
  responsive: {
    0: {
      items: 1,
      margin: 10,
    },
    600: {
      items: 2,
      margin: 15,
    },
    1000: {
      items: 1, // Adjust for larger screens
  
    },
  },
});
$("#banner-slider-2").owlCarousel({
  loop: true,
  autoplay: true,
  nav: false,
  dots: false,
  margin: 10, // Ensure global margin setting
  responsive: {
    0: {
      items: 1,
      margin: 10,
    },
    600: {
      items: 1,
      margin: 15,
    },
    1000: {
      items: 1, // Adjust for larger screens
   
    },
  },
});

// Toggle sidebar when the menu icon is clicked
document.getElementById("toggleSidebar").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("backdrop");

    // Toggle the sidebar and backdrop visibility
    sidebar.classList.toggle("show");
    backdrop.classList.toggle("active");
});

// Hide sidebar and backdrop when clicking on the backdrop or anywhere outside the sidebar
document.getElementById("backdrop").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("backdrop");

    // Hide the sidebar and backdrop
    sidebar.classList.remove("show");
    backdrop.classList.remove("active");
});

// Optionally, close the sidebar when clicking outside of the sidebar (anywhere on the page)
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("backdrop");
    const toggleButton = document.getElementById("toggleSidebar");

    // If the click is outside the sidebar and not on the toggle button, close the sidebar
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove("show");
        backdrop.classList.remove("active");
    }
});
