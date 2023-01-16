import vars from "./variables.js";

let {balance, loanNumber,payBalance} = vars;

// Function for updating the HTML of balance in the bank.
const updatePageValues = () => {
  // Formats the number into currency in DKK.
  let formattedBalance = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(balance);
  document.getElementById("currentBalance").textContent = formattedBalance;

    // Formats the number into currency in DKK.
    let formattedLoan = new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
      }).format(loanNumber);
      document.getElementById("outLoan").textContent = formattedLoan;

      let formattedPayBalance = new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
      }).format(payBalance);
      document.getElementById("payBalance").textContent = formattedPayBalance;
};


export { updatePageValues};
