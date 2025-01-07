//importare sempre con il nome completo del file sennò non va 
import source from "./source.js";

let percorsoIcona = "";
let numeroCasella = 1;
let id = "";
let calendario = document.getElementById("calendar-container");
let resetBtn=document.getElementById("reset-button");
//AUDIO
let loop= document.getElementById("loop");
let resetAudio=new Audio("jingle_piano2.mp3");
loop.volume=0.5;

for (const [index, casella] of source.entries()) {
    percorsoIcona = casella.icon;
    let numeroCasella = index + 1;
    //console.log(percorsoIcona);
    //console.log(numeroCasella);
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
        loop.play();
        console.log(`ciao ${index+1}`);
        card.classList.add("opened");
        console.log(card);
        document.querySelector(".modal").classList.toggle("open");
        document.querySelector(".modal-card").classList.toggle("open");
        let randomIndex=Math.floor(Math.random()*25);
        console.log(randomIndex);
        let randomSource= source[randomIndex];
        
        if(randomSource.text){
            document.getElementById("modal-img").classList.add("none");
            document.getElementById("modal-p").classList.remove("none");
            let txt=randomSource.text;
            console.log(txt);
            document.getElementById("modal-p").innerHTML=txt;
        }
        if(randomSource.url){
            document.getElementById("modal-p").classList.add("none");
            document.getElementById("modal-img").classList.remove("none");


            let path=randomSource.url;
            console.log(path);
            document.getElementById("modal-img").src=`./${path}`;
            console.log(document.getElementById("modal-img").src);
        }
    };
    close.onclick=()=>{
        console.log("chiusura modale");
        loop.pause();
        loop.load();
        document.querySelector(".modal").classList.remove("open");

    }
});


resetBtn.onclick=()=>{
    resetAudio.play();
  console.log("bottone cliccato");
  let openedCards=document.querySelectorAll(".opened"); 
  openedCards.forEach(openedCard => {
    openedCard.classList.remove("opened");
  }); 
}
