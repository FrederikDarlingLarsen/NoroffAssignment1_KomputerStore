// Importing global variables.
import globals from "./globals.js";

// Function for updating the HTML of balance in the bank.
const updateBalance = () => {
  // Formats the number into currency in DKK.
  let formattedBalance = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(globals.balance);
  document.getElementById("currentBalance").textContent = formattedBalance;
};

// Function for updating the HTML of the loan.
const updateLoan = () => {
  // Formats the number into currency in DKK.
  let formattedLoan = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(globals.loanNumber);
  document.getElementById("outLoan").textContent = formattedLoan;
};

// Function for updating the paybalance. It formats the number to currency in DKK and then updates the HTML element.
const updatePayBalance = () => {
  let formattedPayBalance = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(globals.payBalance);
  document.getElementById("payBalance").textContent = formattedPayBalance;
};

// Exporting update functions.
export { updateBalance, updatePayBalance, updateLoan };
