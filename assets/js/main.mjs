const navMenu = document.getElementById('navigation-menu');
const navToggle = document.getElementById('navigation-toggle');
const navClose = document.getElementById('navigation-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.navigation-link');

const linkAction = () => {
    const navMenu = document.getElementById('navigation-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


const scrollHeader = () => {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navigation-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.navigation-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.main-container, .title`, { delay: 400 });
sr.reveal(`.main-footer`, { delay: 500 });
sr.reveal(`.main-img`, { delay: 700, origin: 'top' });

sr.reveal(`.sponsor__img, .headphones-card, .footer-logo, .footer-content, .footer-copy`, { origin: 'bottom', interval: 100 });
sr.reveal(`.feature-data, .offer-animate`, { origin: 'left', interval: 100 });
sr.reveal(`.feature-img, .offer-img`, { origin: 'bottom' });
sr.reveal(`.cover-img`, { origin: 'left' });
sr.reveal(`.cover-data`);
