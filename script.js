const quotes = [
"Success usually comes to those who are too busy to be looking for it",
"Do what you can with all you have",
"Dream big and dare to fail",
"Don't watch the clock; do what it does. Keep going"
]

function newQuote(){
const random = Math.floor(Math.random()*quotes.length)
document.getElementById("quote").innerText = quotes[random]
}
