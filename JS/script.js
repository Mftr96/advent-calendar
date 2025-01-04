//importare sempre con il nome completo del file sennò non va 
import source from "./source.js";

let percorsoIcona = "";
let numeroCasella = 1;
let id = "";
let calendario = document.getElementById("calendar-container");
console.log(calendario);

let card = `<div class="card">
                <div>
                    <img src="./images/icons/${percorsoIcona}.png" alt="">
                </div>
                <h3>${numeroCasella}</h3>
            </div>`;



for (const [index, casella] of source.entries()) {
    percorsoIcona = casella.icon;
    let numeroCasella = index + 1;
    console.log(percorsoIcona);
    console.log(numeroCasella);
    if (numeroCasella === 25) {
        id = "card25";
    }
    let card = `<div class="card" id="${id}">
                    <div>
                        <img src="./images/icons/${percorsoIcona}.png" alt="">
                    </div>
                    <h3>${numeroCasella}</h3>
                </div>`;

    calendario.innerHTML += card;
}
