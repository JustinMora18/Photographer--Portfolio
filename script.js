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
        easing: 'easeOutQuad'
    });
});

animateOnView('.title-center', () => {
    anime({
        targets: '.title-center',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
    });
});

animateOnView('.phrase-right', () => {
    anime({
        targets: '.phrase-right',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad'
    });
});