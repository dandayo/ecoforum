// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {

    // Функция для создания Intersection Observer для секции
    const createSectionObserver = (sectionClass) => {
        const section = document.querySelector(sectionClass);

        if (section) {
            // Определяем порог видимости в зависимости от ширины экрана
            let currentThreshold = 0.5; // Порог по умолчанию для больших экранов
            const mobileBreakpoint = 768; // mobile breakpoint (768px)
            const screenWidth = window.innerWidth; // Get current screen width

            if (screenWidth < mobileBreakpoint) {
                currentThreshold = 0.2; // Уменьшаем порог для экранов меньше 768px (mobile)
            }

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');   // Добавляем класс исчезновения
                        entry.target.classList.remove('no-visible'); // Удаляем класс исчезновения
                    } else {
                        entry.target.classList.remove('is-visible');
                        entry.target.classList.add('no-visible');    
                    }
                });
            }, {
                rootMargin: '0px',
                // Используем выбранный порог
                threshold: [currentThreshold]
            });

            observer.observe(section);
        }
    };

    // Отслеживаем секции, для которых нужна анимация
    createSectionObserver('.page-1');
    createSectionObserver('.page-2');
    createSectionObserver('.page-3');
    createSectionObserver('.page-4');
    createSectionObserver('.page-5');
    createSectionObserver('.page-6');
    createSectionObserver('.page-7');
    createSectionObserver('.page-8');
});