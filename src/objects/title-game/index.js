const titleGame = (function(){

    const module = {};


    module._style = () => {

        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .title-game{
                text-transform: uppercase;
                font-size: 24px;
                color: #f25a70;
                letter-spacing: 0.6px;
            }`;

        $head.insertAdjacentElement("beforeend", $style);
    }


    module.render = (content) => {
        module._style();
        return `<h1 class="title-game">${content}</h1>`;
    }




    return {
        render: module.render,
    }

})();