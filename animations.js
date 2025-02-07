// Initialize GSAP animations
window.addEventListener('load', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    const heroTimeline = gsap.timeline();
    heroTimeline
        .from('.hero-content', {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-image', {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5');

    // Services Animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Stats Animation
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((stat, i) => {
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1
        });
    });

    // Features Animation
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((feature, i) => {
        gsap.from(feature, {
            scrollTrigger: {
                trigger: feature,
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // Testimonials Animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((testimonial, i) => {
        gsap.from(testimonial, {
            scrollTrigger: {
                trigger: testimonial,
                start: 'top 80%'
            },
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8
        });
    });

    // CTA Section Animation
    const ctaSection = document.querySelector('.cta-content');
    if (ctaSection) {
        gsap.from(ctaSection, {
            scrollTrigger: {
                trigger: ctaSection,
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8
        });
    }
});
