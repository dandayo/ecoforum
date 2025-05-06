class Carousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.interval = null;
        this.init();
    }

    init() {
        // Инициализация первого слайда
        this.updateSlides();
        // Запуск автоматической смены слайдов
        this.startAutoSlide();
    }

    updateSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        this.slides[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    }

    startAutoSlide() {
        this.interval = setInterval(() => this.nextSlide(), 4000);
    }

    stopAutoSlide() {
        clearInterval(this.interval);
    }
}

// Инициализация карусели после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
}); 


