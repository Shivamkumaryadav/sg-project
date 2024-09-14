// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links");

// Get the current URL
const currentUrl = window.location.href;

// Loop through each navigation link
navLinks.forEach((link) => {
  // If the href matches the current URL, add the active class
  if (link.href === currentUrl) {
    link.classList.add("text-orange-400");
  } else {
    // Otherwise, remove the active class
    link.classList.remove("text-orange-400");
  }

  // Add click event listener to each link to handle manual clicks
  link.addEventListener("click", () => {
    // Remove 'text-orange-400' class from all links
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove("text-orange-400");
    });

    // Add 'text-orange-400' class to the clicked link
    link.classList.add("text-orange-400");
  });
});

// thank you modal open
document.addEventListener("DOMContentLoaded", function () {
  const thankYouModal = document.querySelector(".thank-you-modal");

  setTimeout(() => {
    thankYouModal.classList.remove("hidden");
    thankYouModal.classList.add("flex");
  }, 3000);

  const closeModalButton = document.querySelector(".close-modal");
  closeModalButton.addEventListener("click", () => {
    thankYouModal.classList.remove("flex");
    thankYouModal.classList.add("hidden");
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
  const closeSubmissionModal = document.querySelector(
    ".close-submission-modal"
  );
  const openSubmissionModal = document.querySelector(
    ".contact-submission-modal"
  );
  // console.log(closeSubmissionModal);

  closeSubmissionModal.addEventListener("click", () => {
    openSubmissionModal.classList.remove("flex");
    openSubmissionModal.classList.add("hidden");
  });
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
          openSubmissionModal.classList.remove("hidden");
          openSubmissionModal.classList.add("flex");
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

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let hasAnimated = false;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = 3000; // 3 seconds
      const increment = target / (duration / 50); // Calculates increment based on 3-second duration, updates every 50ms

      const updateCount = () => {
        const current = +counter.innerText.trim();

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 50); // Updates every 50ms for smoother animation
        } else {
          counter.innerText = `${target}+`; // Final value with '+' sign
        }
      };

      updateCount();
    });
  };

  // Intersection Observer to trigger when the section enters the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          hasAnimated = true; // Ensures animation only runs once
        }
      });
    },
    { threshold: 0.5 } // Starts when 50% of the section is visible
  );

  const section = document.querySelector("#stats-section");
  observer.observe(section);
});



