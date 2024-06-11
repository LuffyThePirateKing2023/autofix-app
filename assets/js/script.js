'use strict';

const header = document.getElementById('header');

// Function to handle scroll events
const handleScroll = () => {
  if (window.scrollY > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  };

};

// Add event listeners for scroll and DOMContentLoaded events
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function(anchorLink) {
    anchorLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default behavior of anchor link
      const targetId = this.getAttribute('href').substring(1); // Get target ID without the #
      const targetElement = document.getElementById(targetId); // Get the target element
      if (targetElement) {
        // Scroll to the target element using smooth behavior
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});