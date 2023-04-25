// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.querySelector("#submit-button");
const contactPage = document.querySelector("#contact-page");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "<p>Thank you for your message</p>";
  thankYouMessage.style.fontSize = "24pt";
  thankYouMessage.style.textAlign = "center"
  contactPage.innerHTML = "";
  contactPage.appendChild(thankYouMessage);
});


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

