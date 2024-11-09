const correcteAntwoorden = ["hond", "fiets", "windmolen", "vlag", "kaas", "boek", "huis", "boot", "koe", "trein"];
let index = 1;
let correcteAntwoordenTeller = 0;
const totaalVragen = correcteAntwoorden.length;
let foutAntwoordenIndex = [];

document.getElementById("einde").style.display = "none";

for (let i = 2; i <= totaalVragen; i++) {
    let vraag = document.getElementById(`vraag-${i}`);
    if (vraag) {
        vraag.style.display = "none";
    }
}

function checkAntwoord() {
    let huidigeInput = document.getElementById(`input${index}`).value.toLowerCase();
    
    if (huidigeInput === correcteAntwoorden[index - 1]) {
        correcteAntwoordenTeller++;
    } else {
        foutAntwoordenIndex.push(index);
    }
    
    document.getElementById(`vraag-${index}`).style.display = "none";
    index++;
    
    volgendeVraag();
}

function volgendeVraag() {
    
    // Controleer of de volgende vraag bestaat
    if (index <= totaalVragen) {
        document.getElementById(`vraag-${index}`).style.display = "block";
        addEventListenerToInput();
    } else {
        console.log("Er zijn geen meer vragen");
        document.getElementById("einde").style.display = "block";
        document.getElementById("resultaat").innerText = `Je hebt ${correcteAntwoordenTeller} van de ${totaalVragen} vragen goed beantwoord.`;
        
        if (foutAntwoordenIndex.length > 0) {
            let foutAntwoorden = foutAntwoordenIndex.map(i => `Vraag ${i}: ${correcteAntwoorden[i - 1]}`).join("\n");
            document.getElementById("foutAntwoorden").innerText = `Foute antwoorden:\n${foutAntwoorden}`;
        }
    }
}

function addEventListenerToInput() {
    document.getElementById(`input${index}`).addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkAntwoord();
        }
    });
}

// Initialize the first question
document.getElementById(`vraag-${index}`).style.display = "block";
addEventListenerToInput();