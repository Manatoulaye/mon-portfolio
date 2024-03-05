// Navigation fluide vers les sections lorsqu'un lien est cliqué
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ajout d'une classe active sur le lien de navigation lorsqu'une section est en vue
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = document.querySelector('nav').clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - navHeight && scrollPosition < sectionTop + sectionHeight - navHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const href = '#' + section.getAttribute('id');
            document.querySelector('nav a[href="' + href + '"]').classList.add('active');
        }
    });
});
