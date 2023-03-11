function myFunction() {
    let userInput = document.querySelector('#userInput');
    let message = document.querySelector('#message');

    message.innerHTML = "Please enter a valid email address";
}

var input = document.getElementById("userInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});