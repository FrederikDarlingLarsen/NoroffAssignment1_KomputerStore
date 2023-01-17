

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
document.getElementById("loanButton").addEventListener("click", function(){getLoan()});
document.getElementById("buyButton").addEventListener("click", function(){buyLaptop(balance)});
document.getElementById("laptopOptions").addEventListener("click", function(){pickLaptop()});
document.getElementById("WorkButton").addEventListener("click", function(){doWork()});
document.getElementById("bankButton").addEventListener("click", function(){sendToBank()});
document.getElementById("paybackButton").addEventListener("click", function(){repayLoan()});
