// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Scroll to reveal navigation background
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.classList.remove('nav-shadow');
            return;
        }
        
        if (currentScroll > lastScroll) {
            nav.classList.add('nav-shadow');
        }
        
        lastScroll = currentScroll;
    });

    // Form submission with validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } transform transition-all duration-300 translate-y-full`;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateY(full)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Skill bar animation on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const observerOptions = {
        threshold: 0.5
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width') || '0%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Initialize any tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', (e) => {
            const tip = document.createElement('div');
            tip.className = 'absolute bg-gray-900 text-white px-2 py-1 rounded text-sm -mt-8 -ml-2 opacity-0 transition-opacity duration-200';
            tip.textContent = e.target.getAttribute('data-tooltip');
            e.target.appendChild(tip);
            
            setTimeout(() => {
                tip.classList.remove('opacity-0');
            }, 50);
        });
        
        tooltip.addEventListener('mouseleave', (e) => {
            const tip = e.target.querySelector('div');
            if (tip) {
                tip.classList.add('opacity-0');
                setTimeout(() => {
                    tip.remove();
                }, 200);
            }
        });
    });

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Animation
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    // Hero Section Animation
    gsap.to('.hero', {
        opacity: 1,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.hero-content h1', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
    });

    gsap.from('.hero-content p', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: 'power4.out'
    });

    gsap.from('.hero-content .btn', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        stagger: 0.2,
        ease: 'power4.out'
    });

    gsap.from('.hero-image img', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: 'power4.out'
    });

    // Services Section Animation
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    });

    // Features Section Animation
    gsap.from('.feature-item', {
        scrollTrigger: {
            trigger: '.feature-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    });

    // Stats Section Animation
    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.stats',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    });

    // Testimonials Animation
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonial-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power4.out'
    });

    // CTA Section Animation
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    // Service Card Hover Animation
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Feature Item Hover Animation
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(item.querySelector('.feature-icon'), {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(item.querySelector('.feature-icon'), {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Testimonial Card Hover Animation
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power4.out'
                });
            }
        });
    });

    // Specialty Cards Hover Animation
    document.querySelectorAll('.specialty-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // About Page Animations
    if (document.querySelector('.about-hero')) {
        gsap.from('.about-hero h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about-hero',
                start: 'top center'
            }
        });

        gsap.from('.about-hero .subtitle', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: '.about-hero',
                start: 'top center'
            }
        });

        gsap.from('.about-image img', {
            x: -50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about-intro',
                start: 'top center'
            }
        });

        gsap.from('.about-text', {
            x: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about-intro',
                start: 'top center'
            }
        });

        // Timeline animations
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            gsap.from(item, {
                x: index % 2 === 0 ? -50 : 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100'
                }
            });
        });

        // Achievement boxes animations
        gsap.utils.toArray('.achievement-box').forEach((box, index) => {
            gsap.from(box, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: box,
                    start: 'top bottom-=100'
                }
            });
        });

        // Philosophy items animations
        gsap.utils.toArray('.philosophy-item').forEach((item, index) => {
            gsap.from(item, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100'
                }
            });
        });

        // Membership items animations
        gsap.utils.toArray('.membership-item').forEach((item, index) => {
            gsap.from(item, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100'
                }
            });
        });
    }

    // Research Page Animations
    if (document.querySelector('.research-hero')) {
        gsap.from('.research-hero h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.research-hero',
                start: 'top center'
            }
        });

        gsap.from('.research-hero .subtitle', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: '.research-hero',
                start: 'top center'
            }
        });

        // Research Interests Cards
        gsap.utils.toArray('.interest-card').forEach((card, index) => {
            gsap.from(card, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            });
        });

        // Project Cards
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.from(card, {
                x: index % 2 === 0 ? -50 : 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            });
        });

        // Publications
        gsap.utils.toArray('.publication-item').forEach((item, index) => {
            gsap.from(item, {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100'
                }
            });
        });

        // Impact Stats
        gsap.utils.toArray('.impact-stat').forEach((stat, index) => {
            gsap.from(stat, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: stat,
                    start: 'top bottom-=100'
                }
            });
        });
    }

    // Contact Page Animations
    if (document.querySelector('.contact-hero')) {
        gsap.from('.contact-hero h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.contact-hero',
                start: 'top center'
            }
        });

        gsap.from('.contact-hero .subtitle', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: '.contact-hero',
                start: 'top center'
            }
        });

        // Info Cards
        gsap.utils.toArray('.info-card').forEach((card, index) => {
            gsap.from(card, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            });
        });

        // Contact Form
        gsap.from('.form-content', {
            x: -50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.form-content',
                start: 'top bottom-=100'
            }
        });

        gsap.from('.form-image', {
            x: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.form-image',
                start: 'top bottom-=100'
            }
        });

        // Map
        gsap.from('.map-wrapper', {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.map-wrapper',
                start: 'top bottom-=100'
            }
        });

        // Social Links
        gsap.utils.toArray('.social-link').forEach((link, index) => {
            gsap.from(link, {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: link,
                    start: 'top bottom-=100'
                }
            });
        });

        // Form Validation and Submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                if (!name || !email || !subject || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
    }

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Hero Section Animation
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');

        if (heroContent && heroImage) {
            gsap.from(heroContent, {
                duration: 1,
                x: -100,
                opacity: 0,
                ease: 'power3.out'
            });

            gsap.from(heroImage, {
                duration: 1,
                x: 100,
                opacity: 0,
                ease: 'power3.out',
                delay: 0.2
            });
        }

        // Services Animation
        gsap.utils.toArray('.service-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2
            });
        });

        // Stats Animation
        gsap.utils.toArray('.stat-item').forEach((stat, i) => {
            gsap.from(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1
            });
        });

        // Features Animation
        gsap.utils.toArray('.feature-item').forEach((feature, i) => {
            gsap.from(feature, {
                scrollTrigger: {
                    trigger: feature,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2
            });
        });

        // Testimonials Animation
        gsap.utils.toArray('.testimonial-card').forEach((testimonial, i) => {
            gsap.from(testimonial, {
                scrollTrigger: {
                    trigger: testimonial,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
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
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.8
            });
        }
    });
});
