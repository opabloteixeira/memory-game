(function(){

// a api do browser retorna um ELEMENTO sempre
const $root = document.querySelector("#root");

//chama wrapper
const $cardsWrapper    = createCardsWrapper();

//aplica todo o estilo que existe dentro da função e retorna apenas a função de criar cards
const createMemoryCard = memoryCard.create();












const $memoryCard      = createMemoryCard(
    { //retorna um json(objeto) para a função
      //não importa a ordem, pois é um json
        src: "img/icon-collabcode.png",
        alt: "Um ícone do macote da Collabcode"
    }
)

const $memoryCardC = createMemoryCard({
        src: "img/icon-c.png", 
        alt: "Um icone da linguagem de programação C++",
    }
)

const $memoryCardJs = createMemoryCard({
        src: "img/icon-js.png", 
        alt: "Um icone da linguagem de programação Javascript",
    }
)

const $memoryCardJava = createMemoryCard({
        src: "img/icon-java.png", 
        alt: "Um icone da linguagem de programação Java",
    }
)

const $memoryCardWoman = createMemoryCard({
        src: "img/icon-woman.png", 
        alt: "Uma moça programando",
    }
)

const $memoryCardPhp = createMemoryCard({
        src: "img/icon-php.png", 
        alt: "Livro de php",
    }
)

const $memoryCardHead= createMemoryCard({
        src: "img/icon-head.png", 
        alt: "Ícone de uma tag html",
    }
)
const $memoryCardMobile= createMemoryCard({
        src: "img/icon-mobile.png", 
        alt: "Ícone de um celular",
    }
)
const $memoryCardBug= createMemoryCard({
        src: "img/icon-bug.png", 
        alt: "Ícone de uma barata, significa erro",
    }
)
const $memoryCardResponsivo= createMemoryCard({
        src: "img/icon-responsive.png", 
        alt: "Ícone sobre responsividade",
    }
)
const $memoryCardSettings= createMemoryCard({
        src: "img/icon-settings.png", 
        alt: "Ícone sobre comfigurações",
    }
)




//$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
//$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);

//insere a point bar
const $insertPointBar = pointBar.create(); 
$root.insertAdjacentHTML("beforeend", $insertPointBar);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

})();

