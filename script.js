const form = document.getElementById("contact-form");
const message = document.getElementById("message");
const count = document.getElementById("count");
const status = document.getElementById("form-status");

// update the counter every time the user types in the message box
message.addEventListener("input", () => {
  count.textContent = message.value.length;
});

// on submit, stop the page from reloading and show a thank-you
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  status.textContent = `Thanks ${name}, your message was sent.`;
  form.reset();
  count.textContent = 0;
});