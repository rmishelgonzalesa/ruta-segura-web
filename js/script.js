function evaluarViolentometro() {

const checks = document.querySelectorAll(".test-box input:checked");

let total = 0;

checks.forEach(check => {
    total += Number(check.value);
});

const resultado = document.getElementById("resultadoViolentometro");

resultado.style.display = "block";

if (total <= 2) {

    resultado.style.background = "#DDF7E3";
    resultado.style.color = "#146c2e";

    resultado.innerHTML =
    "🟢 Riesgo bajo.<br>Por el momento no se identifican señales importantes de violencia, pero recuerda que una relación sana siempre debe basarse en el respeto.";

}

else if (total <= 5) {

    resultado.style.background = "#FFF4CC";
    resultado.style.color = "#8a6d00";

    resultado.innerHTML =
    "🟡 Atención.<br>Existen algunas señales que podrían convertirse en violencia. Es importante conversar y buscar orientación.";

}

else if (total <= 8) {

    resultado.style.background = "#FFE1BF";
    resultado.style.color = "#b45a00";

    resultado.innerHTML =
    "🟠 Riesgo alto.<br>Se observan conductas de violencia psicológica o emocional. No normalices estas situaciones.";

}

else {

    resultado.style.background = "#FFD7D7";
    resultado.style.color = "#9b0000";

    resultado.innerHTML =
    "🔴 Riesgo muy alto.<br>Se identifican señales importantes de violencia. Busca apoyo en instituciones especializadas como la FELCV o el SLIM.";

}

}