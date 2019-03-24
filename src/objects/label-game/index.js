const labelGame = (function(){

    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .label-game {
                color: #3a4042;
                font-size: 16px;
            }
        
        `;


        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = (content) => {
        module._style();
        return `<label class="label-game"> ${content} </label>`;
    }


    return {
        render: module.render,
    }



})();