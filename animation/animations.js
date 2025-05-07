// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {

    // Функция для создания Intersection Observer для секции
    const createSectionObserver = (sectionClass) => {
        const section = document.querySelector(sectionClass);

        if (section) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Если элемент становится видимым (входит в область видимости)
                        entry.target.classList.add('is-visible');
                        entry.target.classList.remove('no-visible'); // Удаляем класс исчезновения
                    } else {
                        // Если элемент перестает быть видимым (покидает область видимости)
                        entry.target.classList.remove('is-visible'); // Удаляем класс появления
                        entry.target.classList.add('no-visible');    // Добавляем класс исчезновения
                    }

                });
            }, {
                rootMargin: '0px',
                threshold: [0.5]
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