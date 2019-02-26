// a api do browser retorna um ELEMENTO sempre
const $root = document.querySelector("#root");

const $cardsWrapper    = createCardsWrapper();

const $memoryCard      = createMemoryCard(
    "img/icon-collabcode.png",
    "Gueio mascote da collabcode"
)

const $memoryCardFront = createMemoryCard(
    "img/icon-c.png", 
    "Um icone da linguagem de programação C++",
    "-front"
)




$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);


$root.insertAdjacentElement("beforeend", $cardsWrapper);



