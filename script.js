function animateOnView(targetSelector, animationCallback, threshold = 0.5) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            animationCallback();
            obs.unobserve(entry.target);
        }
    });
    }, { threshold });

    const el = document.querySelector(targetSelector);
    if (el) observer.observe(el);
}

animateOnView('.nav-left-option-inner', () => {
    anime({
        targets: '.nav-left-option-inner',
        translateX: [ -50, 0 ],
        opacity: [ 0, 1 ],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });
});

animateOnView('.title-center', () => {
    anime({
        targets: '.title-center',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1000,
    });
});

animateOnView('.sixth-sect-text-wrapper-inner', () => {
    anime({
        targets: '.sixth-sect-text-wrapper-inner',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1000,
    });
});

animateOnView('.phrase-right', () => {
    anime({
        targets: '.phrase-right',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 1000,
    });
});

animateOnView('.blurSquare', () => {
    anime({
        targets: '.blurSquare',
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 4000,
    });
});

animateOnView('.sect-two-text-wrapper', () => {
    anime({
        targets: '.sect-two-text-wrapper',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 4000,
    });
});

animateOnView('.gallery-wrapper-one', () => {
    anime({
        targets: '.gallery-wrapper-one',
        translateX: [0, 150],
        opacity: [0, 1],
        duration: 4000,
    });
});

animateOnView('.gallery-wrapper-two', () => {
    anime({
        targets: '.gallery-wrapper-two',
        translateX: [150, 0],
        opacity: [0, 1],
        duration: 4000,
    });
});

animateOnView('.fourth-sect-text', () => {
    anime({
        targets: '.fourth-sect-text',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 4000,
    });
});

animateOnView('.fifth-sect-gallery-title-inner', () => {
    anime({
        targets: '.fifth-sect-gallery-title-inner',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
    });
});

animateOnView('.sixth-sect-info-wrapper', () => {
    anime({
        targets: '.sixth-sect-info-wrapper',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 4000,
    });
});

animateOnView('.sixth-sect-form', () => {
    anime({
        targets: '.sixth-sect-form',
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 4000,
    });
});

animateOnView('.galleryOption-inner', () => {
    anime({
        targets: '.galleryOption-inner',
        translateX: [ -50, 0 ],
        opacity: [ 0, 1 ],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.img');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
    });

    imgs.forEach(img => observer.observe(img));
});
