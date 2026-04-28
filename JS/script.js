const BalKocka = document.getElementById("BalKocka");
const JobbKocka = document.getElementById("JobbKocka");

  document.getElementById("DobasButton").onclick = function() 
    {
        let BalDobas = Math.floor(Math.random() * 6) + 1;
        let JobbDobas = Math.floor(Math.random() * 6) + 1;

        if (BalDobas > JobbDobas) {
            document.getElementById("Eredmeny").textContent = "A bal kocka nyert!";
        } else if (JobbDobas > BalDobas) {
            document.getElementById("Eredmeny").textContent = "A jobb kocka nyert!";
        } else {
            document.getElementById("Eredmeny").textContent = "Döntetlen!";
        }

        BalKocka.src = `IMG/dobokocka${BalDobas}.png`;
        JobbKocka.src = `IMG/dobokocka${JobbDobas}.png`;
    }

setInterval(Dobas, 1000);