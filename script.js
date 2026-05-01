const jogos = [
    { data: "18/06/2026", time1: "África do Sul", saibaMais1: "https://en.wikipedia.org/wiki/South_Africa", image1: "https://www.bandeirasnacionais.com/data/flags/w580/za.webp", score1: "?", time2: "República Tcheca", saibaMais2: "https://pt.wikipedia.org/wiki/Ch%C3%A9quia", image2: "https://www.bandeirasnacionais.com/data/flags/w580/cz.webp", score2: "?" },

    { data: "18/06/2026", time1: "México", saibaMais1: "https://pt.wikipedia.org/wiki/M%C3%A9xico", image1: "https://www.bandeirasnacionais.com/data/flags/w580/mx.webp", score1: "?", time2: "Coreia do Sul", saibaMais2: "https://pt.wikipedia.org/wiki/Coreia_do_Sul", image2: "https://www.bandeirasnacionais.com/data/flags/w580/kr.webp", score2: "?" },

    { data: "18/06/2026", time1: "Canadá", saibaMais1: "https://pt.wikipedia.org/wiki/Canad%C3%A1", image1: "https://www.bandeirasnacionais.com/data/flags/w580/ca.webp", score1: "?", time2: "Catar", saibaMais2: "https://pt.wikipedia.org/wiki/Catar", image2: "https://www.bandeirasnacionais.com/data/flags/w580/qa.webp", score2: "?" },

    { data: "18/06/2026", time1: "Suíça", saibaMais1: "https://pt.wikipedia.org/wiki/Su%C3%AD%C3%A7a", image1: "https://www.bandeirasnacionais.com/data/flags/w580/ch.webp", score1: "?", time2: "Bósnia e Herzegovina", saibaMais2: "https://pt.wikipedia.org/wiki/B%C3%B3snia_e_Herzegovina", image2: "https://www.bandeirasnacionais.com/data/flags/w580/ba.webp", score2: "?" },

    { data: "19/06/2026", time1: "Brasil", saibaMais1: "https://pt.wikipedia.org/wiki/Brasil", image1: "https://www.bandeirasnacionais.com/data/flags/w580/br.webp", score1: "?", time2: "Escócia", saibaMais2: "https://pt.wikipedia.org/wiki/Esc%C3%B3cia", image2: "https://www.bandeirasnacionais.com/data/flags/w580/gb-sct.webp", score2: "?" },

    { data: "19/06/2026", time1: "Marrocos", saibaMais1: "https://pt.wikipedia.org/wiki/Marrocos", image1: "https://www.bandeirasnacionais.com/data/flags/w580/ma.webp", score1: "?", time2: "Haiti", saibaMais2: "https://pt.wikipedia.org/wiki/Haiti", image2: "https://www.bandeirasnacionais.com/data/flags/w580/ht.webp", score2: "?" },

    { data: "19/06/2026", time1: "Estados Unidos", saibaMais1: "https://pt.wikipedia.org/wiki/Estados_Unidos", image1: "https://www.bandeirasnacionais.com/data/flags/w580/us.webp", score1: "?", time2: "Paraguai", saibaMais2: "https://pt.wikipedia.org/wiki/Paraguai", image2: "https://www.bandeirasnacionais.com/data/flags/w580/py.webp", score2: "?" },

    { data: "20/06/2026", time1: "Alemanha", saibaMais1: "https://pt.wikipedia.org/wiki/Alemanha", image1: "https://www.bandeirasnacionais.com/data/flags/w580/de.webp", score1: "?", time2: "Equador", saibaMais2: "https://pt.wikipedia.org/wiki/Equador", image2: "https://www.bandeirasnacionais.com/data/flags/w580/ec.webp", score2: "?" },

    { data: "20/06/2026", time1: "Costa do Marfim", saibaMais1: "https://pt.wikipedia.org/wiki/Costa_do_Marfim", image1: "https://www.bandeirasnacionais.com/data/flags/w580/ci.webp", score1: "?", time2: "Curaçao", saibaMais2: "https://pt.wikipedia.org/wiki/Cura%C3%A7au", image2: "https://www.bandeirasnacionais.com/data/flags/w580/cw.webp", score2: "?" },

    { data: "20/06/2026", time1: "Holanda", saibaMais1: "https://pt.wikipedia.org/wiki/Pa%C3%ADses_Baixos", image1: "https://www.bandeirasnacionais.com/data/flags/w580/nl.webp", score1: "?", time2: "Japão", saibaMais2: "https://pt.wikipedia.org/wiki/Jap%C3%A3o", image2: "https://www.bandeirasnacionais.com/data/flags/w580/jp.webp", score2: "?" },

    { data: "20/06/2026", time1: "Suécia", saibaMais1: "https://pt.wikipedia.org/wiki/Su%C3%A9cia", image1: "https://www.bandeirasnacionais.com/data/flags/w580/se.webp", score1: "?", time2: "Tunísia", saibaMais2: "https://pt.wikipedia.org/wiki/Tun%C3%ADsia", image2: "https://www.bandeirasnacionais.com/data/flags/w580/tn.webp", score2: "?" },

    { data: "21/06/2026", time1: "Bélgica", saibaMais1: "https://pt.wikipedia.org/wiki/B%C3%A9lgica", image1: "https://www.bandeirasnacionais.com/data/flags/w580/be.webp", score1: "?", time2: "Egito", saibaMais2: "https://pt.wikipedia.org/wiki/Egito", image2: "https://www.bandeirasnacionais.com/data/flags/w580/eg.webp", score2: "?" },

    { data: "21/06/2026", time1: "Irã", saibaMais1: "https://pt.wikipedia.org/wiki/Ir%C3%A3", image1: "https://www.bandeirasnacionais.com/data/flags/w580/ir.webp", score1: "?", time2: "Nova Zelândia", saibaMais2: "https://pt.wikipedia.org/wiki/Nova_Zel%C3%A2ndia", image2: "https://www.bandeirasnacionais.com/data/flags/w580/nz.webp", score2: "?" },

    { data: "21/06/2026", time1: "Espanha", saibaMais1: "https://pt.wikipedia.org/wiki/Espanha", image1: "https://www.bandeirasnacionais.com/data/flags/w580/es.webp", score1: "?", time2: "Uruguai", saibaMais2: "https://pt.wikipedia.org/wiki/Uruguai", image2: "https://www.bandeirasnacionais.com/data/flags/w580/uy.webp", score2: "?" },

    { data: "21/06/2026", time1: "Arábia Saudita", saibaMais1: "https://pt.wikipedia.org/wiki/Ar%C3%A1bia_Saudita", image1: "https://www.bandeirasnacionais.com/data/flags/w580/sa.webp", score1: "?", time2: "Cabo Verde", saibaMais2: "https://pt.wikipedia.org/wiki/Cabo_Verde", image2: "https://www.bandeirasnacionais.com/data/flags/w580/cv.webp", score2: "?" }
];


function carregarJogos(listaJogos) {

    const container = document.getElementById("table-container");

    if (!container) return;

    const fragment = document.createDocumentFragment();
    // !--console.log(fragment);

    listaJogos.forEach(jogo => {

        const card = document.createElement("div");
        card.className = "match-card";
        card.innerHTML =  `<div class="match-date">${jogo.data}</div>

        <div class="teams-container">

                            <div class="team-box">
                                
                                <a href="${jogo.saibaMais1}">
                                    <img src="${jogo.image1}" alt=${jogo.time1}>
                                </a>
                            <span>${jogo.time1}</span>
                            
                            </div>

                            <div class="score-box">

                                <span class="time1">${jogo.score1}</span>
                                <span class="vs">X</span>
                                <span class="time2">${jogo.score2}</span>

                            </div>

                            <div class="team-box">
                                
                                <a href="${jogo.saibaMais2}">
                                    <img src="${jogo.image2}" alt=${jogo.time2}>
                                </a>
                            <span>${jogo.time2}</span>
                            
                            </div>
                            
                            
                        </div>

        `;
        

        fragment.appendChild(card);

        // console.log(fragment);





    });

    container.appendChild(fragment);

};

    

document.addEventListener("DOMContentLoaded", () => {

    carregarJogos(jogos);
});



