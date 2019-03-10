const layerStart = (function(){

    const module = {};


    module.handleClick = $component => $component.remove();

    module.render = title => {

        const $transparencyLayer = transparencyLayer.render();
        const $gameButton = gameButton.render(title);

        return `
            <div onClick="layerStart.handleClick(this)">
                ${$transparencyLayer}
                ${$gameButton}
            <div>
        `;

    }



    return{
        render: module.render,
        handleClick: module.handleClick
    }




})();