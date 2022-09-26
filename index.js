// App: Tip Calculator

// These are the 3 functions you just use

// * calculateBill()
// increasePeople()
// decreasePeople()

// these fuction are hard coded in the html so you cant change their names.

// these are all the Div id's you are gonna need access to

// 1 id "billTotalinput" - user input for bill total
// 2 id "tipInput" - user input for tip
// 3 id "numberofPeople" - Current number of people you are splitting the bill between with
// 4 id "perPersonTotal" - Total dollar value owed per person


// Get global access to all inputs / divs here (you'll need them later)
// bill input,tip input,  number of people div, and per person total div
const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberofPeoplediv = document.getElementById("numberofPeople")
const PerPersonTotalDiv = document.getElementById("PerPersonTotal")



// get number of people from number of people div
let numberofPeople = Number(numberofPeoplediv.innerText)


//  ** Calculate the total bill per person**
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billTotalInput.value)

    // get the tip from user & convert it into a percentage(divide by 100)

    const tipPercentage = Number(tipInput.value) / 100
    
    // get the total tip amount
    const tipAmount = bill * tipPercentage
    
    // calculate the total (tip amount + bill)
    const total = tipAmount + bill
    
    // calculate the per person total (total divided by number of people)
    const PerPersonTotal = total / numberofPeople
    

    // update the perPersonTotal on DOM & show it to user
    PerPersonTotalDiv.innerText = `$${PerPersonTotal.toFixed(2)}`
}


// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people 
     
    numberofPeople  += 1 

    //  update the DOM with the new number of people

    numberofPeoplediv.innerText = numberofPeople

    // calculate the bill based on the new number of people

    calculateBill()
}


// ** Splits the bill between fewer people **
const decreasePeople = () => {

    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to negetive)
    if (numberofPeople <= 1){
        alert("Cant go more than one")
        return
    }

    // decrement the amount of people
    
     numberofPeople -= 1

    // update the DOM with the new number of people

     numberofPeoplediv.innerText = numberofPeople

    //  calculate the bill based on the new number of people

    calculateBill ()
}