const monthButtons = document.querySelectorAll('.month-btn');

// Toggle display of exam grid on month button click
monthButtons.forEach(button => {
  button.addEventListener('click', () => {
    const examGrid = button.nextElementSibling;
    const isVisible = examGrid.style.display === 'grid';
    
    // Toggle visibility
    examGrid.style.display = isVisible ? 'none' : 'grid';
    button.setAttribute('aria-expanded', !isVisible); // Update aria-expanded attribute
  });
});

// Handle click event for each exam box
function handleExamClick(examPageUrl) {
  window.location.href = examPageUrl; // Redirect to exam page
}
