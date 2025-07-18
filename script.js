// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll with MIT-style subtlety
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.99)';
        navbar.style.borderBottom = '2px solid #e74c3c';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.borderBottom = '2px solid #1a1a1a';
    }
});

// Intersection Observer for MIT-style staggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger the animations for a more sophisticated feel
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .stat, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Form submission handling with MIT-style validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();
        
        // MIT-style validation with specific feedback
        let isValid = true;
        let errorMessage = '';
        
        if (!name) {
            isValid = false;
            errorMessage += 'Name is required.\n';
        }
        
        if (!email) {
            isValid = false;
            errorMessage += 'Email is required.\n';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }
        }
        
        if (!message) {
            isValid = false;
            errorMessage += 'Message is required.\n';
        }
        
        if (!isValid) {
            alert('Please correct the following errors:\n' + errorMessage);
            return;
        }
        
        // Success message with MIT-style professionalism
        alert('Thank you for your message. I will respond within 24 hours.');
        contactForm.reset();
    });
}

// MIT-style typing animation with variable speed
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            // Variable speed for more natural typing
            const delay = text.charAt(i) === ' ' ? speed * 0.5 : speed;
            setTimeout(type, delay);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 120);
    }
});

// Subtle parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3; // More subtle than before
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// MIT-style skill tags interaction
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.05) translateY(-2px)';
        tag.style.boxShadow = '0 4px 8px rgba(231, 76, 60, 0.3)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) translateY(0)';
        tag.style.boxShadow = 'none';
    });
});

// Timeline items with MIT-style hover effects
document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.02)';
        item.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = 'none';
    });
});

// Active navigation link highlighting with MIT precision
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// MIT-style loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add a subtle entrance animation for the logo
    const logo = document.querySelector('.nav-logo img');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            logo.style.transition = 'all 0.6s ease';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 200);
    }
});

// MIT-style email copy functionality
document.querySelectorAll('.contact-item a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailLink.getAttribute('href').replace('mailto:', '');
        
        // Modern clipboard API if available
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                showCopyFeedback(emailLink, 'Email copied to clipboard');
            });
        } else {
            // Fallback for older browsers
            const tempInput = document.createElement('input');
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            showCopyFeedback(emailLink, 'Email copied to clipboard');
        }
    });
});

function showCopyFeedback(element, message) {
    const originalText = element.textContent;
    element.textContent = message;
    element.style.color = '#27ae60';
    
    setTimeout(() => {
        element.textContent = originalText;
        element.style.color = '';
    }, 2000);
}

// MIT-style statistics counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            const number = parseInt(text);
            if (!isNaN(number)) {
                animateCounter(statNumber, number);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// MIT-style smooth section transitions
document.querySelectorAll('section').forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    observer.observe(section);
});

// Add CSS for enhanced MIT-style interactions
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #e74c3c !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.8s ease;
    }
    
    /* MIT-style focus states */
    .btn:focus,
    .nav-link:focus,
    .contact-item a:focus {
        outline: 2px solid #e74c3c;
        outline-offset: 2px;
    }
    
    /* Enhanced hover states */
    .skill-tag:hover {
        background: #e74c3c !important;
        border-color: #e74c3c !important;
        color: white !important;
    }
    
    /* Smooth transitions for all interactive elements */
    * {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* MIT-style selection */
    ::selection {
        background: #e74c3c;
        color: white;
    }
    
    ::-moz-selection {
        background: #e74c3c;
        color: white;
    }
`;
document.head.appendChild(style); 