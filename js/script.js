const buttonOpen = document.querySelector('.support__buttons3');
const popUp = document.querySelector(".modal-login");
const buttonClose = document.querySelector('.buttonenter');


buttonOpen.addEventListener("click", function (event) {
   event.preventDefault();
   popUp.classList.add("modal-show");
});


buttonClose.addEventListener("click", function (event) {
   event.preventDefault();
   popUp.classList.remove("modal-show");
});




const photoButton = document.querySelector('.nextbutton');
const photoButton2 = document.querySelector('.backbutton');
const photoOne = document.querySelector('.photo1');
const photoTwo = document.querySelector('.photo2');

photoButton.addEventListener("click", function (event) {
   event.preventDefault();
   photoOne.hidden = true;

});
photoButton.addEventListener("click", function (event) {
   event.preventDefault();
   photoTwo.classList.add("photo3");
});

photoButton2.addEventListener("click", function (event) {
   event.preventDefault();
   photoTwo.classList.remove("photo3");

});
photoButton2.addEventListener("click", function (event) {
   event.preventDefault();
   photoOne.hidden = false;
});


// const list = document.querySelector('.site-navigation');

// list.addEventListener("click", function (event) {
//    if (event.target.closest('.nav-item')) {
//       console.log("Клик!");
//    }

// });


