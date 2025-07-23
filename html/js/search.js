document.addEventListener("DOMContentLoaded", getFindResult);

function getFindResult() {
  var newKeyWord = localStorage.getItem("keywords");
  console.log("newKeyWord", newKeyWord);
  document.querySelector(".result_search_bar input").value = newKeyWord;
  document.querySelector(
    ".search_result h2"
  ).textContent = `Search Result for: ${newKeyWord}`;
  document.querySelector(
    ".search_result p"
  ).innerHTML = `<p><a href="./../html/index.html">Home</a> <span><i class="fa-solid fa-angles-right"></i></span> Search Result for:..."${newKeyWord}"`;
}

function getFindResultInPage() {
  var keyWord = document.querySelector(".result_search_bar input").value;
  localStorage.setItem("keywords", keyWord);
  var newKeyWord = localStorage.getItem("keywords");
  location.reload();
  document.querySelector(".result_search_bar input").value = newKeyWord;
  document.querySelector(
    ".search_result h2"
  ).textContent = `Search Result for: ${newKeyWord}`;
  document.querySelector(
    ".search_result p"
  ).innerHTML = `<p><a href="./../html/index.html">Home</a> <span><i class="fa-solid fa-angles-right"></i></span> Search Result for:..."${newKeyWord}"`;
}
