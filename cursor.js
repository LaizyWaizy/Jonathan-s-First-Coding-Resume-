const cursorGlow = document.querySelector('.cursor-glow');
const cursorGlowSize = 500; // Adjust the size of the cursor glow here (e.g., 500 for 500x500)

// Function to update the cursor glow position and size based on the cursor's position
function updateCursorGlow(event) {
    const x = event.clientX;
    const y = event.clientY;

    cursorGlow.style.left = x - cursorGlowSize / 2 + 'px'; // Adjust the offset to center the glow
    cursorGlow.style.top = y - cursorGlowSize / 2 + 'px'; // Adjust the offset to center the glow

    cursorGlow.style.width = cursorGlowSize + 'px';
    cursorGlow.style.height = cursorGlowSize + 'px';
}

// Add event listener to track cursor movement and update the glow position and size
document.addEventListener('mousemove', updateCursorGlow);
