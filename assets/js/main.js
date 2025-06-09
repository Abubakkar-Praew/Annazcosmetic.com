const toggleIcon = document.getElementById('toggleIcon');
const mobiletoggleIcon = document.getElementById('mobiletoggleIcon');
const mobileOverlay = document.getElementById("nav-overlay-container");

// Mobile Toggler function

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.classList.contains('fa-toggle-off')) {
        toggleIcon.classList.replace('fa-toggle-off', 'fa-toggle-on');
        mobileOverlay.classList.add("animate__fadeInLeftBig");
        mobileOverlay.classList.replace("hidden", "visible");

    } else {
        toggleIcon.classList.replace('fa-toggle-on', 'fa-toggle-off');
        toggleIcon.classList.add("animate__fadeInLeft");
        mobileOverlay.classList.add("animate__fadeOutLeftBig");
        mobileOverlay.classList.replace("visible", "hidden");
    }
});



// function toggleIcon(element) {
//     if (element.classList.contains('iffa-toggle-off')) {
//         element.classList.remove('fa-toggle-off');
//         element.classList.add('fa-toggle-on');
//     } else {
//         element.classList.remove('fa-toggle-on');
//         element.classList.add('fa-toggle-off');
//     }
// }


document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    mobileMenuToggle.addEventListener('click', function () {
        mobileMenuOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', function () {
        mobileMenuOverlay.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Mobile Dropdown Toggle
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown > a');

    mobileDropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                submenu.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Search Toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchForm = document.querySelector('.search-form');

    searchToggle.addEventListener('click', function (e) {
        e.preventDefault();
        searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
    });

    // Close search form when clicking outside
    document.addEventListener('click', function (e) {
        if (!searchForm.contains(e.target) && e.target !== searchToggle) {
            searchForm.style.display = 'none';
        }
    });

    // Update cart count (example - you would replace with your actual cart logic)
    function updateCartCount() {
        // In a real implementation, you would fetch this from your cart system
        const cartCount = localStorage.getItem('cartCount') || 0;
        document.querySelectorAll('.cart-count').forEach(function (el) {
            el.textContent = cartCount;
        });
    }

    updateCartCount();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky header on scroll
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
});