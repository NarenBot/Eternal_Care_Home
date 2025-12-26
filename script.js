let images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg",
    "images/slide5.jpg"
];

let index = 0;
let slider = document.getElementById("slider");

function changeImage() {
    index = (index + 1) % images.length;
    slider.src = images[index];
}

setInterval(changeImage, 3000); // change every 3 seconds


// *SCROLL BUTTON*
let scrollBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

