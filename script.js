
// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform any necessary actions with the input values
  // For example, you can send an AJAX request to a server for authentication

  // Clear the input fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});
