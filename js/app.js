let barsIcon = document.querySelector(".menu__bars");
let items = document.querySelector(".menu__items");
let timesIcon = document.querySelector(".menu__times");
//----------------------------------------------------------//
barsIcon.addEventListener("click", function () {
    items.style.left = 0;
})

timesIcon.addEventListener("click", function () {
    items.style.left = "-208px";
})
