const signupForm = (function(){

    const module = {}


    module._style = () =>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .signup-form {
                padding: 0 35px 40px ;
            }
        `;


        $head.insertAdjacentElement("beforeend", $style);
    }



    module._children = () => {
        const $labelEmail   = labelGame.render("E-mail");
        const $inputEmail   = inputGame.render({"placeholder":"seuemail@gmail.com", "type":"email"});
    
        const $labelUsername= labelGame.render("Username");
        const $inputUsername= inputGame.render({"placeholder":"pablo85"});
    
        const $labelPassword= labelGame.render("Password");
        const $inputPassword= inputGame.render({"placeholder":"********", "type":"password"});
    
        const $labelConfirmPassword = labelGame.render("Confirm Password");
        const $inputConfirmPassword = inputGame.render({"placeholder":"********", "type":"password"});

        const $loginButton = loginButton.render({content: "signup", path: "login"});

        return `${ $labelUsername + $inputUsername + $labelEmail + $inputEmail 
            + $labelPassword + $inputPassword + $labelConfirmPassword 
            + $inputConfirmPassword + $loginButton}`;
    }



    module.render = () => {
        module._style();
        return `<form class="signup-form" action="" method="POST"> ${module._children()} </form>`;
    }




    return {
        render: module.render,
    }




})();