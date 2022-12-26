// mobile navigation
const primaryNav = document.querySelector('.nav-link');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
});


window.onload = function() {
    
    var typingSpeed = 50;
    var text1 = "Hello!, I'm Olabiyi";
    // var text2 = " I am a virtual assistant, front-end developer, and data analyst with over three years of experience.";

    function type(element, text) {
        if (text.length > 0) {
            element.innerHTML += text.charAt(0);
            text = text.substring(1);
            setTimeout(function() {
                type(element, text);
        }, typingSpeed);
    }
    
}

    var welcome = document.getElementById("welcome");
    // var message = document.getElementById("welcome-message");
    welcome.innerHTML = "";
    // message.innerHTML = "";

    type(welcome, text1);
    // type(message, text2);
};




// scroll reveal
let index = 0;
const typingTextContainers = document.querySelectorAll('.typing-text-container');

for (const typingTextContainer of typingTextContainers) {
const typingText = typingTextContainer.querySelector('.typing-text');
const textEl = typingText.textContent;
typingText.textContent = '';

const interval = 100;
let length = 0;

function type() {
    if (index < textEl.length) {
        typingText.textContent += textEl.charAt(length);
        length++;
        setTimeout(type, interval);
    }
}

window.addEventListener("scroll", function () {
    const rect = typingTextContainer.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        type();
        }
    });
}

// Testimonial Slide
const testimonials = document.querySelector('.testimonials');
const testimonialsArray = Array.from(testimonials.children);
let currentIndex = 0;

function showNextTestimonial() {
testimonialsArray.forEach((testimonial) => {
    testimonial.style.display = 'none';
});
testimonialsArray[currentIndex].style.display = 'block';
    currentIndex++;
    if (currentIndex >= testimonialsArray.length) {
    currentIndex = 0;
    }
}

setInterval(showNextTestimonial, 3000);


//Contact Submission Form
const messageBox = document.getElementById('message').textContent = "";
const submitButton = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
submitButton.addEventListener('click', () => {
    messageBox;
})


