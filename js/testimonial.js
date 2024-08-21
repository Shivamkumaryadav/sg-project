
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".max-w-xl"); // Container for the slides
    const slides = Array.from(carousel.children); // Get all slides
    const nextButton = document.querySelector(".bg-gray-800 + .bg-gray-300"); // Next button
    const prevButton = document.querySelector(".bg-gray-300"); // Previous button
    let currentIndex = 0;
    let intervalId;

    // Function to move to the next slide
    function goToNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    // Function to move to the previous slide
    function goToPreviousSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }

    // Function to update the carousel to the current slide
    function updateCarousel() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Function to start the auto-slide
    function startAutoSlide() {
      intervalId = setInterval(goToNextSlide, 3000);
    }

    // Function to stop the auto-slide
    function stopAutoSlide() {
      clearInterval(intervalId);
    }

    // Event listeners for buttons
    nextButton.addEventListener("click", () => {
      goToNextSlide();
      stopAutoSlide(); // Stop auto-slide on manual action
      startAutoSlide(); // Restart auto-slide
    });

    prevButton.addEventListener("click", () => {
      goToPreviousSlide();
      stopAutoSlide(); // Stop auto-slide on manual action
      startAutoSlide(); // Restart auto-slide
    });

    // Event listeners for hover to pause auto-slide
    nextButton.addEventListener("mouseover", stopAutoSlide);
    nextButton.addEventListener("mouseout", startAutoSlide);
    prevButton.addEventListener("mouseover", stopAutoSlide);
    prevButton.addEventListener("mouseout", startAutoSlide);

    // Initialize carousel
    updateCarousel();
    startAutoSlide();
  });

