

/*Cambio de imagenes*/ 
document.addEventListener('DOMContentLoaded', function(){
    const cardMaterial = document.querySelectorAll('.card_material')
    const displayedImage = document.getElementById('displayed_image')
    let intervalId

    const images = {
        marble: ['img/Marble_decoration/marble_decoration1.jpg','img/Marble_decoration/marble_decoration2.jpg','img/Marble_decoration/marble_decoration3.jpg'],
        granite: ['img/Granite_decoration/granite_decoration1.jpg','img/Granite_decoration/granite_decoration2.jpg','img/Granite_decoration/granite_decoration3.jpg'],
        travertine: ['img/Travertine_decoration/travertine_decoration1.jpg','img/Travertine_decoration/travertine_decoration2.jpg','img/Travertine_decoration/travertine_decoration3.jpg'],

        
        slate: ['img/Slate_decoration/slate_decoration1.jpg','img/Slate_decoration/slate_decoration2.jpg','img/Slate_decoration/slate_decoration3.jpg'],
        onyx: ['img/Onyx_decoration/onyx_decoration1.jpg','img/Onyx_decoration/onyx_decoration2.jpg','img/Onyx_decoration/onyx_decoration3.jpg'],
        blackMarble: ['img/blackMarble_decoration/blackMarble_decoration1.jpg','img/blackMarble_decoration/blackMarble_decoration2.jpg','img/blackMarble_decoration/blackMarble_decoration3.jpg'],


        quarts: ['img/Quarts_decoration/quarts_decoration1.jpg','img/Quarts_decoration/quarts_decoration2.jpg','img/Quarts_decoration/quarts_decoration3.jpg']
    };

    cardMaterial.forEach(button => {
        button.addEventListener('click', () => {
            const material = button.getAttribute('data-material');
            const materialImages = images[material];
            let imageIndex = 0;

            //Cambiar la imagen mostrada
            displayedImage.src = materialImages[imageIndex];

            //Limiar intervalo anterior
            clearInterval(intervalId);

            //Cambiar automaticamente las imagenes cada 3 segundos
            intervalId = setInterval(() => {
                imageIndex = (imageIndex + 1) % materialImages.length;
                displayedImage.src = materialImages[imageIndex];
            },3000);
        });
    });
});