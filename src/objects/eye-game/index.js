const eyeGame = (function() {

    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-game{
                display: block;
                float: right;
                margin-right: 5px;
                transform: translateY(-210%);
                text-indent: -9999px;
                background-image: url(/img/eye.png);
                background-repeat: no-repeat;
                background-position: center;
                opacity: 0.5;
                transition: opacity 200ms linear;
                height: 15px;
                width: 24px;
                cursor: pointer;
            }
            .-active{
                opacity: 1;
            } 
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.handleClick = function(){
    
        const attrFor = this.getAttribute("for");
        const input = document.querySelector(`#${attrFor}`);

        if (input.getAttribute("type") === "password") {
            this.classList.add("-active");
            input.setAttribute("type", "text");
        }else{
            this.classList.remove("-active");
            input.setAttribute("type", "password");
        }

    }

    module.render = ({attrFor = ""}) => {
        module._style();
        return `<label for="${attrFor}" 
                        onclick="eyeGame.handleClick.bind(this)()" 
                        class="eye-game">Mostrar senha</label>`;
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }; 

})();