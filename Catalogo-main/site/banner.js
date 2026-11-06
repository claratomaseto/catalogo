document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".banner-slides img.slide");
    const indicators = document.querySelectorAll(".banner-indicators .indicator");
    let currentIndex = 0;
    const intervalTime = 4000; // Tempo em milissegundos (4 segundos)

    function changeSlide() {
        slides[currentIndex].classList.remove("active");
        indicators[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add("active");
        indicators[currentIndex].classList.add("active");
    }

    if (slides.length > 0) {
        setInterval(changeSlide, intervalTime);
    }
});