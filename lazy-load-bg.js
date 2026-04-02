/**
 * Lazy Loading for Background Images
 * Implements Intersection Observer for performance optimization
 */

(function() {
  'use strict';

  // Check if browser supports Intersection Observer
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported - loading all images');
    return;
  }

  // Configuration
  const config = {
    rootMargin: '50px 0px', // Start loading 50px before entering viewport
    threshold: 0.01
  };

  // Create observer
  const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const lazyElement = entry.target;
        
        // Get the data-bg attribute
        const bgUrl = lazyElement.getAttribute('data-bg');
        
        if (bgUrl) {
          // Load the background image
          const img = new Image();
          img.onload = function() {
            lazyElement.style.backgroundImage = `url('${bgUrl}')`;
            lazyElement.classList.add('bg-loaded');
            lazyElement.removeAttribute('data-bg');
          };
          img.src = bgUrl;
          
          // Stop observing this element
          observer.unobserve(lazyElement);
        }
      }
    });
  }, config);

  // Find all elements with data-bg attribute
  function initLazyLoading() {
    const lazyBackgrounds = document.querySelectorAll('[data-bg]');
    
    lazyBackgrounds.forEach(function(lazyBg) {
      imageObserver.observe(lazyBg);
    });
    
    console.log(`Lazy loading initialized for ${lazyBackgrounds.length} background images`);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoading);
  } else {
    initLazyLoading();
  }

})();
