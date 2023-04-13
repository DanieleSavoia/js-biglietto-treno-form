const distance = prompt("Quanti chilometri vuoi percorrere?")
const eleSpan = document.getElementById("chilometri")
eleSpan.innerHTML = distance;

let ticketwithsale;

const age = parseInt(prompt("Quanti anni hai?"))
const eleSpan2 = document.getElementById("età")
eleSpan2.innerHTML = age;

let ticketnosale = distance*0.21;
const eleSpan3 = document.getElementById("ticketcost")
eleSpan3.innerHTML = ticketnosale;




if (age < 18) {
    ticketwithsale = ticketnosale - (ticketnosale * 20 / 100)
} else {
  
}

if (age > 65) {
    ticketwithsale = ticketnosale - (ticketnosale * 40 / 100)
  } else {
    
  }
const elespan4 = document.getElementById ("ticketsales")
elespan4.innerHTML = ticketwithsale;