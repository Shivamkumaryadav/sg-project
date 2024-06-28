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

// thank you modal open
document.addEventListener("DOMContentLoaded", function () {
  const thankYouModal = document.querySelector(".thank-you-modal");
  console.log(thankYouModal);

  setTimeout(() => {
    thankYouModal.classList.remove("hidden");
    thankYouModal.classList.add("flex");
    // thankYouModal.classList.add("overscroll-none");

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
  const closeSubmissionModal = document.querySelector(".close-submission-modal");
  const openSubmissionModal = document.querySelector(".contact-submission-modal");

  closeSubmissionModal.addEventListener('click', () => { 
    closeSubmissionModal.classList.remove("flex");
    closeSubmissionModal.classList.add("hidden");
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
