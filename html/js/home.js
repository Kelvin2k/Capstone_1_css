function home_hiddenButton() {
  document.getElementById("homeButton").style.display = "none";
  document.querySelector(".video video").play();
}

//slick carousel
if (document.querySelector(".row_testimonials")) {
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
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") == "dark") {
    applyDarkTheme();
  }
});
document.querySelector(".fa-sun").onclick = function applyLightTheme() {
  localStorage.setItem("theme", "light");
  location.reload();
};
document.querySelector(".fa-moon").onclick = applyDarkTheme;

function applyDarkTheme() {
  localStorage.setItem("theme", "dark");
  document.querySelector(".fa-moon").style.display = "none";
  document.querySelector(".fa-sun").style.display = "inline";

  //hr
  var hr = document.querySelectorAll("hr");
  hr.forEach((hr) => {
    hr.style.opacity = "0.5";
    hr.style.color = "gray";
  });

  //header
  var navbars = document.querySelectorAll(".navbar");

  navbars.forEach((navbar) => {
    navbar.classList.remove("bg-body-tertiary");
    navbar.style.backgroundColor = "black";
    console.log("Changed navbar:", navbar);
  });

  //background section black
  var backgroundBlack = document.querySelectorAll(
    "body, .home_page, .aboutUs, .offer, .video, .testimonials, .stay_updated, .about_page, .aboutUs, .service_page, .gallery_page, .card, .card-body, .fa-facebook, .fa-twitter, .fa-linkedin"
  );
  backgroundBlack.forEach((backgroundBlack) => {
    backgroundBlack.style.backgroundColor = "black";
  });

  //background section gray
  var backgroundGray = document.querySelectorAll(
    ".services_provide, .ourPlan, .ourTeam, .pages_blog, .blog_item_page, .testimonials"
  );
  backgroundGray.forEach((backgroundGray) => {
    backgroundGray.style.backgroundColor = "#222222";
  });

  // color white
  var Title = document.querySelectorAll(
    "h2, h4, h5, .readMore, .des, .card-text, span, .author_name ,.fa-clock, .fa-user, .ul li span, .layOut, .pages a, .navbar a.nav-link, i.fa-moon "
  );
  Title.forEach((Title) => {
    Title.style.color = "white";
  });

  // color gray
  var pText = document.querySelectorAll(
    "p.text, .p_left, .p_right, .pIcon, .email_text, label, .quote ,.author_city, .contact_text, .text_email"
  );
  pText.forEach((ptext) => {
    ptext.style.color = "#AFAFAF";
  });

  //footer
  footer = document.querySelectorAll("footer");
  footer.forEach((footer) => {
    footer.style.backgroundColor = "#1B1B1B";
  });
}

function findPage() {
  console.log("hello");
}
