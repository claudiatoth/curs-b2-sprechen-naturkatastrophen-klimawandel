// PDF BUILDER — Sprechen B2 Naturkatastrophen & Klimawandel-Folgen
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards();
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs"</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Studentă · Brandenburg</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
                <div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Maistru · Oranienburg</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fffbeb[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fee2e2[^"]*"[^>]*>/g, '<div class="theory-box" style="border-left-color:#ef4444;">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#d1fae5[^"]*"[^>]*>/g, '<div class="theory-box" style="border-left-color:#10b981;">');
        return `<h1 class="chapter">📘 1. Teorie — Vocabular Naturkatastrophen (B2 Sprechen)</h1>` + t;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const prompt = it.sentence || it.word || '';
            const filled = prompt.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}${it.hint && !it.translation ? `<div class="ex-explanation">💡 ${it.hint}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>`;
        // Ex1: traducere DE → RO
        if (typeof ex1Data !== 'undefined') {
            let h = `<div class="ex-block"><h3>Übung 1 — Traducere DE → RO (vocabular)</h3><div class="instruction">Traduceți expresia germană în română.</div><div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:50%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach(it => {
                h += `<tr><td class="verb">${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            h += `</tbody></table></div>`;
            html += h;
        }
        // Ex2: traducere RO → DE
        if (typeof ex2Data !== 'undefined') {
            let h = `<div class="ex-block"><h3>Übung 2 — Traducere RO → DE (vocabular activ)</h3><div class="instruction">Traduceți expresia română în germană.</div><div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:50%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex2Data.forEach(it => {
                h += `<tr><td class="ro-text">${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            h += `</tbody></table></div>`;
            html += h;
        }
        // Ex3-5: fill-in
        if (typeof ex3Data !== 'undefined') {
            html += fillInBlock('Übung 3 — Vocabular Naturkatastrophen în context (substantive cheie)', 'Hitzewelle, Dürre, Überschwemmung, Waldbrand, Ernteausfall, Klimaflüchtling, Artensterben — cuvinte cheie pentru descrierea fenomenelor.', ex3Data);
        }
        if (typeof ex4Data !== 'undefined') {
            html += fillInBlock('Übung 4 — Reconstruiește dialogul (descriere catastrofă + îngrijorare)', 'Dialog A↔B: A descrie un fenomen citit în știri, B reacționează cu îngrijorare și anticipează consecințele.', ex4Data);
        }
        if (typeof ex5Data !== 'undefined') {
            html += fillInBlock('Übung 5 — Expresii pentru dialog B2 (Sorgen + urgență + concluzii)', 'Formule cheie pentru exprimarea emoției și concluziei: „In den Nachrichten habe ich gelesen, dass..." · „Ich mache mir große Sorgen um..." · „Es ist höchste Zeit..." · „Zusammenfassend lässt sich sagen..."', ex5Data);
        }
        return html;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale lecției — Klimawandel bază + 5 grupuri de fenomene (Hitze/Dürre, Hochwasser/Stürme, Waldbrände) + consecințe (Klimaflüchtling, Ernteausfall, Artensterben) + 7 expresii dialog.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
