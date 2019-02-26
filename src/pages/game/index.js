// a api do browser retorna um ELEMENTO sempre
const $root = document.querySelector("#root");

const $cardsWrapper    = createCardsWrapper();

//aplica todo o estilo que existe dentro da função e retorna apenas a função de criar cards
const createMemoryCard = memoryCard();

const $memoryCard      = createMemoryCard(
    { //retorna um json(objeto) para a função
      //não importa a ordem, pois é um json
        src: "img/icon-collabcode.png",
        alt: "Um ícone do macote da Collabcode"
    }
)

const $memoryCardC = createMemoryCard(
    {
        src: "img/icon-c.png", 
        alt: "Um icone da linguagem de programação C++",
    }
)

const $memoryCardJS = createMemoryCard(
    {
        src: "img/icon-js.png", 
        alt: "Um icone da linguagem de programação Javascript",
    }
)

const $memoryCardJava = createMemoryCard(
    {
        src: "img/icon-java.png", 
        alt: "Um icone da linguagem de programação Java",
    }
)

const $memoryCardWoman = createMemoryCard(
    {
        src: "img/icon-woman.png", 
        alt: "Uma moça programando",
    }
)

const $memoryCardPhp = createMemoryCard(
    {
        src: "img/icon-php.png", 
        alt: "Livro de php",
    }
)




$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);


$root.insertAdjacentElement("beforeend", $cardsWrapper);



