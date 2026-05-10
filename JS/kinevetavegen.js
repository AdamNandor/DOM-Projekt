document.getElementById("VisszaButton").onclick = function(){
    window.location.href = "fooldal.html";
}

let vNegyzet = document.getElementById("VorosNegyzet");
let indulasIdo = null;

vNegyzet.onclick = function(){
    if (indulasIdo !== null) 
    {
        let reakcioIdo = Date.now() - indulasIdo;
        indulasIdo = null;
        alert("Reakcióidő: " + reakcioIdo + "ms");

        vNegyzet.src = "IMG/piros-negyzet.png";
        vNegyzet.alt = "piros negyzet";
        vNegyzet.title = "piros negyzet";
    }
    else 
    {
        let rnd = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(Zoldre, rnd);
    }
}

function Zoldre() {
    vNegyzet.src = "IMG/kiNevetAVegen/zöld-négyzet.png";
    vNegyzet.alt = "zold negyzet";
    vNegyzet.title = "zold negyzet";
    indulasIdo = Date.now();
}