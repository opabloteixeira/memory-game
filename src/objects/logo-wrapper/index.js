const logoWrapper = (function(){

    const module = {};

    module._style = () =>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .logo-wrapper{
                text-align: center;
                transform: translateY(-20%);
            }`;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = (...contents) => {
        module._style();

        return `
            <div class="logo-wrapper">
                ${contents.join("")}
            </div>
        `;
    
    }


    return {
        render: module.render,
    }

})();