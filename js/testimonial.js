const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

function updateSliderPosition() {
    slider.style.transform = translateX(-${currentIndex * 100}%);
}

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateSliderPosition();
});

next.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
    }
    updateSliderPosition();
});