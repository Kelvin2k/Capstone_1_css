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
// document.querySelector(".fa-sun").onclick = function applyLightTheme() {
//   localStorage.setItem("theme", "light");
//   location.reload();
// };

document.querySelector(".fa-sun").onclick = applyLightTheme;

function applyLightTheme() {
  localStorage.setItem("theme", "light");
  location.reload();
  document.querySelector(".fa-sun").style.display = "none";
  document.querySelector(".fa-moon").style.display = "inline";

  var hr = document.querySelectorAll("hr");
  hr.forEach((hr) => {
    hr.style.opacity = "";
    hr.style.color = "";
    hr.style.transition = "opacity 0.3s ease, color 0.3s ease";
  });

  var navbars = document.querySelectorAll(".navbar");
  iconSun.forEach((iconSun) => {
    iconSun.style.color = "";
    iconSun.style.transition = "color 0.3s ease";
  });

  var backgroundBlack = document.querySelectorAll(
    "body, .home_page, .aboutUs, .offer, .video, .testimonials, .stay_updated, .about_page, .aboutUs, .service_page, .gallery_page, .card, .card-body, .fa-facebook, .fa-twitter, .fa-linkedin"
  );
  backgroundBlack.forEach((backgroundBlack) => {
    backgroundBlack.style.backgroundColor = "";
    backgroundBlack.style.transition = "background-color 0.3s ease";
  });

  var backgroundGray = document.querySelectorAll(
    ".services_provide, .ourPlan, .ourTeam, .pages_blog, .blog_item_page, .testimonials"
  );
  backgroundGray.forEach((backgroundGray) => {
    backgroundGray.style.backgroundColor = "";
    backgroundGray.style.transition = "background-color 0.3s ease";
  });

  var Title = document.querySelectorAll(
    "h2, h4, h5, .readMore, .des, .card-text, span, .author_name ,.fa-clock, .fa-user"
  );
  Title.forEach((Title) => {
    Title.style.color = "";
    Title.style.transition = "color 0.3s ease";
  });

  var pText = document.querySelectorAll(
    "p.text, .p_left, .p_right, .pIcon, .email_text, label, .quote ,.author_city, .contact_text, .text_email"
  );
  pText.forEach((ptext) => {
    ptext.style.color = "";
    ptext.style.transition = "color 0.3s ease";
  });

  var footer = document.querySelectorAll("footer");
  footer.forEach((footer) => {
    footer.style.backgroundColor = "";
    footer.style.transition = "background-color 0.3s ease";
  });
}
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
    "h2, h4, h5, .readMore, .des, .card-text, span, .author_name ,.fa-clock, .fa-user, .ul li span, .layOut, .pages a, .navbar a.nav-link, i.fa-moon"
  );
  Title.forEach((Title) => {
    Title.style.color = "white";
  });

  // color gray
  var pText = document.querySelectorAll(
    "p.text, .p_left, .p_right, .pIcon, .email_text, label, .quote ,.author_city, .contact_text, .text_email, .search_result_text"
  );
  pText.forEach((ptext) => {
    ptext.style.color = "#AFAFAF";
  });

  //footer
  footer = document.querySelectorAll("footer");
  footer.forEach((footer) => {
    footer.style.backgroundColor = "#1B1B1B";
  });

  // Add hover effects for card titles
  var cardTitles = document.querySelectorAll(".card-body h4");
  cardTitles.forEach((title) => {
    title.addEventListener("mouseover", () => {
      title.style.color = "#179a46"; // Replace with $color_main value
    });
    title.addEventListener("mouseout", () => {
      title.style.color = "white";
    });
  });

  // Add hover effects for card text
  var cardTexts = document.querySelectorAll(".card_text p");
  cardTexts.forEach((text) => {
    text.addEventListener("mouseover", () => {
      text.style.color = "red";
    });
    text.addEventListener("mouseout", () => {
      text.style.color = "white";
    });
  });

  // Add hover effects for readmore
  var cardTexts = document.querySelectorAll(
    ".readMore p.readMore, .team_image h4"
  );
  cardTexts.forEach((text) => {
    text.addEventListener("mouseover", () => {
      text.style.color = "#179a46";
    });
    text.addEventListener("mouseout", () => {
      text.style.color = "white";
    });
  });

  // Add hover effects for pagination links
  var pageLinks = document.querySelectorAll(".pages a");
  pageLinks.forEach((link) => {
    if ((link.style.color = link.classList.contains("active"))) {
      link.style.color = "#179a46";
    } else {
      link.addEventListener("mouseover", () => {
        link.style.color = "#179a46"; // Replace with $color_main value
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "white";
      });
    }
  });
}

function findPage() {
  console.log("hello");
  document.querySelector(".search_screen_overlay").style.display = "inline";
  document.querySelector(".search_x_mark").style.display = "block";
  document.querySelector(".search_bar input").style.display = "block";
  document.querySelector(".search_bar button").style.display = "block";
}

function closeFindPage() {
  document.querySelector(".search_screen_overlay").style.display = "none";
  document.querySelector(".search_x_mark").style.display = "none";
  document.querySelector(".search_bar input").style.display = "none";
  document.querySelector(".search_bar button").style.display = "none";
}

function lookingforInfo() {
  console.log("hello");
  const searchInput = document.querySelector(".search_bar input");
  if (!searchInput) {
    console.error("Search input not found: .search_bar input");
    return;
  }

  const keywords = searchInput.value.trim();
  if (keywords === "") {
    alert("Please enter a search query");
    return;
  }
  console.log("keywords", keywords);
  localStorage.setItem("keywords", keywords);

  // Redirect to search_results.html with keywords as query parameter
  window.location.href = `search_results.html?q=${encodeURIComponent(
    keywords
  )}`;

  event.preventDefault();
  var newKeyWord = localStorage.getItem("keywords");
  console.log("newKeyWord", newKeyWord);
  document.querySelector(".result_search_bar input").value = newKeyWord;
  document.querySelector(
    ".search_result h2"
  ).textContent = `Search Result for: ${newKeyWord}`;
  document.querySelector(
    ".search_result p"
  ).textContent = `Search Result for...: ${newKeyWord}`;
}
