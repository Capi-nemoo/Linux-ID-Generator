/**
 * Slider Module
 * Description: Handles image slider functionality using FreeJS philosophy.
 * Dependencies: None
 */

(function() {
    // Image paths
    const images = [
        '../../assets/images/renalocura.jpg',
        '../../assets/images/Linus-torvalds.jpg'
    ];

    let currentIndex = 0;

    // DOM elements
    const sliderImage = document.getElementById('slider-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Event listeners
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });

    // Update slider image
    function updateImage() {
        sliderImage.src = images[currentIndex];
    }

    // Initialize slider
    updateImage();
})();

