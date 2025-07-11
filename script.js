document.addEventListener('DOMContentLoaded', function() {
  // ========== Lightbox Functionality ==========
  const galleryImages = document.querySelectorAll('.gallery img, .Certificates img');
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="modal-image">
  `;
  document.body.appendChild(modal);
  
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');
  
  // Add click event to each image
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  });
  
  // Close modal when clicking X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
  });
  
  // Close modal when clicking outside image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });

  // ========== Sliding Header ==========
  const slidingHeader = document.createElement('div');
  slidingHeader.className = 'sliding-header';
  slidingHeader.innerHTML = '<h1> Welcome to my Portfolio</h1>';
  document.body.prepend(slidingHeader);

  // ========== Slideshow Functionality ==========
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Auto slide change (optional)
  let slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // Change slide every 5 seconds

  // Pause on hover (optional)
  const slideshowContainer = document.querySelector('.slideshow-container');
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });

    slideshowContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        plusSlides(1);
      }, 5000);
    });
  }

  // Add event listeners for manual navigation
  const prevButtons = document.querySelectorAll('.prev');
  const nextButtons = document.querySelectorAll('.next');
  const dotButtons = document.querySelectorAll('.dot');

  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => plusSlides(-1));
  });

  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => plusSlides(1));
  });

  dotButtons.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
  });
});