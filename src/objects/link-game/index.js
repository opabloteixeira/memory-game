const linkGame = (function(){

    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .link-game{
                color: #3a4042;
                font-size: 14px;
                opacity: 0.7;
                text-decoration: none;
                display: block;
                margin: 40px 0 60px 0;
                text-align: right;
            }
        `; 

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = ({href, content}) => {
        module._style();

        return `<a class="link-game" href=${href}>${content}</a>`;
    };


    return {
        render: module.render,
    }

})();