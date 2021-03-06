const gameButton = (function(){

    const module = {};


    module.style = () =>{
        const $head  = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button{
                height: 80px;
                width: 80px;
                border-radius: 50%;
                position: absolute;
                top: 600px; 
                left: 50%;
                transform: translateX(-50%);
                background-color: #2ed573;
                border: 3px solid #fffcee;
                color: #fffcee;
                font-weight: bold;
                text-transform: uppercase;
                cursor:pointer;
                font-size: 1.05em;
                transition: opacity 300ms linear, tranform 300ms linear;
                box-shadow: 0px 4px 8px #3a4042;
            }

            .game-button.-disable{
                opacity: 0;
                transform: translateX(-50%) translateY(-35%) scale(2);
            } 

        `;
        $head.insertBefore($style, null);
    };

    module.handleClick = $component => {
        $component.remove();
        document.querySelector(".transparency-layer").remove();
    }

    module.render = $component => {
        module.style();
        return `
            <button class="game-button">${$component}</button>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };
})();