document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    let valid = true;

    // Get form elements
    const nameField = document.getElementById("yourName");
    const imageField = document.getElementById("yourImage");
    const collegeField = document.getElementById("collegeName");
    const feedbackField = document.getElementById("feedback");

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const imageError = document.getElementById("imageError");
    const collegeError = document.getElementById("collegeError");
    const feedbackError = document.getElementById("feedbackError");

    // Validate Name
    if (nameField.value.trim() === "") {
      valid = false;
      nameError.classList.remove("hidden");
    } else {
      nameError.classList.add("hidden");
    }

    // Validate Image
    if (imageField.files.length === 0) {
      valid = false;
      imageError.classList.remove("hidden");
    } else {
      imageError.classList.add("hidden");
    }

    // Validate College Name
    if (collegeField.value.trim() === "") {
      valid = false;
      collegeError.classList.remove("hidden");
    } else {
      collegeError.classList.add("hidden");
    }

    // Validate Feedback
    if (feedbackField.value.trim() === "") {
      valid = false;
      feedbackError.classList.remove("hidden");
    } else {
      feedbackError.classList.add("hidden");
    }

    // If valid, send the email
    if (valid) {
      // Create the email template parameters
      const templateParams = {
        name: nameField.value,
        college_name: collegeField.value,
        feedback: feedbackField.value, // Ensure this matches your template's placeholder
        email: "Sgtechtechnology@gmail.com",
      };
      console.log(templateParams);
      // Send the email using EmailJS
      const serviceId = "service_fnjdx6h";
      const templateId = "template_h4ujl7o";
      emailjs.send(serviceId, templateId, templateParams).then(
        function (response) {
          // Open the modal
          openModal();

          // Optionally reset the form here
          document.getElementById("feedbackForm").reset();

          // Automatically close the modal after 5 seconds
          setTimeout(closeModal, 5000);
        },
        function (error) {
          alert("Failed to send feedback. Please try again.");
          console.error("EmailJS error:", error);
        }
      );

      // Function to open the modal
      function openModal() {
        const modal = document.querySelector(".feedback-modal");
        modal.classList.remove("hidden");
      }

      // Function to close the modal
      function closeModal() {
        const modal = document.querySelector(".feedback-modal");
        modal.classList.add("hidden");
      }

      // Close the modal on button click
      document
        .querySelector(".close-submission-modal")
        .addEventListener("click", closeModal);
    }
  });
