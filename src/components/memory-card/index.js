
function createMemoryCard(){

    const $memoryCard = document.createElement("article");


    const $iconCollab = `<img 
                        class='icon' 
                        src='img/icon-collabcode.png' 
                        alt='Gueio mascote da collabcode' 
    />`;

    $memoryCard.classList.add("memory-card"); 
    $wrapCards.insertBefore($memoryCard, null);


    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}


function createMemoryCardFront(){
    //cria uma tag article e joga na variavel
    // const $memoryCard      = document.createElement("article");
    const $memoryCardFront = document.createElement("article");



    const $iconC = `<img 
                        class='icon' 
                        src='img/icon-c.png' 
                        alt='icone de um livro de c++' 
                    />`;
                    
    //add uma classe na tag criada na variavel memoryCard
    // $memoryCard.classList.add("memory-card");
    // $root.insertBefore($memoryCard, null);



    $memoryCardFront.classList.add("memory-card");
    $memoryCardFront.classList.add("-front");
    $wrapCards.insertBefore($memoryCardFront, null);


    //joga o texto transformando em html
    // $memoryCard.innerHTML = $icon;


    // $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
    $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);

}