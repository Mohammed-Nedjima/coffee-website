const opneMenuButton = document.getElementById("open-menu-btn");

opneMenuButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
  console.log(document.body.classList);
});

// swiper slider

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// handling the form submission
const form = document.getElementById("contact-form");
const formInputs = document.querySelectorAll(".input-field");
const formValues = {
  name: formInputs[0],
  email: formInputs[1],
  message: formInputs[2]
};
const formButton = document.getElementById("submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validationRules = {
    name: {
      required: true,
      minLength: 3,
      maxLength: 50
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 300
    }
  };

  const validateForm = (values, rules) => {
    let isValidForm = true;
    for (const field in rules) {
      const container = values[field];
      const rule = rules[field];
      const value = container.firstElementChild.value;

      let invalid = false;
      if (rule.required && !value.trim()) {
        invalid = true;
      }
      if (!invalid) {
        invalid =
          (rule.minLength && value.length < rule.minLength) ||
          (rule.maxLength && value.length > rule.maxLength) ||
          (rule.pattern && !rule.pattern.test(value));
      }
      container.setAttribute("aria-invalid", invalid ? "true" : "false");
      isValidForm = isValidForm && !invalid;
    }
    console.log(isValidForm);

    if (isValidForm) {
      // Submit the form or perform other actions when form is valid
      console.log("Form submitted successfully.");
    } else {
      console.log("Form validation failed.");
    }
  };

  validateForm(formValues, validationRules);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
