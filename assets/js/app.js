const submitBtn = document.getElementById("submit");
const modalBox = document.querySelector('.modal-box');
const mainBox = document.querySelector('.main-box');


submitBtn.addEventListener("click", (e) => {
  console.log(modalBox);
  modalBox.classList.add('active')
  mainBox.classList.add('inactive')
});
