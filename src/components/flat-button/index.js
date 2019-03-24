const flatButton = (function(){

    const module = {};

    module._id = 0;

    module._style = (active) => {

        const $head  = document.querySelector("head");
        const $style = document.createElement("style");


        $style.textContent = `
            .flat-button-${module._id} {
                background-color: ${ active ? "#f25a70" : "#eae6da"};
                color: #fff;
                display: inline-block;
                font-size: 24px;
                font-weight: bold;
                width: 50%;
                height: 176px;
                padding-top: 60px;
                text-align: center;
                text-transform: uppercase;
                border: none;
                cursor: pointer;
            }
        `;


        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = (content = "", active = false) => {
        module._id++;
        module._style(active);

        return `<a src="#" class="flat-button-${module._id}">${content}</a>`;
    }

    return{
        render: module.render,
    }

})();