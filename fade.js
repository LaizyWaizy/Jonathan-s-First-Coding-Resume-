// Function to check if an element is in the viewport
function isInViewport(element) {
    if (!element) {
        return false;
    }
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event and apply fade-in/fade-out classes
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in-out');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        } else {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        }
    });
}

// Add event listener to the window scroll event
window.addEventListener('scroll', handleScroll);

// Trigger the handleScroll function on page load to apply initial fade-in/fade-out classes
document.addEventListener('DOMContentLoaded', handleScroll);
