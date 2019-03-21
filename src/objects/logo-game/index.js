const logoGame = (function(){

    const module = {};

    module._style = () =>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .logo-game{
                display: inline-block;
                width: 175px;
                background-color: #fff;
                border-radius: 50%;
                border: 40px solid #fff;
            }
            .logo-game > .logo{
                width: 175px;
            }
            
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = () => {
        module._style();
        return `
            <figure class="logo-game">
                <img class="logo" src='/img/icon-collabcode.png'>
            </figure>
        `;
    };


    return {
        render: module.render,
    }

})();