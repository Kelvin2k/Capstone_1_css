function home_hiddenButton() {
  document.getElementById("homeButton").style.display = "none";
  document.querySelector(".video video").play();
}

function initSlick() {
  var $slider = $(".row_testimonials");

  if (window.matchMedia("(max-width: 992px)").matches) {
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
    });
  } else {
    $slider.slick({
      slidesToShow: 2, // Adjust as needed for larger screens
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
    });
  }
}

// Initialize on page load
initSlick();

// Re-initialize on window resize
$(window).resize(function () {
  $(".row_testimonials").slick("unslick"); // Destroy existing slider
  initSlick(); // Reinitialize with new settings
});
