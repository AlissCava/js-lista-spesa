// Definiamo la lista della spesa
var listaSpesa = ["Pane", "Latte", "Uova", "Frutta", "Verdura"];

// Otteniamo il riferimento all'elemento <ol> dal DOM
var olElement = document.getElementById("spesa-list");

// Inizializziamo il contatore
var contatore = 0;

// Ciclo while per aggiungere gli elementi alla lista ordinata
while (contatore < listaSpesa.length) {
    
    // Creiamo un elemento <li> per ciascun elemento della lista
    var listItem = document.createElement("li");

    // Aggiungiamo il testo con il numero e l'elemento della lista
    listItem.textContent = listaSpesa[contatore];

    // Aggiungiamo l'elemento <li> alla lista ordinata <ol>
    olElement.append(listItem);

    // Incrementiamo il contatore per passare all'elemento successivo
    contatore++;
}
