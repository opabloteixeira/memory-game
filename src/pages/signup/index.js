(function(){

    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("log in", true);
    const $signupButton= flatButton.render("sign up");
    const $logoGame    = logoGame.render();
    const $titleGame   = titleGame.render("welcome");
    
    const $logoWrapper = logoWrapper.render($logoGame, $titleGame);


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);


})()