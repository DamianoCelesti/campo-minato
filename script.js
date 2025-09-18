const contenitore = document.querySelector(".contenitore");
const scoreId = document.getElementById("score")


const NUM_CELLE = 49;
const NUM_BOMBE = 16;
let punteggio = 0;
let gameOver = false;

function aggiornaPunteggio() {
    scoreId.textContent = "Punteggio: " + punteggio;
}

aggiornaPunteggio();



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
console.log("bombe", bombe);
console.log("celle", celle);


for (let k = 0; k < bombe.length; k++) {
    let indiceBomba = bombe[k]
    celle[indiceBomba].bomba = true
}


for (let i = 0; i < NUM_CELLE; i++) {

    const nuovoDiv = document.createElement("div")
    nuovoDiv.classList.add("cella");
    nuovoDiv.setAttribute("id", i);

    nuovoDiv.addEventListener("click", () => {
        if (gameOver)
            return;

        const cella = celle[i];
        if (cella.bomba) {
            alert("Hai perso!");
            gameOver = true;

            for (let j = 0; j < celle.length; j++) {
                if (celle[j].bomba) {
                    document.getElementById(j).classList.add("bomba");
                }
            }

            return;
        }

        if (!cella.scoperta) {
            cella.scoperta = true;
            nuovoDiv.classList.add("scoperta");
            punteggio++;
            aggiornaPunteggio();
        }

        if (punteggio === NUM_CELLE - NUM_BOMBE) {
            alert("Hai vinto!")
            gameOver = true
        }
    });


    contenitore.appendChild(nuovoDiv);
}


//console.log(celle.length);
//console.log(celle[0]);     
