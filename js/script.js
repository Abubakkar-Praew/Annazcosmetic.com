document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenuOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    mobileMenuClose.addEventListener('click', function() {
        mobileMenuOverlay.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    // Mobile Dropdown Toggle
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown > a');
    
    mobileDropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(e) {
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
    
    searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close search form when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target) && e.target !== searchToggle) {
            searchForm.style.display = 'none';
        }
    });
    
    // Update cart count (example - you would replace with your actual cart logic)
    function updateCartCount() {
        // In a real implementation, you would fetch this from your cart system
        const cartCount = localStorage.getItem('cartCount') || 0;
        document.querySelectorAll('.cart-count').forEach(function(el) {
            el.textContent = cartCount;
        });
    }
    
    updateCartCount();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});

// Add to Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would add the product to the cart
            const currentCount = parseInt(localStorage.getItem('cartCount') || 0);
            const newCount = currentCount + 1;
            localStorage.setItem('cartCount', newCount);
            updateCartCount();
            
            // Show a quick confirmation
            const productName = this.closest('.product-info').querySelector('h3').textContent;
            alert(`${productName} has been added to your cart!`);
        });
    });
    
    // Quick View functionality
    const quickViewButtons = document.querySelectorAll('.quick-view');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would open a modal with product details
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`Quick view for ${productName} would open here in a real implementation.`);
        });
    });
    
    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fas')) {
                icon.classList.remove('fas');
                icon.classList.add('far');
            } else {
                icon.classList.remove('far');
                icon.classList.add('fas');
            }
            
            // In a real implementation, this would add/remove from wishlist
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            console.log(`${productName} toggled in wishlist`);
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our beauty tips and offers soon.`);
            this.querySelector('input').value = '';
        });
    }
});