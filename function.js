document.addEventListener("DOMContentLoaded", function () {
    // Preloader fade out when window fully loads
    window.onload = function () {
      document.body.classList.add("loaded");
    };
  
    // Cookie Consent Handling
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");
    acceptCookies.addEventListener("click", function () {
      cookieConsent.style.display = "none";
      localStorage.setItem("cookiesAccepted", "true");
    });
    if (localStorage.getItem("cookiesAccepted") === "true") {
      cookieConsent.style.display = "none";
    }
  
    // Dark/Light Mode Toggle
    const themeSwitcher = document.getElementById("themeSwitcher");
    themeSwitcher.addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });
  
    // Welcome Modal Popup
    const welcomeModal = document.getElementById("welcomeModal");
    const closeModal = welcomeModal.querySelector(".close");
    setTimeout(function () {
      welcomeModal.style.display = "block";
    }, 1000);
    closeModal.addEventListener("click", function () {
      welcomeModal.style.display = "none";
    });
    window.addEventListener("click", function (e) {
      if (e.target === welcomeModal) {
        welcomeModal.style.display = "none";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        welcomeModal.style.display = "none";
      }
    });
  
    // Mobile Navigation Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  
    // Testimonials Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll(".testimonials .slide");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }
    prevBtn.addEventListener("click", function () {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });
    nextBtn.addEventListener("click", function () {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });
    setInterval(function () {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 5000);
  
    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
      header.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          this.setAttribute("aria-expanded", "false");
        } else {
          content.style.display = "block";
          this.setAttribute("aria-expanded", "true");
        }
      });
    });
  
    // Quiz Submission
    const submitQuiz = document.getElementById("submitQuiz");
    const quizFeedback = document.getElementById("quizFeedback");
    submitQuiz.addEventListener("click", function () {
      const selectedOption = document.querySelector('input[name="quiz"]:checked');
      if (selectedOption) {
        if (selectedOption.id === "option1") {
          quizFeedback.textContent = "Correct! Active Learning is the most effective technique.";
          quizFeedback.style.color = "green";
        } else {
          quizFeedback.textContent = "Incorrect. Please try again!";
          quizFeedback.style.color = "red";
        }
      } else {
        quizFeedback.textContent = "Please select an option.";
        quizFeedback.style.color = "orange";
      }
    });
  
    // Newsletter Form Submission
    const newsletterForm = document.getElementById("newsletterForm");
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for subscribing!");
      newsletterForm.reset();
    });
  
    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formFeedback.textContent = "Your message has been sent successfully!";
      formFeedback.style.color = "green";
      contactForm.reset();
    });
  
    // Animated Counters
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  
    // Custom Cursor
    const customCursor = document.getElementById("customCursor");
    document.addEventListener("mousemove", function (e) {
      customCursor.style.left = e.pageX + "px";
      customCursor.style.top = e.pageY + "px";
    });
  
    // Back-to-Top Button & Scroll Progress Bar
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById("progressBar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // Create Progress Bar Element
    const progressBar = document.createElement("div");
    progressBar.id = "progressBar";
    document.body.appendChild(progressBar);
  
    // Update Footer: Current Year and Time
    const currentYear = document.getElementById("currentYear");
    const currentTime = document.getElementById("currentTime");
    function updateTime() {
      const now = new Date();
      currentYear.textContent = now.getFullYear();
      currentTime.textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();
  
    // Additional features (e.g., interactive charts, custom animations) can be added here.
  });
  