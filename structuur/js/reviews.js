// javascript voor de reviews
let reviewContainer = document.querySelector(".review_container");
let curRevIndex = 1;
let reviews = reviewContainer.querySelectorAll(".review_item");

function setReviews() {
  reviews.forEach((review, index) => {
    review.dataset.index = index;
    review.style.left = `${(index - curRevIndex) * 30 + 50}%`;
    review.style.transform = `translate(-50%, -50%) scale(${
      1 - 1.9 * (Math.abs(curRevIndex - index) / (reviews.length - 1))
    })`; // hier wordt ieder element gescaled: 1 - 1.9 * (het verschil)/(hoeveel reviews)
  }); // hierdoor zorg ik ervoor dat de huidige review niet kleiner wordt en dat andere procentueel kleiner worden
}

function changeReview(toIndex) {
  if (toIndex < 0 || toIndex >= reviews.length) return;
  curRevIndex = toIndex;
  setReviews();
}
document.querySelector("#rev_prev").onclick = () =>
  changeReview(curRevIndex - 1);
document.querySelector("#rev_next").onclick = () =>
  changeReview(curRevIndex + 1);
setReviews();
