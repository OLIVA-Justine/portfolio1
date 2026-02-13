
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


    

    let lastScrollTop = 0;
const header = document.getElementById('main-header');
const threshold = 5;
let isInternalLinkClick = false; // The "Lock" variable

// 1. Handle Navigation Clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        isInternalLinkClick = true;
        
        // Show navbar immediately so the section aligns correctly
        header.classList.remove('-translate-y-full');
        header.classList.add('translate-y-0');

        // Reset the lock after the scroll animation finishes (approx 800ms)
        setTimeout(() => {
            isInternalLinkClick = false;
        }, 800);
    });
});

// 2. The Scroll Logic
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If we are currently auto-scrolling from a click, STOP the hide logic
    if (isInternalLinkClick) {
        lastScrollTop = scrollTop;
        return;
    }

    if (Math.abs(lastScrollTop - scrollTop) <= threshold) return;

    // Always show at the very top
    if (scrollTop <= 100) {
        header.classList.remove('-translate-y-full');
        header.classList.add('translate-y-0');
    } 
    // Scrolling DOWN -> Show
    else if (scrollTop > lastScrollTop) {
        header.classList.remove('-translate-y-full');
        header.classList.add('translate-y-0');
    } 
    // Scrolling UP -> Hide
    else {
        header.classList.remove('translate-y-0');
        header.classList.add('-translate-y-full');
    }
    
    lastScrollTop = scrollTop;
}, false);
