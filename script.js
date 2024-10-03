const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
 
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

// close menu when the navlink is clicked
navlinks.forEach(link => {
    link.addEventListener("click" , () => menuOpenButton.click());
})

// initialize swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Validate form
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // You can add more validation here (e.g., email format)

    alert('Message sent successfully!');
});
