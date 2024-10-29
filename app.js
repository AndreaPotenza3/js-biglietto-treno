const km = parseFloat(prompt("Quanti km è luungo il viaggio?"))
const age = parseInt(prompt("Quanti anni hai?"))

console.log(km)
console.log(age)

const price = km * 0.21
console.log(price)

let discountPercent

if( age < 18) {
    discountPercent = 20
} else if (age > 65) {
    discountPercent = 40
} else {
    discountPercent= 0
}

console.log("Percentuale sconto:", discountPercent)

const discount = (price * discountPercent / 100)
console.log("sconto", discount)

const finalPrice = price - discount
console.log("prezzo", finalPrice.toFixed(2))


