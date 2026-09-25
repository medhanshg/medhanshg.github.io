// Header and footer injection technique adapted from:
// Programming tutorials - "How to Inject a Shared Header & Footer into Any HTML Page (No Frameworks)" (YouTube)

const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("load", function () {
  header.innerHTML = `
    <nav>
      <ul>
        <li class="navbar"><a href="index.html">Home</a></li>
        <li class="navbar"><a href="resume.html">Resume</a></li>
        <li class="navbar"><a href="portfolio.html">Portfolio</a></li>
      </ul>
    </nav>`;

  footer.innerHTML = `
    <ul>
      <li><a href="https://www.linkedin.com/in/medhansh-gupta-01bb85266">LinkedIn</a></li>
      <li><a href="https://joinhandshake.com">Handshake</a></li>
      <li><a href="https://github.com/medhanshg">GitHub</a></li>
    </ul>`;
});

var submitButton = document.getElementById("submitbtn");
submitButton.addEventListener("click", connectWithMe);

function connectWithMe() {
  var name = document.getElementById("visitor-name").value;
  var output = document.getElementById("response");

  if (name === "") {
    output.textContent = "Please enter a name first!";
  } else {
    output.textContent = "Thanks for connecting with me!";
  }
}
