document.addEventListener("DOMContentLoaded", function () {
    const texto = "Olá! Meu nome é Luiz Becker.";
    let index = 0;
    const elemento = document.getElementById("digitando");

    function digitar() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, 220); // Velocidade da digitação
        }
    }

    digitar();
});