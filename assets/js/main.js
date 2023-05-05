
function berechne () {
    //Werte Input Felder un deren Value
    let groesse = Number(document.querySelector("#groesse").value);
    let alter = Number(document.querySelector("#alter").value);
    let gewicht = Number(document.querySelector("#gewicht").value);
    
    //Werte Geschlecht
    let weiblich = document.querySelector("#weiblich").checked;
    let maennlich = document.querySelector("#maennlich").checked;
    
    //Werte Aktivitaet
    let aktivitaet = Number(document.querySelector("#aktivitaetAuswahl").value);
    
    console.log(groesse, alter, gewicht, weiblich, maennlich, aktivitaet);

    //if else Formel für Geschlechter aufstellen und die Werte entsprechend der Inputs in die Formel einsetzen + Einbinden der Ausgabe im HTML
    
    if (weiblich) {
       let grundumsatzW = (655.1 + (9.6 * gewicht) + (1.8 * groesse) - (4.7 * alter));
       console.log(grundumsatzW);
       let gesamtumsatzW = grundumsatzW * aktivitaet;
       console.log(gesamtumsatzW);

       document.querySelector(".grundKcal").innerHTML = grundumsatzW.toFixed();
       document.querySelector(".grundKj").innerHTML = (grundumsatzW * 4.184).toFixed();
       document.querySelector(".gesamtKcal").innerHTML = gesamtumsatzW.toFixed();
       document.querySelector(".gesamtKj").innerHTML = (gesamtumsatzW * 4.184).toFixed();

    } else {
       let grundumsatzM = (66.47 + (13.7 * gewicht) + (5 * groesse) - (6.8 * alter));
       console.log(grundumsatzM);
       let gesamtumsatzM = grundumsatzM * aktivitaet;
       console.log(gesamtumsatzM);

       document.querySelector(".grundKcal").innerHTML = grundumsatzM.toFixed();
       document.querySelector(".grundKj").innerHTML = (grundumsatzM * 4.184).toFixed();
       document.querySelector(".gesamtKcal").innerHTML = gesamtumsatzM.toFixed();
       document.querySelector(".gesamtKj").innerHTML = (gesamtumsatzM * 4.184).toFixed();
    }
}

