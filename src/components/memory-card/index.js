
function createMemoryCard(){

    const $memoryCard = `
        <article class="memory-card">
            <img 
                class='icon' 
                src='img/icon-collabcode.png' 
                alt='Gueio mascote da collabcode'
                onClick="handleClick()"
            />
        </article>`

    return $memoryCard;
}



function createMemoryCardFront(){
    const $memoryCardFront = `
        <article class="memory-card -front">
            <img 
                class='icon' 
                src='img/icon-c.png' 
                alt='Icone da linguagem de programação c++'
                onClick="handleClick()"
            />
        </article>`

    return $memoryCardFront;
}


function handleClick(){
    
}