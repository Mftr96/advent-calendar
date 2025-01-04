//importare sempre con il nome completo del file sennò non va 
import source from "./source.js";

let percorsoIcona = "";
let numeroCasella = 1;
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
    let card = `<div class="card">
                    <div>
                        <img src="./images/icons/${percorsoIcona}.png" alt="">
                    </div>
                    <h3>${numeroCasella}</h3>
                </div>`;
    calendario.innerHTML+=card;
    if(numeroCasella===25){
        // TODO: APPLICARE STILE PER CASELLA 25 CHE PRENDE TUTTO LO SPAZIO 
    }
}
