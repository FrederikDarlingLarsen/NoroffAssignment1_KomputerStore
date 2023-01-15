
    fetch('https://hickory-quilled-actress.glitch.me/computers')
    .then((response) => response.json())
    .then((data) => (function () {

        let optionsElement = document.getElementById("laptopOptions")

        optionsElement.innerHTML = 
        
       `<option >Pick a laptop</option>
       <option value="0">${data[0].title}</option>
        <option value="1">${data[1].title}</option>
        <option value="2">${data[2].title}</option>
        <option value="3">${data[3].title}</option>
        <option value="4">${data[4].title}</option>
        <option value="5">${data[5].title}</option>`

    })())

 pickLaptop = () => {

    let index = document.getElementById("laptopOptions").selectedIndex-1 //thros erreoe?

    fetch('https://hickory-quilled-actress.glitch.me/computers')
    .then((response) => response.json())
    .then((data) => (function () {
    
    document.getElementById("features").innerHTML 
    = (`<ul>
    
    <li>${data[index].specs[0]}</li>
    <li>${data[index].specs[0]}</li>
    <li>${data[index].specs[1]}</li>
    <li>${data[index].specs[2]}</li>
    <li>${data[index].specs[3]}</li>
    <li>${data[index].specs[4]}</li>
    <li>${data[index].specs[5]}</li>
    
    <ul/>`)
    
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



buyLaptop = (price) => {

    if(price <= balance){
        balance -= price
        updateBalance()
    }else{
        alert("You do not have enough money to buy that!")
    }

 }