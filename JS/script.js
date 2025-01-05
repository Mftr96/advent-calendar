//importare sempre con il nome completo del file sennò non va 
import source from "./source.js";
console.log(source.length);

let percorsoIcona = "";
let numeroCasella = 1;
let id = "";
let calendario = document.getElementById("calendar-container");
console.log(calendario);





for (const [index, casella] of source.entries()) {
    percorsoIcona = casella.icon;
    let numeroCasella = index + 1;
    console.log(percorsoIcona);
    console.log(numeroCasella);
    if (numeroCasella === 25) {
        id = "card25";
    }
    let card = `<div class="card" onclick="" id="${id}">
                    <div>
                        <img src="./images/icons/${percorsoIcona}.png" alt="">
                    </div>
                    <h3>${numeroCasella}</h3>
                </div>`;

    calendario.innerHTML += card;

}

const cards = document.querySelectorAll(".card");
const close=document.querySelector(".close");

cards.forEach((card, index) => {
    card.onclick= () => {
        console.log(`ciao ${index+1}`);
        document.querySelector(".modal").classList.toggle("open");
        document.querySelector(".modal-card").classList.toggle("open");
        
        //INSERIRE CODICE PER FAR APPARIRE MODALE 
        if(source[index].text){
            document.getElementById("modal-img").classList.add("none");
            document.getElementById("modal-p").classList.remove("none");
            let txt=source[index].text;
            console.log(txt);
            document.getElementById("modal-p").innerHTML=txt;
        }
        if(source[index].url){
            document.getElementById("modal-p").classList.add("none");
            document.getElementById("modal-img").classList.remove("none");


            let path=source[index].url;
            console.log(path);
            document.getElementById("modal-img").src=`./${path}`;
            console.log(document.getElementById("modal-img").src);
        }
    };
    close.onclick=()=>{
        console.log("chiusura modale");
        document.querySelector(".modal").classList.remove("open");

    }
});

