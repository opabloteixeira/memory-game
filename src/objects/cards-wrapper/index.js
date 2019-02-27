let qntActiveMemoryCard = 0;

function createCardsWrapper(){

    const $cardsWrapper = document.createElement("section");

    $cardsWrapper.classList.add("cards-wrapper");

    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .cards-wrapper{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
            width: 100vw;
        }
        
        .cards-wrapper > .memory-card{
            margin-bottom: 10px
        }
    `;

    $head.insertBefore($style, null);
 
    //subir o nível da arvore apartir do click
    /*$cardsWrapper.addEventListener("click", event => {
        const $origin = event.target;
        console.log($origin.parentNode)

    })*/

    //mais proximo com a class



    $cardsWrapper.addEventListener("click", event => {

        
        qntActiveMemoryCard = $cardsWrapper.querySelectorAll(".memory-card.-active").length;


/*       const $origin = event.target; 
         

        if($origin.closest(".memory-card.-active")){
            qntActiveMemoryCard++;
        }else if($origin.closest(".memory-card")){
            qntActiveMemoryCard--;
        }

        console.log("qnt: ", qntActiveMemoryCard);*/

    })


    
    return $cardsWrapper;
}

