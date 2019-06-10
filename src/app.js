(function () {

    const {hash} = window.location;
    
    console.log(hash);
    
    const paths = [];

    
    paths[""] = login;
    paths["#/login"] = login;
    paths["#/signup"] = signup;
    paths["#/game"] = game;
    paths["#/404"] = status404;

    paths[hash] ? paths[hash]() : paths["#/404"]()
    
/*     if (paths[hash] === undefined) {
        paths["#/404"]()

        return
    }
     */
/*     paths[hash](); */
    


    // if (hash === "#/signup")
    // signup();
    
    // if (hash === "#/login")
    // login();



    //console.log(paths);



})();