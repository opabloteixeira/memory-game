(function () {

    const {hash} = window.location;
    
    console.log(hash);
    
    const paths = [];

    paths[""] = login;
    paths["#/login"] = login;
    paths["#/signup"] = signup;
    
    paths[hash]();


    // if (hash === "#/signup")
    // signup();
    
    // if (hash === "#/login")
    // login();



    //console.log(paths);



})();