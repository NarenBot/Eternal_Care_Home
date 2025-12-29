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


// Add Validation + Google Sheet Save (JavaScript)
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !phone || !message) {
        statusMsg.style.color = "red";
        statusMsg.innerText = "All fields are required.";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        statusMsg.style.color = "red";
        statusMsg.innerText = "Please enter a valid email address.";
        return;
    }

    if (phone.length < 10) {
        statusMsg.style.color = "red";
        statusMsg.innerText = "Please enter a valid phone number.";
        return;
    }

    // Send to Google Sheet
    fetch("https://script.google.com/macros/s/AKfycbzayul1C46Ga4DpIbTRQQFM1dU_VwbY2_odsd1L43CTPrQ1RFGWeCdjs2eJqwDSaI63/exec", {
    method: "POST",
    body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message
    })
    })
    .then(res => res.text())
    .then(data => {
        statusMsg.style.color = "green";
        statusMsg.innerText = "Message Sent Successfully!";
        form.reset();
    })
    .catch(err => {
        statusMsg.style.color = "red";
        statusMsg.innerText = "Something went wrong. Please try again.";
    });

});
