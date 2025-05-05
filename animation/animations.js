// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {

    // Функция для создания Intersection Observer для секции
    const createSectionObserver = (sectionClass) => {
        const section = document.querySelector(sectionClass);

        if (section) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        entry.target.classList.remove('is-visible');
                    }
                });
            }, {
                rootMargin: '0px',
                threshold: 0 // Срабатывает при любом пересечении
            });

            observer.observe(section);
        }
    };

    // Отслеживаем секцию со спикерами
    createSectionObserver('.page-2');
    
    createSectionObserver('.page-3');

    // Отслеживаем секцию page-4 (карты)
    createSectionObserver('.page-4');

    // Отслеживаем секцию page-5 (форма регистрации)
    createSectionObserver('.page-5');

});