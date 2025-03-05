# ADVENT OF CALENDAR 
Questa repo prevede la realizzazione di un calendario dell'avvento a tema natalizio per tenersi in allenamento sotto le feste.
Questo esercizio fa parte della serie di esercizi proposti da Boolean durante il post corso.


## Indice
1. [consegna](#consegna)
2. [considerazioni_pre-progetto](#considerazioni-pre-progetto)
3. [milestone](#milestone)
4. [prossimamente-sul-piccolo-schermo](#roadmap)

## Consegna 👈🏻

Creiamo il nostro **calendario dell’avvento** utilizzando HTML, CSS  e JS!

- Iniziamo col renderizzare in pagina le caselle del calendario, come mostrato nello screenshot, avendo cura di generare dinamicamente le caselle 📅
- 🧑🏻‍💻 Al click su ogni casella, dovremo far comparire una piccola modale a centro pagina e coprire lo sfondo con un overlay.
- All’interno della modale mostreremo casualmente una frase o un’immagine tra quelle fornite nell’array di dati in allegato (anche le immagini sono in allegato) 🖼️
- 🪟 Una volta cliccata, una casella deve cambiare stile, apparendo appunto già “aperta”.
- Quando l’utente ricarica la pagina, questa deve ricordare quali caselle sono state già aperte 🎁

### Note 🗒️

- il font utilizzato è ***Livvic***

### Bonus 💫

- Il calendario deve essere **responsive**
- Aggiungiamo anche un bottone per “**resettare**” la memoria della pagina e ricominciare da capo


## considerazioni pre progetto 
l'esercizio prevede la realizzazione del calendario esclusivamente in html css e javascript, con l'intento di allenarsi sulla programmazione di javascript plain.

Per prima cosa, vado a prepararmi i materiali del progetto e mi pianifico il lavoro da fare per essere più efficiente.
nell'immagine possiamo individuare a livello statico due macrostrutture: una per l'immagine di copertina e la parte di calendario  con il 25 che prende tutta la fila finale.
Per il calendario vado a strutturarlo su quattro file con tre file da otto numeri e l'ultima con il numero finale(nella versione responsive da cellulare probabilmente, le file non saranno da otto ma probabilmente saranno da quattro o inferiori).
Nella consegna c'è scritto di generare dinamicamente le caselle quindi verrà attuato un ciclo per renderizzare a schermo le caselle della pagina. 
Una volta effettuata la realizzazione statica della pagina posso pensare all'implementazione della modale, che avverrà al clic della casella del calendario e ipoteticamente andrà a cambiare il display del modale che apparirà in pagina per visualizzare il contenuto della casella.   

![immagine](./mockup.webp)

### milestone 

- milestone 1: renderizzazione calendario 

nel renderizzare le caselle del calendario, dovrò prima creare il prototipo della casella, salvarla in una variabile javascript(dentro ad un ciclo) ed eseguire un ciclo che vada a creare in pagina le caselle.
La variabile sarà salvata in una stringa con backtick per fare in modo di inserire codice html e inserire i segnaposto per l'icona, il numero ed il contenuto della modale.
Per seguire ciò ho bisogno della dimensione del container delle caselle del calendario per poter calcolare le dimensioni della cartella(una cartella dovrebbe prendere 1/8 di spazio in larghezza e 1/3 in altezza).
Il Ciclo verrà eseguito sul conto delle caselle quindi eseguo un for of sull'array fornito dall'esercizio salvato nel file [source.js](./JS/source.js)
Il for of viene dichiarato con l'indice per poter stampare in modo sequenziale il numero della casella.

- milestone 2: modale

per quanto riguarda la creazione di una modale, ho scelto di realizzarla senza l'ausilio di css già fatto (bootstrap o affini)ma di gestire autonomamente la creazione e l'interazione con la modale.

In sostanza, la preparazione della scjermata di modale e della sua implementazione avviene con i seguenti passaggi:

1) creazione della schermata modale html e del bottone che farà apparire la modale(in questo caso il bottone sarà la card del calendario )

2) la stilizzazione css con creazione di una classe che faccia prendere alla modale tutta l'altezza della pagina 

3) la scrittura della funzione che al click vada ad eseguire l'apertura della modale 

durante la stilizzazione ho avuto un problema nella gestione della schermata modale, ovvero che quando andavo a cliccare una casella più bassa del calendario, se scrollavo lo schermo 
la modale rimaneva in cima alla pagina e non prendeva tutto lo schermo.
Questo problema è stato risolto dando un'altezza al container del calendario e dando lo scroll all'overflow-y.

- milestone 3: al clic della casella la card rimane "cliccata"

questo punto si risolve facilmente creando una classe .opened che aggiung el'opacità alla card e che viene aggiunta al click della casella


- milestone 4: al ricaricare della pagina, devono rimanere salvate le caselle cliccate





- BONUS:
responsive: per il responsive ho lavorato sulla vista da cellulare principalmente andando a lavorare sulla larghezza del calendario e dell'immagine.

bottone reset: é stato aggiunto un bottone che al click va a rimuovere la classe opened su tutte le card che ce l'hanno 


audio: mi sono permesso  di creare dei piccoli effetti sonori creati al piano da aggiungere al click di apertura e chiusura della card del calendario.



## Roadmap
🏳️: da fare 
🔨:in corso d'opera
☑️:fatto

- struttura html ☑️
- creazione card☑️
- creazione modale☑️
- scrittura funzione al click ☑️
- refactoring(separazione funzioni in foglio js a parte)🏳️
- event delegation 🏳️
- fare in modo che venga aperta solo la casella del giorno del calendario che coincide con la giornata attuale🏳️












