document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
      // Toggle hamburger animation
      this.classList.toggle('active');
    });
  }

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if it's open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          if (hamburger) {
            hamburger.classList.remove('active');
          }
        }
      }
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    testimonials[index].style.display = 'block';
    dots[index].classList.add('active');
  }

  // Auto slide every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
    });
  });

  // Form submission handling
  const counsellingForm = document.getElementById('counselling-form');
  if (counsellingForm) {
    counsellingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your interest! We will contact you soon.');
      this.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
});

// Hero Carousel Auto Switch
let slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

setInterval(() => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}, 4000); // 4 seconds per image

