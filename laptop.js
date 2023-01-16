    //Using the Fetch API to get the data about the laptops
    fetch('https://hickory-quilled-actress.glitch.me/computers')
    .then((response) => response.json())
    .then((data) => (function () {
    
        //Gets the element for the laptop options
        let optionsElement = document.getElementById("laptopOptions")

        let pullOptions = `<option >Pick a laptop</option>`;
        
        data.forEach(element => {
            pullOptions += `<option>${element.title}</option>`;
        });
        // Adds the titles of the laptops to the 
        optionsElement.innerHTML = pullOptions;
    })())

 pickLaptop = () => {

    let index = document.getElementById("laptopOptions").selectedIndex-1 //thros erreoe?

    fetch('https://hickory-quilled-actress.glitch.me/computers')
    .then((response) => response.json())
    .then((data) => (function () {
    
    let featuresList="";

        data[index].specs.forEach(element => {
            featuresList += `<li>${element}</li>`
        });

    document.getElementById("features").innerHTML 
    = (`<ul>${featuresList}<ul/>`)
    
    document.getElementById("description").innerHTML 
    = (`${data[index].description}`)
    
    document.getElementById("laptopTitle").innerHTML 
     = (`${data[index].title}`)
    
    let formattedPrice = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(data[index].price)
    
    document.getElementById("laptopPrice").innerHTML 
    = formattedPrice;
    
    document.getElementById("laptopImage").innerHTML = `<img src="https://hickory-quilled-actress.glitch.me/${data[index].image}" width="200" height="150" alt="a laptop">`
    
    })())
 }

buyLaptop = () => {

    let priceString = document.getElementById("laptopPrice").textContent

    let laptopTitle = document.getElementById("laptopTitle").textContent

    let price = parseFloat(priceString)

    if(price <= balance){
        balance -= price
        updateBalance()
        alert(`Congratulations you just bought: ${laptopTitle}`)
    }else{
        alert("You do not have enough money to buy that!")
    }
 }