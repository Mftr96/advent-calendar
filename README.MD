# ADVENT OF CALENDAR 
Questa repo prevede la realizzazione di un calendario dell'avvento a tema natalizio per tenersi in allenamento sotto le feste.
Questo esercizio fa parte della serie di esercizi proposti da Boolean durante il post corso.


## Indice
1. [considerazioni_pre-progetto](#considerazioni-pre-progetto)
2. [consegna](#consegna)
3. [milestone](#milestone)

## considerazioni pre progetto 
l'esercizio prevede la realizzazione del calendario esclusivamente in html css e javascript, con l'intento di allenarsi sulla programmazione di javascript plain.

Per prima cosa, vado a prepararmi i materiali del progetto e mi pianifico il lavoro da fare per essere più efficiente.
nell'immagine possiamo individuare a livello statico due macrostrutture: una per l'immagine di copertina e la parte di calendario  con il 25 che prende tutta la fila finale.
Per il calendario vado a strutturarlo su quattro  file con tre  file da otto numeri e l'ultima con il numero finale(nella versione responsive da cellulare probabilmente , le file non saranno da otto ma probabilmente saranno da quattro o inferiori).
Nella consegna c'è scritto di generare dinamicamente le caselle quindi verrà attuato un ciclo per renderizzare a schermo le caselle della pagina. 
Una volta effettuata la realizzazione statica della pagina posso pensare all'implementazione della modale, che avverrà al clic della casella del calendario e ipoteticamente andrà a cambiare il display del modale che apparirà in pagina per visualizzare il contenuto della casella.   

![immagine](./mockup.webp)




## Consegna 👈🏻

Creiamo il nostro **calendario dell’avvento** utilizzando HTML, CSS  e JS!

- Iniziamo col renderizzare in pagina le caselle del calendario, come mostrato nello screenshot, avendo cura di generare dinamicamente le caselle 📅
- 🧑🏻‍💻 Al click su ogni casella, dovremo far comparire una piccola modale a centro pagina e coprire lo sfondo con un overlay
- All’interno della modale mostreremo casualmente una frase o un’immagine tra quelle fornite nell’array di dati in allegato ( anche lle immagini sono in allegato) 🖼️
- 🪟 Una volta cliccata, una casella deve cambiare stile, apparendo appunto già “aperta”.
- Quando l’utente ricarica la pagina, questa deve ricordare quali caselle sono state già aperte 🎁

### Note 🗒️

- il font utilizzato è ***Livvic***

### Bonus 💫

- Il calendario deve essere **responsive**
- Aggiungiamo anche un bottone per “**resettare**” la memoria della pagina e ricominciare da capo