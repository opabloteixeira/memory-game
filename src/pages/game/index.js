// a api do browser retorna um ELEMENTO sempre
const $root = document.querySelector("#root");

const $cardsWrapper    = createCardsWrapper();

const $memoryCard      = createMemoryCard(
    { //retorna um json(objeto) para a função
        src: "img/icon-collabcode.png",
        alt: "Um ícone do macote da Collabcode"
    }
)

const $memoryCardC = createMemoryCard(
    {
        src: "img/icon-c.png", 
        alt: "Um icone da linguagem de programação C++",
        className: "-front"
    }
)

const $memoryCardJS = createMemoryCard(
    {
        src: "img/icon-js.png", 
        alt: "Um icone da linguagem de programação Javascript",
        className: "-front"
    }
)

const $memoryCardJava = createMemoryCard(
    {
        src: "img/icon-java.png", 
        alt: "Um icone da linguagem de programação Java",
        className: "-front"
    }
)




$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);


$root.insertAdjacentElement("beforeend", $cardsWrapper);



