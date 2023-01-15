let balance = 0;

let loanNumber = 0;

let hasLoan = false;

let outLoanText = document.getElementById("outstandingLoan");


function updateBalance (){
    let formattedBalance = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(balance);
    document.getElementById("currentBalance").innerHTML = formattedBalance;
}

function updateLoan (){
    let formattedLoan = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(loanNumber);
    document.getElementById("outLoan").innerHTML = formattedLoan;
}



function getLoan(){

    let loan = prompt("How much would you like to loan?", "enter amount"); 
    
    loanAttempt = Number(loan);

//if(moneyNumber == 0){

if(!hasLoan){
    if(loanAttempt <= (balance*2) && loanAttempt > 0){

    document.getElementById("outLoan").innerHTML = loanNumber;
    loanNumber = loanAttempt;
    balance += loanAttempt;
    hasLoan = true;

    var x = document.getElementById("outstandingLoan");
    outLoanText.style.display = "block";
    paybackBtn.style.display = "block";
    
    updateLoan();
    updateBalance();

    }
    else{
       alert("please enter a valid amount (higher than 0 and lower than or equal to double your balance)");
    }
}
    else{
       alert("You already have a loan!")
    }
}