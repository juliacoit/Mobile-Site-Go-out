document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("chicletinho");
    var playButton = document.getElementById("btn_s");
    var heartOverlay = document.querySelector(".gif-overlay");

    // Ocultar o GIF de coração inicialmente
    heartOverlay.style.display = "none";

    // Adicionar evento de clique ao botão "Sim"
    playButton.addEventListener("click", function() {
        // Verificar se o áudio está pausado
        if (audio.paused) {
            // Se estiver pausado, reproduzir o áudio
            audio.play();
            // Exibir o GIF de coração
            heartOverlay.style.display = "block";
            playButton.textContent = "eba!";
        } else {
            // Se estiver tocando, pausar o áudio
            audio.pause();
            // Ocultar o GIF de coração
            heartOverlay.style.display = "none";
            playButton.textContent = "Sim";
        }
    });

    // Adicionar evento de clique ao botão "Não"
    var btnN = document.getElementById('btn_n');
    btnN.addEventListener('click', moverBotao);

    function moverBotao() {
        console.log("Botão Não clicado");
        var btn = this;
        var offsetX = Math.random() * 200 - 100; 
        var offsetY = Math.random() * 500 - 250; 
        btn.style.transition = 'transform 0.2s'; // Aplica uma transição suave na propriedade 'transform'
        btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
     // Adicionar evento de clique ao coração para ocultá-lo
     heartOverlay.addEventListener('click', function() {
        // Ocultar o coração quando clicado
        heartOverlay.style.display = "none";
        playButton.textContent = "Sim";
    });
});

