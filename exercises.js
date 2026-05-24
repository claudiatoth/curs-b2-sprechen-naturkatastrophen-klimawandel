// ============================================
// EXERCIȚII - Sprechen B2: Naturkatastrophen & Klimawandel-Folgen
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Traducere DE → RO (vocabular cheie)
// ============================================
const ex1Data = [
    { id: 'a', de: 'die Hitzewelle', correct: 'valul de căldură', accept: ['valul de căldură', 'valul de caldura', 'val de căldură', 'val de caldura'] },
    { id: 'b', de: 'die Dürre', correct: 'seceta', accept: ['seceta', 'secetă', 'perioada de secetă', 'perioada de seceta'] },
    { id: 'c', de: 'die Überschwemmung', correct: 'inundația', accept: ['inundația', 'inundatia', 'inundație', 'inundatie'] },
    { id: 'd', de: 'der Waldbrand', correct: 'incendiul de pădure', accept: ['incendiul de pădure', 'incendiul de padure', 'incendiu de pădure', 'incendiu de padure'] },
    { id: 'e', de: 'der Klimaflüchtling', correct: 'refugiatul climatic', accept: ['refugiatul climatic', 'refugiat climatic'] },
    { id: 'f', de: 'der Ernteausfall', correct: 'pierderea recoltei', accept: ['pierderea recoltei', 'pierderea recoltei agricole'] },
    { id: 'g', de: 'das Artensterben', correct: 'dispariția speciilor', accept: ['dispariția speciilor', 'disparitia speciilor'] },
    { id: 'h', de: 'die Rauchwolken', correct: 'norii de fum', accept: ['norii de fum', 'nori de fum'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE (vocabular activ)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'valul de căldură', correct: 'die Hitzewelle', accept: ['die hitzewelle', 'hitzewelle'] },
    { id: 'b', ro: 'criza de apă', correct: 'die Wasserknappheit', accept: ['die wasserknappheit', 'wasserknappheit'] },
    { id: 'c', ro: 'inundația', correct: 'die Überschwemmung', accept: ['die überschwemmung', 'überschwemmung', 'die ueberschwemmung', 'ueberschwemmung'] },
    { id: 'd', ro: 'incendiul de pădure', correct: 'der Waldbrand', accept: ['der waldbrand', 'waldbrand'] },
    { id: 'e', ro: 'efectul de seră', correct: 'der Treibhauseffekt', accept: ['der treibhauseffekt', 'treibhauseffekt'] },
    { id: 'f', ro: 'dispariția speciilor', correct: 'das Artensterben', accept: ['das artensterben', 'artensterben'] },
    { id: 'g', ro: 'a fi evacuați', correct: 'evakuiert werden', accept: ['evakuiert werden'] },
    { id: 'h', ro: 'refugiatul climatic', correct: 'der Klimaflüchtling', accept: ['der klimaflüchtling', 'klimaflüchtling', 'der klimafluechtling', 'klimafluechtling'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#6b7280; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția (substantive cheie)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Im Sommer 2022 hat eine extreme ____ ganz Europa getroffen.', translation: 'În vara lui 2022, un val extrem de căldură a lovit toată Europa.', correct: 'Hitzewelle', accept: ['hitzewelle'] },
    { id: 'b', sentence: 'Wegen der ____ sind viele Felder vertrocknet.', translation: 'Din cauza secetei, multe câmpuri s-au uscat.', correct: 'Dürre', accept: ['dürre', 'duerre'] },
    { id: 'c', sentence: 'Der Starkregen hat zu einer großen ____ geführt.', translation: 'Ploaia torențială a dus la o inundație mare.', correct: 'Überschwemmung', accept: ['überschwemmung', 'ueberschwemmung'] },
    { id: 'd', sentence: 'In Griechenland geriet der ____ außer Kontrolle.', translation: 'În Grecia incendiul de pădure a scăpat de sub control.', correct: 'Waldbrand', accept: ['waldbrand'] },
    { id: 'e', sentence: 'Die Bauern haben einen großen ____ wegen der Trockenheit.', translation: 'Fermierii au o pierdere mare de recoltă din cauza secetei.', correct: 'Ernteausfall', accept: ['ernteausfall'] },
    { id: 'f', sentence: 'Wegen der Klimakrise werden viele Menschen zu ____.', translation: 'Din cauza crizei climatice, mulți oameni devin refugiați climatici.', correct: 'Klimaflüchtlingen', accept: ['klimaflüchtlingen', 'klimafluechtlingen', 'klimaflüchtling', 'klimafluechtling'] },
    { id: 'g', sentence: 'Das ____ ist eine der dramatischsten Folgen — viele Tierarten verschwinden.', translation: 'Dispariția speciilor este una dintre cele mai dramatice consecințe — multe specii dispar.', correct: 'Artensterben', accept: ['artensterben'] },
    { id: 'h', sentence: 'Die Polkappen ____ schneller als erwartet.', translation: 'Calotele polare se topesc mai repede decât se aștepta.', correct: 'schmelzen', accept: ['schmelzen'] },
    { id: 'i', sentence: 'Der ____ ist hauptverantwortlich für den Treibhauseffekt.', translation: 'Emisia de CO₂ este principala responsabilă pentru efectul de seră.', correct: 'CO₂-Ausstoß', accept: ['co₂-ausstoß', 'co₂-ausstoss', 'co2-ausstoß', 'co2-ausstoss'] },
    { id: 'j', sentence: 'Nach der Überschwemmung sind viele Menschen ____ geworden.', translation: 'După inundație, mulți oameni au rămas fără adăpost.', correct: 'obdachlos', accept: ['obdachlos'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează propoziția cu cuvântul potrivit din vocabular.</strong><br>
            Folosește substantivele/verbele învățate. Atenție la genul și forma corectă.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="cuvântul potrivit...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Reconstruiește dialogul (descriere catastrofă + îngrijorare)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'A: In den ____ habe ich gelesen, dass es in Spanien Rekordtemperaturen gab.', translation: 'În știri am citit că în Spania au fost temperaturi record.', correct: 'Nachrichten', accept: ['nachrichten'] },
    { id: 'b', sentence: 'B: Ja, das habe ich auch gesehen. Was mich besonders ____ hat, war die Anzahl der Hitzeschläge.', translation: 'Da, am văzut și eu. Ce m-a șocat în mod deosebit a fost numărul de șocuri termice.', correct: 'schockiert', accept: ['schockiert'] },
    { id: 'c', sentence: 'A: Außerdem mache ich mir große ____ um die Felder — alles ist vertrocknet.', translation: 'În plus îmi fac mari griji pentru câmpuri — totul s-a uscat.', correct: 'Sorgen', accept: ['sorgen'] },
    { id: 'd', sentence: 'B: Stell dir vor, dass viele Bauern dieses Jahr einen kompletten ____ haben werden.', translation: 'Imaginează-ți că mulți fermieri vor avea o pierdere completă de recoltă anul acesta.', correct: 'Ernteausfall', accept: ['ernteausfall'] },
    { id: 'e', sentence: 'A: Es ist ____, wie schnell sich das Klima ändert.', translation: 'Este înspăimântător cât de repede se schimbă clima.', correct: 'erschreckend', accept: ['erschreckend'] },
    { id: 'f', sentence: 'B: Wenn das so ____, werden viele Menschen ihre Heimat verlassen müssen.', translation: 'Dacă continuă așa, mulți oameni vor trebui să-și părăsească casa.', correct: 'weitergeht', accept: ['weitergeht'] },
    { id: 'g', sentence: 'A: Genau — dann reden wir nicht mehr nur über Klimawandel, sondern über echte ____.', translation: 'Exact — atunci nu mai vorbim doar despre schimbări climatice, ci despre refugiați climatici reali.', correct: 'Klimaflüchtlinge', accept: ['klimaflüchtlinge', 'klimafluechtlinge'] },
    { id: 'h', sentence: 'B: Es ist höchste ____, dass die Politik etwas unternimmt.', translation: 'Este timpul suprem ca politica să facă ceva.', correct: 'Zeit', accept: ['zeit'] },
    { id: 'i', sentence: 'A: ____ lässt sich sagen, dass wir vor enormen Herausforderungen stehen.', translation: 'În concluzie se poate spune că ne aflăm în fața unor provocări enorme.', correct: 'Zusammenfassend', accept: ['zusammenfassend'] },
    { id: 'j', sentence: 'B: Das wird dramatische ____ für unsere Kinder haben.', translation: 'Asta va avea consecințe dramatice pentru copiii noștri.', correct: 'Auswirkungen', accept: ['auswirkungen'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Dialog: Cursant A descrie o catastrofă citită în știri ↔ Cursant B exprimă îngrijorare și se gândește la consecințe.</strong><br>
            Completează cuvântul lipsă pentru a reconstrui dialogul natural.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="cuvântul lipsă...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Expresia potrivită pentru funcția de dialog
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Vrei să introduci un fapt citit: „____ Nachrichten habe ich gelesen, dass es eine neue Dürre gibt."', translation: 'În știri am citit că este o nouă secetă.', correct: 'In den', accept: ['in den'] },
    { id: 'b', sentence: 'Vrei să exprimi impact personal: „Was mich besonders ____ hat, war das Hochwasser im Ahrtal."', translation: 'Ce m-a șocat în mod deosebit a fost inundația din Valea Ahr.', correct: 'schockiert', accept: ['schockiert'] },
    { id: 'c', sentence: 'Vrei să exprimi îngrijorare: „Ich mache mir große ____ um die Zukunft der Kinder."', translation: 'Îmi fac mari griji pentru viitorul copiilor.', correct: 'Sorgen', accept: ['sorgen'] },
    { id: 'd', sentence: 'Vrei să exprimi alarmă: „Es ist ____, wie viele Tierarten aussterben."', translation: 'Este înspăimântător câte specii dispar.', correct: 'erschreckend', accept: ['erschreckend'] },
    { id: 'e', sentence: 'Vrei să formulezi un scenariu negativ: „Wenn das so ____, werden ganze Inseln verschwinden."', translation: 'Dacă continuă așa, insule întregi vor dispărea.', correct: 'weitergeht', accept: ['weitergeht'] },
    { id: 'f', sentence: 'Vrei să subliniezi urgența: „Es ist höchste ____, dass wir handeln!"', translation: 'Este timpul suprem să acționăm!', correct: 'Zeit', accept: ['zeit'] },
    { id: 'g', sentence: 'Vrei să generalizezi: „Die ____ werden langfristig sichtbar sein."', translation: 'Consecințele vor fi vizibile pe termen lung.', correct: 'Folgen', accept: ['folgen'] },
    { id: 'h', sentence: 'Vrei să închei dialogul: „____ lässt sich sagen, dass wir alle betroffen sind."', translation: 'În concluzie se poate spune că toți suntem afectați.', correct: 'Zusammenfassend', accept: ['zusammenfassend'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Folosește expresia potrivită pentru funcția dată.</strong><br>
            Aceste expresii sunt esențiale pentru a structura un dialog argumentat la nivel B2.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="expresia potrivită...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
