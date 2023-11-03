// Function to scroll back to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This provides a smooth scrolling effect
  });
}

// You can call this function in response to a user action, like a button click
document.getElementById('scrollToTopButton').addEventListener('click', scrollToTop);

