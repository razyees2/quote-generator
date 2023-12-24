// Function to display a random quote for One Piece
function showRandomOnePieceQuote() {
  // Get the textarea element
  const showText = document.getElementById("showText");

  // Get a random quote from the array
  const onePieceQuotes = [
    "I am going to be the King of the Pirates!",
    "It's not the face that makes someone a monster. It's the choices they make with their lives.",
    "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... is the Pirate King!",
  ];
  const randomQuote =
    onePieceQuotes[Math.floor(Math.random() * onePieceQuotes.length)];

  // Display the random quote in the textarea
  showText.value = randomQuote;
}

// Wrap the code in a window.onload event handler
window.onload = function () {
  // Event listener for clicking the One Piece image
  const randomImage = document.getElementById("randomImage");
  if (randomImage) {
    randomImage.addEventListener("click", showRandomOnePieceQuote);
  }
};
