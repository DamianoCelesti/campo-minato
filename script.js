const contenitore = document.querySelector(".contenitore");


const NUM_CELLE = 49;
const NUM_BOMBE = 16;
let punteggio = 0;
let gameOver = false;

const celle = [];

for (let i = 0; i < NUM_CELLE; i++) {

    celle.push({
        bomba: false,
        scoperta: false
    });
}


const bombe = []

for (let i = 0; bombe.length < NUM_BOMBE; i++) {
    let numero = Math.floor(Math.random() * NUM_CELLE)
    if (!bombe.includes(numero)) {
        bombe.push(numero)
    }

}
console.log(bombe);
console.log(celle);


for (let i = 0; i < NUM_CELLE; i++) {

    const nuovoDiv = document.createElement("div")
    nuovoDiv.classList.add("cella");
    nuovoDiv.setAttribute("id", i);
    contenitore.appendChild(nuovoDiv);
}


console.log(celle.length);
console.log(celle[0]);     
