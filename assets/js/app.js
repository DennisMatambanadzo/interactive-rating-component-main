const submitBtn = document.getElementById("submit");
const modalBox = document.querySelector(".modal-box");
const mainBox = document.querySelector(".main-box");
const counter = document.getElementById('counter');

const ratingInputs = document.getElementsByName("rating");
let rating = 0;
submitBtn.addEventListener("click", (e) => {
  let i = 0;
  ratingInputs.forEach((input) => {
    i++;
    if (input.checked) {
      rating = i

    }
  });
  modalBox.classList.add("active");
  counter.innerHTML = rating;
  mainBox.classList.add("inactive");
});
