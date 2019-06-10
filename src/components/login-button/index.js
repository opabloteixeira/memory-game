const loginButton = (function(){

const module = {}

module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .login-button {
            height: 48px;
            border-radius: 24px;
            width: 100%;
            color: #fff;
            background-color: #f25a70;
            text-transform: uppercase;
            cursor: pointer;
        }

        .input-game + .login-button {
            margin-top: 25px;
        }
    
    `;


    $head.insertAdjacentElement("beforeend", $style);
}

module.handleClick = (event, path) => {

    event.preventDefault();
    location.hash = `#/${path}`;
    location.reload(true);
}

module.render = ({content = "", path= ""}) => {
    module._style();
    return `<input 
                class="login-button" 
                type="submit" 
                value="${content}"
                onclick="loginButton.handleClick(event, '${path}')">`;
}

return {
    render: module.render,
    handleClick: module.handleClick
}

})();