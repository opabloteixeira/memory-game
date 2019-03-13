const layerStart = (function(){

    const module = {};


    module.handleClick = $component => {
        //const $gameButton        = $component.querySelector(".game-button");
        //const $transparencyLayer = $component.querySelector(".transparency-layer");

        //$gameButton.classList.add("-disable");
        //$transparencyLayer.classList.add("-disable");

        const $children = $component.querySelectorAll("*");

        $children.forEach( $item => $item.classList.add("-disable"));
    };

    
    module.handleTransitionEnd = (event, $component) => {
        if (event.target.classList.contains("transparency-layer")) {
            $component.remove();
        }
    }

    module.render = title => {
        const $transparencyLayer = transparencyLayer.render();
        const $gameButton        = gameButton.render(title);

        return `
            <div onClick= "layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
                ${$transparencyLayer}
                ${$gameButton}
            <div>
        `;
    }


    return{
        render: module.render,
        handleClick: module.handleClick,
        handleTransitionEnd: module.handleTransitionEnd,
    }

})();