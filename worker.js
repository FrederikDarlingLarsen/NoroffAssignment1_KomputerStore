// Declaring a variable for the pay balance
let payBalance = 0

// Gets the "repay loan" button for the HTML.
let paybackBtn = document.getElementById("paybackButton")

// Function for updating the paybalance. It formats the number to currency in DKK and then updates the HTML element.
updatePayBalance = () => {
    let formattedPayBalance = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(payBalance)
    document.getElementById("payBalance").textContent = formattedPayBalance
}

// Function for doing work adds 100 to the pay balance and the updates the HTML.
doWork = () => {
    payBalance += 100
    updatePayBalance()
}

// Function for sending earnings to the bank.
sendToBank = () => {

// Checks if the user currently has a loan.
if(!hasLoan){

// Adds the pay balance to the balance in the bank and updates the balance.
balance += payBalance
updateBalance()

// Sets the pay balance to 0 and updates it in the HTML.
payBalance = 0
updatePayBalance()
}
else{

    // Calculates the amount that should go to the loan and balance, and saves the values in variables.
    let toLoan = payBalance*0.1
    let toAccount = payBalance*0.9

    // The whether the amount going to the loan is larger than the loan.
    if(toLoan > loanNumber){
       // If true, then the remaining amount is added to the balance and the loan is set to 0.
       balance += Math.abs(loanNumber - toLoan)
       loanNumber = 0
    }
    else{
    // If false, the money going towards the loan is subtracted from the loan.
    loanNumber -= toLoan
    }

    // The mony going towards the bank account is added to the balance.
    balance += toAccount

    // Balance and loan is updated.
    updateBalance()
    updateLoan()

    // Pay balance is set to 0 and the HTML is updated.
    payBalance = 0
    updatePayBalance()

    // If the loan is equal to 0, the hasLoan boolean is set to false and the elements pertaining to the loan are hidden.
    if(loanNumber === 0){
    hasLoan = false
    outLoanText.style.display = "none"
    paybackBtn.style.display = "none"
     }
}
}

// Function for repaying the loan.
repayLoan = () => {

// Checks if the loan is less than or equal to the pay balance.
if(loanNumber <= payBalance){

// If true, has loan is set to false.
hasLoan = false;

// If the loan is less than the pay balance the reaminder is calculated and added to the balance.
if(loanNumber < payBalance){
theRest = payBalance - loanNumber
balance += theRest
}

// The elements pertaining to the loan are hidden.
outLoanText.style.display = "none"
paybackBtn.style.display = "none"
loanNumber = 0 //NECESSARY?????

// Balance is updated.
updateBalance()

}else{
    // If (loanNumber <= payBalance) = false, pay balance is subtracted from the loan.
    loanNumber -= payBalance
}

    // Updates the loan HTML, sets the pay balance to 0 and updates the pay balance HTML.
    updateLoan()
    payBalance = 0
    updatePayBalance()
}
