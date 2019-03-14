(function(){

    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("log in", true);
    const $signupButton = flatButton.render("sign up");



    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);


})()