// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Effect on Scroll
const fadeInElements = document.querySelectorAll('.fade-in-on-scroll');

const scrollAnimation = () => {
    const scrollY = window.scrollY;

    fadeInElements.forEach(element => {
        const elementOffsetTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (scrollY + window.innerHeight > elementOffsetTop + elementHeight / 3) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);

// Add "fade-in-on-scroll" class to content sections that should animate
const contentSections = document.querySelectorAll('.content-section');
contentSections.forEach(section => {
    section.classList.add('fade-in-on-scroll');
});

// Adding smooth transitions for dynamic elements
const dynamicSections = document.querySelectorAll('.content-section');

dynamicSections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.05)';
        section.style.transition = 'transform 0.3s ease';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});

// Scroll-triggered animations (Using IntersectionObserver for better performance)
const sectionsToAnimate = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

sectionsToAnimate.forEach(section => {
    observer.observe(section);
});
