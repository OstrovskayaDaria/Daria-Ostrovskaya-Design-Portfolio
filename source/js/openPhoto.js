var footerButton = document.querySelector(".page-footer__button");
var footerPhoto = document.querySelector(".page-footer__photo");
footerButton.addEventListener("click", function() {
  if (footerPhoto.classList.contains("page-footer__photo--closed")) {
    footerPhoto.classList.remove("page-footer__photo--closed");
    footerPhoto.classList.add("page-footer__photo--opened");
  } else {
    footerPhoto.classList.add("page-footer__photo--closed");
    footerPhoto.classList.remove("page-footer__photo--opened");
  }
});
