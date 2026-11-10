// Select elements using DOM methods.
const heading = document.getElementById("demo");
const button = document.querySelector("#startBtn");

// Click event: display a welcome message.
button.addEventListener("click", function () {
  heading.textContent = "Welcome to our Startup!";
});

// Input event: read the name as the user types.
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", function () {
  console.log("Name: " + nameInput.value);
});

// Submit event: display a thank-you message.
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  document.getElementById("message").textContent =
    "Thank you, " + name + "! Your message has been submitted.";
  form.reset();
});
