//Importing functions from bank.js, worker.js, laptop.js and global variables from globals.js.
import { doWork, sendToBank, repayLoan } from "./worker.js";
import { pickLaptop, buyLaptop } from "./laptop.js";
import getLoan from "./bank.js";
import globals from "./globals.js";

// Disable the "repay loan" button.
globals.paybackBtn.style.display = "none";

// Using the Fetch API to get data about the laptops.
fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then((response) => response.json())
  .then((data) =>
    (function () {
      // Gets the element for the laptop options.
      let optionsElement = document.getElementById("laptopOptions");

      // Created a variable to store the HTML for the pull options.
      let pullOptions = `<option >Pick a laptop</option>`;

      // Using the array.forEach method to access the elements and then adds them to pullOptions.
      data.forEach((element) => {
        pullOptions += `<option>${element.title}</option>`;
      });

      // Adds the titles of the laptops to the options element.
      optionsElement.innerHTML = pullOptions;
    })()
  );

// Loading all of the elements that uses onClick events and adds event listeners.
document.getElementById("loanButton").addEventListener("click", function () {
  getLoan();
});
document.getElementById("buyButton").addEventListener("click", function () {
  buyLaptop();
});
document.getElementById("laptopOptions").addEventListener("click", function () {
  pickLaptop();
});
document.getElementById("WorkButton").addEventListener("click", function () {
  doWork();
});
document.getElementById("bankButton").addEventListener("click", function () {
  sendToBank();
});
document.getElementById("paybackButton").addEventListener("click", function () {
  repayLoan();
});
