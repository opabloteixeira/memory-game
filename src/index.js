
//pega a rota para add os itens
const $root = document.querySelector("#root"); 

//cria uma tag article e joga na variavel
const $memoryCard      = document.createElement("article");
const $memoryCardFront = document.createElement("article");
//cria o html por texto e joga numa variavel
//usando template string para adicionar o texto
const $iconCollab = `<img 
                    class='icon' 
                    src='img/icon-collabcode.png' 
                    alt='Gueio mascote da collabcode' 
                />`;

const $iconC = `<img 
                    class='icon' 
                    src='img/icon-c.png' 
                    alt='Gueio mascote da collabcode' 
                />`;
                
//add uma classe na tag criada na variavel memoryCard
$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);



$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);


//joga o texto transformando em html
// $memoryCard.innerHTML = $icon;


$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);


