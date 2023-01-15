


let payBalance = 0;

let paybackBtn = document.getElementById("paybackButton");

function updatePayBalance(){
    let formattedPayBalance = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(payBalance);
    document.getElementById("payBalance").innerHTML = formattedPayBalance;
}

function doWork(){
    payBalance = payBalance + 100;
    updatePayBalance();
}

function sendToBank(){

if(!hasLoan){

balance += payBalance;
updateBalance();
payBalance = 0;
updatePayBalance();

}
else{

    let toLoan = payBalance*0.1;
    let toAccount = payBalance*0.9;


    if(toLoan > loanNumber){
       balance += Math.abs(loanNumber - toLoan);
       loanNumber = 0;
    }
    else{

    loanNumber -= toLoan;

    }
    balance += toAccount;

    updateBalance();
    updateLoan();

    payBalance = 0;
    updatePayBalance();

   if(loanNumber == 0){
    hasLoan = false;
    outLoanText.style.display = "none";
    paybackBtn.style.display = "none";
     }
}


}


function repayLoan(){

if(loanNumber <= payBalance){

hasLoan = false;

if(loanNumber < payBalance){
theRest = payBalance - loanNumber;


balance += theRest;
}

outLoanText.style.display = "none";
paybackBtn.style.display = "none";
loanNumber = 0;

updateBalance();

}else{
    loanNumber -= payBalance;
}

    updateLoan();
    payBalance = 0;
    updatePayBalance();
}
