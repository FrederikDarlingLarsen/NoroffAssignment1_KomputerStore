// The balace in the bank.
let balance = 0

// The amount of money loaned.
let loanNumber = 0

// boolean for whether the user has a loan.
let hasLoan = false

// Gets the text for the loan, so it can be enabled and disabled.
let outLoanText = document.getElementById("outstandingLoan")

// Function for updating the HTML of balance in the bank.
updateBalance = () => {
    // Formats the number into currency in DKK.
    let formattedBalance = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(balance)
    document.getElementById("currentBalance").textContent = formattedBalance
}

// Function for updating the HTML of the loan.
updateLoan = () => {
    // Formats the number into currency in DKK.
    let formattedLoan = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(loanNumber)
    document.getElementById("outLoan").textContent = formattedLoan
}

// Function for getting af loan.
getLoan = () => {
    
    // Prompt asking to user how much they want to loan.
    let loan = prompt("How much would you like to loan?", "enter amount")

    // Converts the entered value to a number.
    loanAttempt = Number(loan)

// Checks if the user has a loan.
if(!hasLoan){

    // Checks whether the entered amount is less than or equal to double the balance, and if it is above 0.
    if(loanAttempt <= (balance*2) && loanAttempt > 0){

    // sets the attempted loan to the actual loan
    loanNumber = loanAttempt
    // Gets the element with the loan amount and sets it to the amount loaned.
    document.getElementById("outLoan").textContent = loanNumber
    
    // Adds theloaned amount to the balance and set hasLoan to true.
    balance += loanAttempt
    hasLoan = true
    
    // Set the text and button for the loan to be displayed.
    outLoanText.style.display = "block"
    paybackBtn.style.display = "block"

    // Updating the loan and balance HTML.
    updateLoan()
    updateBalance()

    }
    else{
       // Send an alert if the entered value i not valid.
       alert("please enter a valid amount (higher than 0 and lower than or equal to double your balance)")
    }
}
    else{
       // Sends an alert if the user already has a loan.
       alert("You already have a loan!")
    }
}