
//pega a rota para add os itens
const $root = document.querySelector("#root"); 

//cria uma tag article e joga na variavel
const $memoryCard = document.createElement("article");
//cria o html por texto e joga numa variavel
//usando template string para adicionar o texto
const $icon = `<img 
                    class='icon' 
                    src='img/icon-collabcode.png' 
                    alt='Gueio mascote da collabcode' 
                />`
//add uma classe na tag criada na variavel memoryCard
$memoryCard.classList.add("memory-card");

//joga o texto transformando em html
// $memoryCard.innerHTML = $icon;

$root.insertBefore($memoryCard, null);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);


