'use strict';

function criarImagem(imagem) {
    const galeria = document.getElementById('galeria');
    const img = document.createElement('img');
    img.src = imagem.url;

    const container = document.createElement('div');
    container.className = 'imagem-container';

    const legenda = document.createElement('div');
    legenda.className = 'legenda';
    legenda.textContent = imagem.texto || `Imagem ${imagem.nome}`;

 
    container.appendChild(img);
    container.appendChild(legenda);
    galeria.appendChild(container);     
}
function carregarImagens (){
    const imagens = [
        // "./img/image 1.jpg",
        // "./img/image 2.png",
        // "./img/image 3.jpg",
        // "./img/image 4.jpeg",
        // "./img/image 5.jpeg",
        // "./img/image 6.webp",
        // "./img/image 11.png",
        // "./img/image 10.jpg",
        // "./img/image 9.jpg",
        // "./img/imagem 8.jpg"

        

        {
            nome: 'imagem1',
            url: `./img/image 1.jpg`,
            texto: `BESERK`

            
        },
        {
            nome: 'imagem',
            url: './img/image 2.png',
            texto: 'GHOST RECON'
            
            

        },{
            nome: 'imagem',
            url: './img/image 3.jpg',
            texto: 'TOMB RAIDER'
        },{
            nome: 'imagem',
            url: './img/image 4.jpeg',
            texto: 'RESIDENT EVIL 4 remake'
        },{
            nome: 'imagem',
            url: './img/image 5.jpeg',
            texto: 'ARK ASCENDED'
        },{
            nome: 'imagem',
            url: './img/image 6.webp',
            texto: 'ELDEN RING'
        },{
            nome: 'imagem',
            url: './img/image 11.png',
            texto: 'BATTLE FIELD 6'
           
        },{
            nome: 'imagem',
            url: './img/image 10.jpg',
            texto: 'DYING LIGHT 2'
        },{
            nome: 'imagem',
            url: './img/image 9.jpg',
            texto: 'SKYRIM elden scroll legendary edition'
        }
        
    ]
    

    
    imagens.forEach(criarImagem)
    }

    carregarImagens()
    
