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

animateOnView('.nav-left', () => {
    anime({
        targets: '.nav-left a',
        translateX: [ -50, 0 ],
        opacity: [ 0, 1 ],
        duration: 1000,
        delay: anime.stagger(200),
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

animateOnView('.phrase-right', () => {
    anime({
        targets: '.phrase-right',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 1000,
    });
});

animateOnView('.gallery-wrapper-one', () => {
    anime({
        targets: '.gallery-wrapper-one',
        translateX: [0, 150],
        opacity: [0, 1],
        duration: 3000,
    });
});

animateOnView('.gallery-wrapper-two', () => {
    anime({
        targets: '.gallery-wrapper-two',
        translateX: [150, 0],
        opacity: [0, 1],
        duration: 3000,
    });
});