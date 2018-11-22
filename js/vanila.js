let klase1 = [
    {vardas: "Jonas", pavarde: "Jonaitis", amzius: 34},
    {vardas: "Petras", pavarde: "Petraitis", amzius: 56},
    {vardas: "Zigmas", pavarde: "Zigmaitis", amzius: 12},
    {vardas: "Ona", pavarde: "Onaityte", amzius: 45},
    {vardas: "Zita", pavarde: "Zitiene", amzius: 65},
    {vardas: "Rita", pavarde: "Rutele", amzius: 21}
];

let klase2 = [
    {vardas: "Jonas", pavarde: "ppp", amzius: 12},
    {vardas: "Petras", pavarde: "ppp", amzius: 12},
    {vardas: "Zigmas", pavarde: "ppp", amzius: 12},
    {vardas: "Ona", pavarde: "ppp", amzius: 12},
    {vardas: "Zita", pavarde: "ppp", amzius: 12},
    {vardas: "Rita", pavarde: "ppp", amzius: 12}
];

let spausdinti = function (kur, ka) {
    kur.innerHTML += ka;
};

function formuotiSarasa(ka) {
    let sarasas = '';
    for (let i = 0; i < ka.length; i++) {
        let asmuo = ka[i];
        sarasas += asmuo.vardas + " " + asmuo.pavarde + " amzius: " + asmuo.amzius + "<br/>";
    }

    return sarasas;
}

let sarasas1 = formuotiSarasa(klase1);
let sarasas2 = formuotiSarasa(klase2);

let kur1 = document.getElementsByClassName('testas')[0];
let kur2 = document.getElementById('testas');

spausdinti(kur1, sarasas1);
spausdinti(kur2, sarasas2);
