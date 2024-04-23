const translate = {
    'en': {
        'projects': 'Projects',
        'skills': 'Skills',
        'education': 'Education',
        'contacts': 'Contacts',
        'hello': 'Нello 👋,',
        'name': 'My name is ',
        'Alyona': 'Alyona',
        'h1': 'and I create websites for your business!',
        'h2-projects': 'Projects',
        'h2-projects-sub': 'Things I’ve built so far',
        'h2-skills': 'My Tech Stack',
        'h2-skills-sub': 'Technologies I’ve been working with recently',
    },
    'ru': {
        'projects': 'Проекты',
        'skills': 'Навыки',
        'education': 'Образование',
        'contacts': 'Контакты',
        'hello': 'Привет 👋,',
        'name': 'меня зовут ',
        'Alyona': 'Алёна',
        'h1': 'и я создаю сайты для вашего бизнеса!',
        'h2-projects': 'Проекты',
        'h2-projects-sub': 'последние из созданных (учебние и рабочие)',
        'h2-skills': 'Навыки',
        'h2-skills-sub': 'технологии, которые я использую в работе',
    }
};

let lang = 'en';
const langButtons = document.querySelector('.language');
const langButton = document.querySelectorAll('.language-button');
const textArea = document.querySelectorAll('[data-i18n]');

function getTranslate(event) {
    let language = event.target.dataset.lang
    textArea.forEach(elem => elem.textContent = translate[language][elem.dataset.i18n]);
    langButton.forEach(elem => elem.classList.remove('active-lang'));
    event.target.classList.add('active-lang');
    lang = language;
};

function getTranslateTo(language) {
    
    textArea.forEach(elem => elem.textContent = translate[language][elem.dataset.i18n]);
    langButton.forEach(elem => elem.classList.remove('active-lang'));
    language === 'en' ? langButton[0].classList.add('active-lang') : langButton[1].classList.add('active-lang');
    lang = language;
};

langButtons.addEventListener('click', getTranslate);