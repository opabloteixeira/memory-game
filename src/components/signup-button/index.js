const signupButton = (function(){

const module = {}

module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .signup-button {
            height: 48px;
            border-radius: 24px;
            width: 100%;
            color: #fff;
            background-color: #f25a70;
            text-transform: uppercase;
            cursor: pointer;
        }

        .input-game + .signup-button {
            margin-top: 25px;
        }
    
    `;


    $head.insertAdjacentElement("beforeend", $style);
}


module.render = (content) => {
    module._style();
    return `<input class="signup-button" type="submit" value=${content}>`
}

return {
    render: module.render,
}

})();