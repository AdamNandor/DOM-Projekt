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
        alert("A reakcióidőd: " + reakcioIdo + "ms");

        vNegyzet.src = "IMG/kiNevetAVegen/vörös-négyzet.jpg";
        vNegyzet.alt = "vörös negyzet";
        vNegyzet.title = "vörös negyzet";
    }
    else 
    {
        let rnd = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(Zoldre, rnd);
    }
}

function Zoldre() {
    vNegyzet.src = "IMG/kiNevetAVegen/zöld-négyzet.png";
    vNegyzet.alt = "zöld negyzet";
    vNegyzet.title = "zöld negyzet";
    indulasIdo = Date.now();
}