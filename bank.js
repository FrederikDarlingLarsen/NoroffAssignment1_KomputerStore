// Function for getting af loan.
const getLoan = () => {
  // Prompt asking to user how much they want to loan.
  let loan = prompt("How much would you like to loan?", "enter amount");

  // Converts the entered value to a number.
  let loanAttempt = Number(loan);

  // Checks if the user has a loan.
  if (!hasLoan) {
    // Checks whether the entered amount is less than or equal to double the balance, and if it is above 0.
    if (loanAttempt <= balance * 2 && loanAttempt > 0) {
      // sets the attempted loan to the actual loan
      loanNumber = loanAttempt;
      // Gets the element with the loan amount and sets it to the amount loaned.
      document.getElementById("outLoan").textContent = loanNumber;

      // Adds theloaned amount to the balance and set hasLoan to true.
      balance += loanAttempt;
      hasLoan = true;

      // Set the text and button for the loan to be displayed.
      outLoanText.style.display = "block";
      paybackBtn.setAttribute(
        "style", "display: block flex;");

      // Updating the loan and balance HTML.
      updateLoan();
      updateBalance();
    } else {
      // Send an alert if the entered value i not valid.
      alert(
        "please enter a valid amount (higher than 0 and lower than or equal to double your balance)"
      );
    }
  } else {
    // Sends an alert if the user already has a loan.
    alert("You already have a loan!");
  }
};


