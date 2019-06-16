const pointBar = (function(){

    const module = {};


    module._style = function(){
        
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .point-bar {
                background-color: #3a4042;
                height: 40px;
                text-align: center;
                display:flex;
                justify-content: space-around;
                
            }
            .point-bar > .number {
                color: #fff;
                line-height: 40px;
                font-family: 'Comfortaa', sans-serif;
            }
            .point-bar > .return {
                color: #fff;
                line-height: 40px;
                font-family: 'Comfortaa', sans-serif;
                cursor: pointer;
                justify-content: space-around;
            }
            .point-bar > .return:hover {
                color: #f25a70;
                
            }
        `;

        $head.insertBefore($style, null);
    }

    module.handleClick = (path) => {
        location.hash = `#/${path}`;
        location.reload(true);
    }

    module.create = (path = "") => {
        module._style();
        return `
            <header class="point-bar">
                <span class="return" onClick={pointBar.handleClick('${path}')}> < Voltar </span>
                <span class="number">0</span>
            </header>
        `;
    };


    return{
        create: module.create,
        handleClick: module.handleClick
    };

})();