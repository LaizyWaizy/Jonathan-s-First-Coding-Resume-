document.addEventListener("DOMContentLoaded", function () {
    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
      const target = document.querySelector(sectionId);
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  
    // Add event listener to each navigation link to scroll to the corresponding section
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        scrollToSection(sectionId);
      });
    });
  
    // Function to update the active link in the navigation
    function updateActiveLink() {
      const navLinks = document.querySelectorAll('.navbar a');
      const sections = document.querySelectorAll('section');
  
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100 && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    }
  
    // Call updateActiveLink function on page load and scroll events
    window.addEventListener('load', updateActiveLink);
    window.addEventListener('scroll', updateActiveLink);
  
    // Smooth scrolling to section on click
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
  
        // Call updateActiveLink manually after the smooth scrolling
        updateActiveLink();
      });
    });
  });
  