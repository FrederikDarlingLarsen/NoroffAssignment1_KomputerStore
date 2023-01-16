
// Function for picking a laptop.
const pickLaptop = () => {
  // Gets the index for the laptop that is picked.
  let index = document.getElementById("laptopOptions").selectedIndex - 1; //thros erreoe?

  // Using the Fetch API to get the data about the laptops.
  fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then((response) => response.json())
    .then((data) =>
      (function () {
        // Create a variable to hold the HTML for the features
        let featuresList = "";

        // Using array.forEach to loop through the specs of a laptop and add them to the features list.
        data[index].specs.forEach((element) => {
          featuresList += `<li>${element}</li>`;
        });

        // Get the element containing the features of the laptop and adds and unorderd list with the features.
        document.getElementById(
          "features"
        ).innerHTML = `<ul>${featuresList}<ul/>`;

        // Gets the element with the description of the laptop and adds the description of the currently selected laptop.
        document.getElementById(
          "description"
        ).textContent = `${data[index].description}`;

        // Gets the element containing the title of the laptop and sets it to the title of the currently selected laptop.
        document.getElementById(
          "laptopTitle"
        ).textContent = `${data[index].title}`;

        // Gets the price of the current laptop and formats it into currency in DKK.
        let formattedPrice = new Intl.NumberFormat("da-DK", {
          style: "currency",
          currency: "DKK",
        }).format(data[index].price);

        // Gets the laptop price element and sets the text to the price of the current laptop.
        document.getElementById("laptopPrice").textContent = formattedPrice;

        // Gets the element for the image of the laptop and adds the image of the currently selected laptop.
        document.getElementById(
          "laptopImage"
        ).innerHTML = `<img src="https://hickory-quilled-actress.glitch.me/${data[index].image}" 
      width="200" height="150" alt="${data[index].title}">`;
      })()
    );
};

// Function for buying a laptop.
const buyLaptop = () => {
  // Gets the price of the laptop as a string from the HTML, and parses it to a number.
  let priceString = document
    .getElementById("laptopPrice")
    .textContent.replace(".", "");
  let price = parseFloat(priceString);

  // Gets the title of the laptop.
  let laptopTitle = document.getElementById("laptopTitle").textContent;

  console.log(laptopTitle);

  if (laptopTitle != "") {
    // Checks if the price of the laptop is less than or equal to the balance in the bank.
    if (price <= balance) {
      // if true, the price is subtracted from balance, balance is updated and an alert is given to the user.
      balance -= price;
      updateBalance(balance);
      alert(`Congratulations you just bought: ${laptopTitle}`);
    } else {
      // if false an alert is given to the user.
      alert("You do not have enough money to buy that!");
    }
  } else {
    alert("Please select a laptop");
  }
};


