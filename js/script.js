function hideLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Remove a tela de loading quando a página carregar
window.addEventListener("load", hideLoading);

// Fallback: esconde o loading mesmo se "load" não disparar (ex: erro em imagem externa)
setTimeout(hideLoading, 5000);

function mostrarConteudo(id) {
    const botoes = document.querySelectorAll('.menu button');
    const conteudos = document.querySelectorAll('.conteudo');

    botoes.forEach(btn => btn.classList.remove('active'));
    conteudos.forEach(div => div.classList.remove('ativo'));

    document.querySelector(`#${id}`).classList.add('ativo');
    event.target.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: "inicio", links: document.querySelectorAll('a[href="#inicio"]') },
        { id: "linha-comercial", links: document.querySelectorAll('a[href="#linha-comercial"]') },
        { id: "sobrenos", links: document.querySelectorAll('a[href="#sobrenos"]') },
        { id: "contato", links: document.querySelectorAll('a[href="#contato"]') }
    ];

    function onScroll() {
        let offset = 120; // ajuste conforme a altura do seu header fixo
        let minDistance = Infinity;
        let currentSection = sections[0];

        sections.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) {
                const distance = Math.abs(el.getBoundingClientRect().top - offset);
                if (distance < minDistance && el.getBoundingClientRect().top - offset <= 50) {
                    minDistance = distance;
                    currentSection = section;
                }
            }
        });

        // Remove 'ativado' de todos os links
        sections.forEach(section => {
            section.links.forEach(link => link.classList.remove("ativado"));
        });
        // Adiciona 'ativado' nos links da seção atual
        currentSection.links.forEach(link => link.classList.add("ativado"));
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
});