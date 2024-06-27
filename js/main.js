// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links");

// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove 'text-orange-400' class from all links
    navLinks.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.classList.remove("text-orange-400");
      }
    });

    // Add 'text-orange-400' class to the clicked link
    link.classList.add("text-orange-400");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#carouselExampleCaptions");
  const indicators = carousel.querySelectorAll("[data-twe-slide-to]");
  const items = carousel.querySelectorAll("[data-twe-carousel-item]");
  const prevButton = carousel.querySelector('[data-twe-slide="prev"]');
  const nextButton = carousel.querySelector('[data-twe-slide="next"]');

  let currentIndex = 0;
  const intervalTime = 3000;
  let interval;

  function updateCarousel(index) {
    items.forEach((item, i) => {
      item.classList.remove("hidden", "translate-x-full");
      item.classList.remove("block", "translate-x-0");

      // Apply Tailwind CSS transition classes
      if (i === index) {
        item.classList.add(
          "block",
          "translate-x-0",
          "transition-transform",
          "ease-in-out",
          "duration-300"
        );
      } else {
        item.classList.add("hidden", "translate-x-full");
      }
    });

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("opacity-50", i !== index);
      indicator.classList.toggle("opacity-100", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
  }

  function setSlide(index) {
    currentIndex = index;
    updateCarousel(currentIndex);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => setSlide(index));
  });

  // Automatic sliding every 3 seconds
  interval = setInterval(nextSlide, intervalTime);

  // Pause on hover
  carousel.addEventListener("mouseenter", () => clearInterval(interval));
  carousel.addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, intervalTime);
  });
});

// form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const userName = document.querySelector(".name");
  const userEmail = document.querySelector(".email");
  const userMessage = document.querySelector(".message");

  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const msgError = document.querySelector(".msg-error");
  const successMsg = document.querySelector(".success-msg");
  const successText = document.querySelector(".success-text");

  // console.log(form,userName);
  function sendEmail() {
    const params = {
      name: userName.value,
      email: userEmail.value,
      message: userMessage.value,
    };

    const serviceId = "service_bxifcup";
    const templateId = "template_umwgcq7";

    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        userName.value = "";
        userEmail.value = "";
        userMessage.value = "";
        setTimeout(() => {
          successMsg.classList.remove("hidden");
          successText.innerHTML =
            "<img src='assets/img/checked.png' width='25px'> Message sent successfully!";
        }, 0);
        setTimeout(() => {
          successMsg.classList.add("hidden");
        }, 5000);
      })
      .catch((err) => console.log(err));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validation for the username field
    if (userName.value.trim() === "") {
      nameError.textContent = "Username is required.";
      isValid = false;
    } else if (userName.value.trim().length < 3) {
      nameError.textContent =
        "Username must be greater or equal to 3 characters.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Validation for the email field
    if (userEmail.value.trim() === "") {
      emailError.textContent = "Email address is required.";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userEmail.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
    }

    // Validation for the message field
    if (userMessage.value.trim() === "") {
      msgError.textContent = "Message field is required.";
      isValid = false;
    } else if (userMessage.value.trim().length < 10) {
      msgError.textContent = "Message must be greater than 10 characters.";
      isValid = false;
    } else {
      msgError.textContent = "";
    }

    // Submitting the form data
    if (isValid) {
      sendEmail();
    }
  });
});
