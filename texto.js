const el = document.querySelector(".texto");
const texto = "Olá gente, Boa tarde! Nosso tema é ..., nós desenvolvemos um Quiz com perguntas sobre o tema!";
const intervalo = 100;

function showtext(el, texto, intervalo) {
    const char = texto.split("").reverse();

    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
    }, intervalo)
}

showtext(el, texto, intervalo);