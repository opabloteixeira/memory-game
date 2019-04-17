(function(){

    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("log in", true);
    const $signupButton= flatButton.render("sign up");
    
    const $logoGame    = logoGame.render();
    const $titleGame   = titleGame.render("hello");
    const $logoWrapper = logoWrapper.render($logoGame, $titleGame);
    const $loginForm   = loginForm.render();


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $loginForm);

})(); 