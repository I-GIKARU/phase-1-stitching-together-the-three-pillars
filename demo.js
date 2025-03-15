// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

document.addEventListener("DOMContentLoaded", () => {
  // STEP 1: Select all heart icons
  const articleHearts = document.querySelectorAll(".like-glyph");

  function likeCallback(e) {
    const heart = e.target;
    mimicServerCall()
      .then(function(serverMessage){
        alert("You notified the server!");
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        alert("Something went wrong!");
      });
  }

  // STEP 3: Add event listeners to each heart icon
  articleHearts.forEach((heart) => {
    heart.addEventListener("click", likeCallback);
  });
});

// Mock server call function
function mimicServerCall(url = "", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
