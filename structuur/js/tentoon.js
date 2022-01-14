//javascript voor de huidige tentoonstelling
let tentoonLinks = document.querySelectorAll("#tentoonstelling_selection li");
let tentoonstellingen = document.querySelectorAll(
  "#total_tentoonstelling section"
);
tentoonLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    tentoonstellingen.forEach((tentoon) => {
      tentoon.style.display = "none";
    });
    tentoonLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    document.querySelector(`#stelling_${index}`).style.display = "";
  });
});
tentoonLinks[0].click();

//javascript voor wanneer je op een tentoonstellings foto klikt
let tentoonstellingImgs = document.querySelectorAll(
  "#total_tentoonstelling section img"
);
let overlayElement = document.querySelector("#bigTentoon");
let overlayImg = overlayElement.querySelector("img");
tentoonstellingImgs.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    overlayElement.classList.add("open");
    document.body.style.overflow = "hidden";
    overlayImg.src = img.src;
    overlayImg.alt = img.alt;
    console.log(img.width);
    console.log(img.height);
  });
});
function closeOverlay() {
  overlayElement.classList.remove("open");
  overlayImg.src = "";
  overlayImg.alt = "";
  document.body.style.overflow = "";
}
