const globals = {
    
    // The balace in the bank.
    balance : 0,

    // The amount of money loaned.
    loanNumber : 0,
    
    // Declaring a variable for the pay balance
    payBalance : 0,
    
    // boolean for whether the user has a loan.
    hasLoan : false,
    
    // Gets the text for the loan, so it can be enabled and disabled.
    outLoanText : document.getElementById("outstandingLoan"),
    
    // Gets the "repay loan" button for the HTML.
    paybackBtn : document.getElementById("paybackButton")
  };
  export default globals;