var niz = [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0];

var trenutnaSekvenca = 0;
var najduzaSekvenca = 0;
var pocetnaPozicija = 0;
var najvecaPocetnaPozicija = 0;
var krajnjaPozicija = 0;
var najvecaKranjaPozicija = 0;

for (let i = 0; i < niz.length; i++) {
  if (niz[i] === 0) {
    // u ovom slucaju trenutna sekvenca je 0 i dodaje se 1
    trenutnaSekvenca++;
    if (trenutnaSekvenca === 1) {
      // ako je trenutna sekvenca 1, to znaci da je prvi clan sekvence u pitanju, pocetna pozicija se pomjera na trenutni index
      pocetnaPozicija = i;
    }
    //krajnja pozicija se uvjek ucitava
    krajnjaPozicija = i;

    //provjeravamo da li je element zadnji u nizu (1 se dodaje na i, zato sto je uslov da je i manje od duzine niza)
    if (niz.length === i + 1) {
      //ako se uslov ispuni trenutno stanje se prenosi u maksimalno
      // (znak > moze da se promjeni u >=, u tom slucaju bi ucitavalo zadnju sekvencu iz niza, pod uslovom da postoje 2 sekvence iste duzine )
      if (trenutnaSekvenca > najduzaSekvenca) {
        najduzaSekvenca = trenutnaSekvenca;
        najvecaPocetnaPozicija = pocetnaPozicija;
        najvecaKranjaPozicija = krajnjaPozicija;
      }
    }
  } else {
    //ako trenutni broj nije 0 i ako se uslov ispuni trenutno stanje se prenosi u maksimalno
    if (trenutnaSekvenca > najduzaSekvenca) {
      najduzaSekvenca = trenutnaSekvenca;
      najvecaPocetnaPozicija = pocetnaPozicija;
      najvecaKranjaPozicija = krajnjaPozicija;
    }
    //trenutni broj nije 0, sto znaci da se niz prekida, samim tim se trenutna sekvenca vraca na 0
    trenutnaSekvenca = 0;
  }
}
console.log([najduzaSekvenca, najvecaPocetnaPozicija, najvecaKranjaPozicija]);
