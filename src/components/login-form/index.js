const loginForm = (function(){

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
        const $labelUsername = labelGame.render("Username ou e-mail");
        const $inputUsername = inputGame.render({"placeholder":"pablopst@gmail.com"});
    
        const $labelPassword = labelGame.render("Password");
        const $inputPassword = inputGame.render({"placeholder":"********", "type":"password"});
    
        const $signupButton = signupButton.render("login");

        const $linkLogin = linkGame.render({"href": "#" , "content": "Forget password ?"});
        
        return `${ $labelUsername + $inputUsername + 
            $labelPassword + $inputPassword + $linkLogin + $signupButton} `;
    }



    module.render = () => {
        module._style();
        return `<form class="signup-form" action="" method="POST"> ${module._children()} </form>`;
    }




    return {
        render: module.render,
    }




})();