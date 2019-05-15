const eyeGame = (function() {

    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-game{
                display: block;
                text-indent: -9999px;
                background-image: url(/img/eye.png);
                background-repeat: no-repeat;
                background-position: center;
                opacity: 0.6;
                height: 15px;
                width: 24px;
            }
            .-active{
                opacity: 1;
            } 
        `

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = () => {
        module._style();
        return `<label class="eye-game">Mostrar senha</label>`;
    }

    return {
        render: module.render
    }; 

})();