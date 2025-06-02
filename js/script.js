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
        { id: "inicio", link: document.querySelector('a[href="#inicio"]') },
        { id: "linha-comercial", link: document.querySelector('a[href="#linha-comercial"]') },
        { id: "sobrenos", link: document.querySelector('a[href="#sobrenos"]') },
        { id: "contato", link: document.querySelector('a[href="#contato"]') }
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

        sections.forEach(section => {
            section.link.classList.remove("ativado");
        });
        currentSection.link.classList.add("ativado");
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
});