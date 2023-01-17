import globals from "./globals.js";
import {updateBalance, updateLoan, updatePayBalance} from "./updateFunctions.js";

// Function for doing work adds 100 to the pay balance and the updates the HTML.
const doWork = () => {
  globals.payBalance += 100;
  updatePayBalance(globals.payBalance);
};

// Function for sending earnings to the bank.
const sendToBank = () => {
  // Checks if the user currently has a loan.
  if (!globals.hasLoan) {
    // Adds the pay balance to the balance in the bank and updates the balance.
    globals.balance += globals.payBalance;
    updateBalance(globals.balance);

    // Sets the pay balance to 0 and updates it in the HTML.
    globals.payBalance = 0;
    updatePayBalance(globals.payBalance);
  } else {
    // Calculates the amount that should go to the loan and balance, and saves the values in variables.
    let toLoan = globals.payBalance * 0.1;
    let toAccount = globals.payBalance * 0.9;

    // The whether the amount going to the loan is larger than the loan.
    if (globals.toLoan > globals.loanNumber) {
      // If true, then the remaining amount is added to the balance and the loan is set to 0.
      globals.balance += Math.abs(globals.loanNumber - toLoan);
      globals.loanNumber = 0;
    } else {
      // If false, the money going towards the loan is subtracted from the loan.
      globals.loanNumber -= toLoan;
    }

    // The mony going towards the bank account is added to the balance.
    globals.balance += toAccount;

    // Balance and loan is updated.
    updateBalance();
    updateLoan();

    // Pay balance is set to 0 and the HTML is updated.
    globals.payBalance = 0;
    updatePayBalance();

    // If the loan is equal to 0, the hasLoan boolean is set to false and the elements pertaining to the loan are hidden.
    if (globals.loanNumber === 0) {
      globals.hasLoan = false;
      globals.outLoanText.style.display = "none";
      globals.paybackBtn.style.display = "none";
    }
  }
};

// Function for repaying the loan.
const repayLoan = () => {
  // Checks if the loan is less than or equal to the pay balance.
  if (globals.loanNumber <= globals.payBalance) {
    // If true, has loan is set to false.
    globals.hasLoan = false;

    // If the loan is less than the pay balance the reaminder is calculated and added to the balance.
    if (globals.loanNumber < globals.payBalance) {
      let theRest = globals.payBalance - globals.loanNumber;
      globals.balance += (globals.payBalance - globals.loanNumber);
    }

    console.log("loan is:" + globals.loan)
    // The elements pertaining to the loan are hidden.
    globals.outLoanText.style.display = "none";
    globals.paybackBtn.style.display = "none";
    globals.loanNumber = 0;

    
    // Balance is updated.
    updateBalance();
  } else {
    // If (loanNumber <= payBalance) = false, pay balance is subtracted from the loan.
    globals.loanNumber -= globals.payBalance;
  }

  // Updates the loan HTML, sets the pay balance to 0 and updates the pay balance HTML.
  updateLoan();
  globals.payBalance = 0;
  updatePayBalance();
};

export {doWork, sendToBank, repayLoan};

