// ============================================
// VOCABULAR - Sprechen B2: Naturkatastrophen & Klimawandel-Folgen
// Tema: Fenomenele schimbării climatice + consecințele lor concrete
// Claudia Toth · Vocabular bilingv pentru dialog pe perechi B2
// ============================================

const theoryHTML = `
    <!-- 0: Intro + roluri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Tema dialogului + roluri</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="theory-box">
                <h4>🌍 Tema: „Naturkatastrophen & Klimawandel-Folgen"</h4>
                <p>Schimbările climatice nu mai sunt o teorie de viitor — sunt deja vizibile prin <strong>catastrofe naturale tot mai dese și mai severe</strong>: valuri de căldură, secete, inundații, furtuni puternice, incendii de pădure. Aceste fenomene afectează oamenii, animalele, agricultura și economia.</p>
                <p>Voi sunteți doi cunoscuți care discutați despre ce fenomene v-au impresionat cel mai mult (citite în știri sau trăite direct) și ce consecințe credeți că vor avea pe termen lung.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>👥 Roluri</h4>
                <table class="grammar-table">
                    <tr><th>Cursant</th><th>Focus</th><th>Despre ce vorbește</th></tr>
                    <tr><td><strong>Cursant A</strong></td><td>fenomene <strong>concrete</strong></td><td>descrie un dezastru natural pe care l-a citit/trăit recent — Hitzewelle, Hochwasser, Waldbrand etc. — și explică ce a observat: temperaturi, pagube, oameni afectați</td></tr>
                    <tr><td><strong>Cursant B</strong></td><td><strong>consecințe</strong> pe termen lung</td><td>răspunde cu îngrijorare asupra consecințelor — Klimaflüchtlinge, Ernteausfall, Artensterben — și ce viziune are despre viitor</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>📌 Ce conține acest material</h4>
                <ul style="margin-left: 18px;">
                    <li>7 secțiuni de vocabular bilingv DE → RO (~60 termeni)</li>
                    <li>5 exerciții de fixare a vocabularului (traducere DE↔RO + completare + dialog)</li>
                    <li>32 flashcards cu pronunție Hedda</li>
                    <li>Test final cu 15 întrebări mixte (vocabular + context + expresii)</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>💡 Diferența față de lecția anterioară</h4>
                <p>Lecția <em>Klimaschutz</em> (B2 Sprechen #2) a fost despre <strong>responsabilitate</strong> (individ vs. politică). Aici trecem la <strong>fenomene concrete</strong> și <strong>vocabular descriptiv</strong> — care sunt dezastrele, cum le numești corect în germană, cum descrii un eveniment, ce consecințe au.</p>
            </div>
        </div>
    </div>

    <!-- 1: Klimawandel — bazele lexicale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🌡️ 2. Klimawandel — cauze & vocabular de bază</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>der Klimawandel</strong></td><td>schimbările climatice</td></tr>
                    <tr><td><strong>die Erderwärmung</strong></td><td>încălzirea globală</td></tr>
                    <tr><td><strong>der Treibhauseffekt</strong></td><td>efectul de seră</td></tr>
                    <tr><td><strong>die Treibhausgase (Pl.)</strong></td><td>gazele cu efect de seră</td></tr>
                    <tr><td><strong>der CO₂-Ausstoß / die CO₂-Emissionen</strong></td><td>emisiile de CO₂</td></tr>
                    <tr><td><strong>die fossilen Brennstoffe</strong></td><td>combustibilii fosili</td></tr>
                    <tr><td><strong>die Atmosphäre</strong></td><td>atmosfera</td></tr>
                    <tr><td><strong>die Durchschnittstemperatur</strong></td><td>temperatura medie</td></tr>
                    <tr><td><strong>der Meeresspiegel steigt</strong></td><td>nivelul mării crește</td></tr>
                    <tr><td><strong>die Polkappen schmelzen</strong></td><td>calotele polare se topesc</td></tr>
                    <tr><td><strong>die Gletscher schmelzen</strong></td><td>ghețarii se topesc</td></tr>
                    <tr><td><strong>extreme Wetterlagen</strong></td><td>fenomene meteo extreme</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Cum folosești la dialog</h4>
                <p>Pentru a deschide subiectul concret: <em>„Wegen des Klimawandels werden extreme Wetterlagen immer häufiger."</em> (Din cauza schimbărilor climatice, fenomenele meteo extreme devin tot mai dese.)</p>
            </div>
        </div>
    </div>

    <!-- 2: Hitze & Dürre -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔥 3. Hitze & Dürre — căldură extremă și secetă</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box" style="background: #fef3c7;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Hitzewelle</strong></td><td>valul de căldură</td></tr>
                    <tr><td><strong>die Dürre / die Dürreperiode</strong></td><td>seceta / perioada de secetă</td></tr>
                    <tr><td><strong>die Wasserknappheit</strong></td><td>criza de apă · lipsa apei</td></tr>
                    <tr><td><strong>die Rekordtemperatur</strong></td><td>temperatura record</td></tr>
                    <tr><td><strong>vertrocknete Felder</strong></td><td>câmpuri uscate</td></tr>
                    <tr><td><strong>der Hitzschlag</strong></td><td>șocul termic / insolația</td></tr>
                    <tr><td><strong>der Hitzerekord</strong></td><td>recordul de căldură</td></tr>
                    <tr><td><strong>verdunsten</strong></td><td>a se evapora</td></tr>
                    <tr><td><strong>austrocknen</strong></td><td>a se usca complet</td></tr>
                    <tr><td><strong>die Ernte verdorrt</strong></td><td>recolta se usucă</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Propoziție model</h4>
                <p><em>„Im Sommer 2022 hat eine extreme Hitzewelle ganz Europa getroffen — viele Felder sind vertrocknet und es gab eine starke Wasserknappheit."</em></p>
                <p style="color:#6b7280; font-style:italic;">În vara lui 2022, un val extrem de căldură a lovit toată Europa — multe câmpuri s-au uscat și a fost o lipsă serioasă de apă.</p>
            </div>
        </div>
    </div>

    <!-- 3: Hochwasser & Stürme -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🌊 4. Hochwasser & Stürme — inundații și furtuni</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #dbeafe;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Überschwemmung</strong></td><td>inundația</td></tr>
                    <tr><td><strong>das Hochwasser</strong></td><td>apa mare · viitura</td></tr>
                    <tr><td><strong>die Sturmflut</strong></td><td>furtuna de mare cu valuri uriașe</td></tr>
                    <tr><td><strong>der Starkregen</strong></td><td>ploaia torențială</td></tr>
                    <tr><td><strong>der Orkan</strong></td><td>uraganul</td></tr>
                    <tr><td><strong>der Tornado / der Wirbelsturm</strong></td><td>tornada</td></tr>
                    <tr><td><strong>der Erdrutsch</strong></td><td>alunecarea de teren</td></tr>
                    <tr><td><strong>überflutete Straßen</strong></td><td>străzi inundate</td></tr>
                    <tr><td><strong>Häuser werden zerstört</strong></td><td>casele sunt distruse</td></tr>
                    <tr><td><strong>Menschen werden evakuiert</strong></td><td>oamenii sunt evacuați</td></tr>
                    <tr><td><strong>der Schaden</strong></td><td>paguba · dauna</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Propoziție model</h4>
                <p><em>„Im Juli 2021 hat ein extremer Starkregen das Ahrtal überflutet — viele Häuser wurden zerstört und Tausende Menschen mussten evakuiert werden."</em></p>
                <p style="color:#6b7280; font-style:italic;">În iulie 2021, o ploaie torențială extremă a inundat valea Ahr — multe case au fost distruse și mii de oameni au trebuit evacuați.</p>
            </div>
        </div>
    </div>

    <!-- 4: Waldbrände -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🔥 5. Waldbrände — incendii de pădure</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background: #fee2e2;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>der Waldbrand</strong></td><td>incendiul de pădure</td></tr>
                    <tr><td><strong>das Buschfeuer</strong></td><td>incendiul de tufăriș (în Australia)</td></tr>
                    <tr><td><strong>die Brandgefahr</strong></td><td>pericolul de incendiu</td></tr>
                    <tr><td><strong>die Flammen</strong></td><td>flăcările</td></tr>
                    <tr><td><strong>die Rauchwolken</strong></td><td>norii de fum</td></tr>
                    <tr><td><strong>die Asche</strong></td><td>cenușa</td></tr>
                    <tr><td><strong>verbrannte Wälder</strong></td><td>păduri arse</td></tr>
                    <tr><td><strong>außer Kontrolle geraten</strong></td><td>a scăpa de sub control</td></tr>
                    <tr><td><strong>die Feuerwehr löscht</strong></td><td>pompierii sting (focul)</td></tr>
                    <tr><td><strong>die Dorfbewohner fliehen</strong></td><td>sătenii fug</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Propoziție model</h4>
                <p><em>„In Griechenland gerieten 2023 die Waldbrände außer Kontrolle — riesige Rauchwolken bedeckten die Inseln und viele Dorfbewohner mussten fliehen."</em></p>
                <p style="color:#6b7280; font-style:italic;">În Grecia, în 2023, incendiile de pădure au scăpat de sub control — nori uriași de fum au acoperit insulele și mulți săteni au trebuit să fugă.</p>
            </div>
        </div>
    </div>

    <!-- 5: Folgen pentru om, animale, agricultură -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🐾 6. Folgen — consecințe pentru om, animale & agricultură</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>der Klimaflüchtling</strong></td><td>refugiatul climatic</td></tr>
                    <tr><td><strong>die Migration</strong></td><td>migrația</td></tr>
                    <tr><td><strong>der Ernteausfall</strong></td><td>pierderea recoltei</td></tr>
                    <tr><td><strong>die Lebensmittelknappheit</strong></td><td>criza alimentară</td></tr>
                    <tr><td><strong>die steigenden Lebensmittelpreise</strong></td><td>creșterea prețurilor alimentelor</td></tr>
                    <tr><td><strong>das Artensterben</strong></td><td>dispariția speciilor</td></tr>
                    <tr><td><strong>bedrohte Tierarten</strong></td><td>specii de animale amenințate</td></tr>
                    <tr><td><strong>verlorene Lebensräume</strong></td><td>habitate pierdute</td></tr>
                    <tr><td><strong>der Versicherungsschaden</strong></td><td>paguba acoperită de asigurare</td></tr>
                    <tr><td><strong>gesundheitliche Folgen</strong></td><td>consecințele asupra sănătății</td></tr>
                    <tr><td><strong>obdachlos werden</strong></td><td>a rămâne fără adăpost</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Capcană de gen</h4>
                <p><strong>der Klimaflüchtling</strong> (terminația -ling = masculin sigur — vezi lecția Genul Masculin). Forma feminină: <em>die Klimaflüchtlingin</em>. Pluralul: <em>die Klimaflüchtlinge</em>.</p>
            </div>
        </div>
    </div>

    <!-- 6: Expresii pentru dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💬 7. Expresii utile pentru dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Pentru a descrie un dezastru</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>In den Nachrichten habe ich gelesen, dass...</strong></td><td>În știri am citit că...</td></tr>
                    <tr><td><strong>Was mich besonders schockiert hat, war...</strong></td><td>Ce m-a șocat în mod deosebit a fost...</td></tr>
                    <tr><td><strong>Stell dir vor, dass...</strong></td><td>Imaginează-ți că...</td></tr>
                    <tr><td><strong>Es ist erschreckend, wie schnell...</strong></td><td>Este înspăimântător cât de repede...</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>Pentru a exprima îngrijorare</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Ich mache mir große Sorgen um...</strong></td><td>Îmi fac mari griji pentru...</td></tr>
                    <tr><td><strong>Was mich am meisten beunruhigt, ist...</strong></td><td>Ce mă neliniștește cel mai mult este...</td></tr>
                    <tr><td><strong>Wenn das so weitergeht, dann...</strong></td><td>Dacă continuă așa, atunci...</td></tr>
                    <tr><td><strong>Es ist höchste Zeit, dass...</strong></td><td>Este timpul suprem ca...</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #dbeafe;">
                <h4>Pentru a vorbi despre consecințe & viitor</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Die Folgen werden langfristig sichtbar sein.</strong></td><td>Consecințele vor fi vizibile pe termen lung.</td></tr>
                    <tr><td><strong>Das wird dramatische Auswirkungen haben.</strong></td><td>Asta va avea efecte dramatice.</td></tr>
                    <tr><td><strong>Zukünftige Generationen werden...</strong></td><td>Generațiile viitoare vor...</td></tr>
                    <tr><td><strong>Zusammenfassend lässt sich sagen, dass...</strong></td><td>În concluzie se poate spune că...</td></tr>
                </table>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
