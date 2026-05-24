// ============================================
// FLASHCARDS - Sprechen B2: Naturkatastrophen & Klimawandel-Folgen
// Claudia Toth · 32 carduri
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === Klimawandel bază (5) ===
    { de: "der Klimawandel", ro: "schimbările climatice · termenul central al deceniului", audio: "audio/letters/klimawandel.wav" },
    { de: "die Erderwärmung", ro: "încălzirea globală · creșterea temperaturii medii a planetei", audio: "audio/letters/erderwaermung.wav" },
    { de: "der Treibhauseffekt", ro: "efectul de seră · gazele rețin căldura în atmosferă", audio: "audio/letters/treibhauseffekt.wav" },
    { de: "der CO₂-Ausstoß", ro: "emisiile de CO₂ · principalul gaz cu efect de seră", audio: "audio/letters/co2-ausstoss.wav" },
    { de: "die Polkappen schmelzen", ro: "calotele polare se topesc · indicator vizibil de încălzire", audio: "audio/letters/polkappen.wav" },

    // === Hitze & Dürre (5) ===
    { de: "die Hitzewelle", ro: "valul de căldură · temperaturi extreme câteva zile", audio: "audio/letters/hitzewelle.wav" },
    { de: "die Dürre", ro: "seceta · perioadă lungă fără ploaie", audio: "audio/letters/duerre.wav" },
    { de: "die Wasserknappheit", ro: "criza de apă · lipsa apei potabile sau pentru agricultură", audio: "audio/letters/wasserknappheit.wav" },
    { de: "vertrocknete Felder", ro: "câmpuri uscate · solul fără umiditate", audio: "audio/letters/vertrocknete-felder.wav" },
    { de: "die Rekordtemperatur", ro: "temperatura record · nivel niciodată atins anterior", audio: "audio/letters/rekordtemperatur.wav" },

    // === Hochwasser & Stürme (5) ===
    { de: "die Überschwemmung", ro: "inundația · apa care iese din matcă", audio: "audio/letters/ueberschwemmung.wav" },
    { de: "das Hochwasser", ro: "apa mare · viitura după ploi masive", audio: "audio/letters/hochwasser.wav" },
    { de: "der Starkregen", ro: "ploaia torențială · cantitate uriașă în puține ore", audio: "audio/letters/starkregen.wav" },
    { de: "der Orkan", ro: "uraganul · vânt extrem peste 117 km/h", audio: "audio/letters/orkan.wav" },
    { de: "Menschen werden evakuiert", ro: "oamenii sunt evacuați · scoși din zonele de risc", audio: "audio/letters/evakuiert.wav" },

    // === Waldbrände (4) ===
    { de: "der Waldbrand", ro: "incendiul de pădure · fenomen tot mai dese în verile uscate", audio: "audio/letters/waldbrand.wav" },
    { de: "die Brandgefahr", ro: "pericolul de incendiu · nivel de alertă pentru pompieri", audio: "audio/letters/brandgefahr.wav" },
    { de: "die Rauchwolken", ro: "norii de fum · acoperă orașe întregi", audio: "audio/letters/rauchwolken.wav" },
    { de: "außer Kontrolle geraten", ro: "a scăpa de sub control · stadiu critic al unui incendiu", audio: "audio/letters/ausser-kontrolle.wav" },

    // === Folgen pentru om, animale, agricultură (6) ===
    { de: "der Klimaflüchtling", ro: "refugiatul climatic · obligat să-și părăsească țara din cauza climei", audio: "audio/letters/klimafluechtling.wav" },
    { de: "der Ernteausfall", ro: "pierderea recoltei · seceta sau inundațiile distrug culturile", audio: "audio/letters/ernteausfall.wav" },
    { de: "die Lebensmittelknappheit", ro: "criza alimentară · alimente insuficiente pentru populație", audio: "audio/letters/lebensmittelknappheit.wav" },
    { de: "das Artensterben", ro: "dispariția speciilor · animale și plante care nu mai există", audio: "audio/letters/artensterben.wav" },
    { de: "bedrohte Tierarten", ro: "specii de animale amenințate · pe lista roșie", audio: "audio/letters/bedrohte-tierarten.wav" },
    { de: "obdachlos werden", ro: "a rămâne fără adăpost · după ce casa a fost distrusă", audio: "audio/letters/obdachlos.wav" },

    // === Expresii pentru dialog (7) ===
    { de: "In den Nachrichten habe ich gelesen, dass...", ro: "În știri am citit că... · introduce un fapt", audio: "audio/letters/nachrichten-gelesen.wav" },
    { de: "Was mich besonders schockiert hat, war...", ro: "Ce m-a șocat în mod deosebit a fost... · introdu impactul personal", audio: "audio/letters/schockiert.wav" },
    { de: "Es ist erschreckend, wie schnell...", ro: "Este înspăimântător cât de repede... · exprimă alarmă", audio: "audio/letters/erschreckend.wav" },
    { de: "Ich mache mir große Sorgen um...", ro: "Îmi fac mari griji pentru... · îngrijorare clasică", audio: "audio/letters/sorgen.wav" },
    { de: "Wenn das so weitergeht, dann...", ro: "Dacă continuă așa, atunci... · scenariu negativ", audio: "audio/letters/weitergeht.wav" },
    { de: "Das wird dramatische Auswirkungen haben.", ro: "Asta va avea efecte dramatice. · concluzie despre consecințe", audio: "audio/letters/auswirkungen.wav" },
    { de: "Zusammenfassend lässt sich sagen, dass...", ro: "În concluzie se poate spune că... · închiderea dialogului", audio: "audio/letters/zusammenfassend.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint">Click oriunde pentru a vedea traducerea</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" id="prev-btn" onclick="prevCard()">← Anterior</button>
            <button class="flashcard-btn" id="next-btn" onclick="nextCard()">Următor →</button>
        </div>
    `;
    showCard(0);
}

function showCard(index) {
    currentCardIndex = index;
    const card = flashcardsData[index];
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    document.getElementById('card-num').textContent = index + 1;
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === flashcardsData.length - 1;
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) showCard(currentCardIndex + 1);
}

function prevCard() {
    if (currentCardIndex > 0) showCard(currentCardIndex - 1);
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(() => {});
}

buildFlashcards();
