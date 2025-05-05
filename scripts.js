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
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoSlide() {
        clearInterval(this.interval);
    }
}

// Инициализация карусели после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
}); 

// Получаем элемент, который нужно отслеживать (раздел со спикерами)
const speakersSection = document.querySelector('.speakers');

// Проверяем, существует ли такой элемент на странице
if (speakersSection) {
    // Создаем Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // entry.isIntersecting будет true, когда элемент входит в видимую область
            // entry.isIntersecting будет false, когда элемент покидает видимую область
            if (entry.isIntersecting) {
                // Если элемент виден, добавляем класс is-visible
                entry.target.classList.add('is-visible');
            } else {
                // Если элемент невидим, удаляем класс is-visible
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        // Опции observer
        rootMargin: '0px',
        // threshold: 0 означает, что колбэк сработает, как только элемент
        // хотя бы на 1 пиксель войдет или выйдет из root (viewport)
        threshold: 0
    });

    // Начинаем наблюдение за разделом со спикерами
    observer.observe(speakersSection);
};