// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById('modal');
const errorMessage = document.getElementById('modal-message');
const hearts = document.querySelectorAll('.like-glyph');

// Hide the error modal initially
errorModal.classList.add('hidden');

// Function to handle the server response
function handleServerResponse(response) {
  if (response === 'success') {
    // Change the heart to full and add activated class
    event.target.classList.add('activated-heart');
    event.target.classList.remove('like-glyph');
  } else {
    // Display error modal and message
    errorMessage.textContent = 'Server Error';
    errorModal.classList.remove('hidden');
    // Hide the error modal after 3 seconds
    setTimeout(() => {
      errorModal.classList.add('hidden');
    }, 3000);
  }
}

// Handle click event on hearts
for (let heart of hearts) {
  heart.addEventListener('click', function () {
    mimicServerCall()
      .then(handleServerResponse)
      .catch(() => {
        // Display error modal and message
        errorMessage.textContent = 'Network Error';
        errorModal.classList.remove('hidden');
        // Hide the error modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
