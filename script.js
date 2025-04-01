const texto = "Olá! Meu nome é Luiz Becker, seja bem-vindo ao meu portifólio de trabalhos!";
        let i = 0;
        function digitar() {
            if (i < texto.length) {
                document.getElementById("chat").textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, 100); // Ajuste a velocidade da digitação
            } else {
                document.getElementById("chat").style.borderRight = "none"; // Remove o cursor após a digitação
            }
        }
        // setTimeout(digitar, 500); Inicia após um pequeno atraso