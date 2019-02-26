function memoryCard(){

    const $head  = document.querySelector("head");
    const $style = document.createElement("style"); 

    $style.textContent = `
        .memory-card{
            width: 155px;
            height: 155px;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            position: relative;
            cursor: pointer;
        }
        .memory-card.-front{
            background-color: #fff;
        }

        .memory-card.-front::before{
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            position: absolute;
            border-radius: 50%;

        }

        .memory-card > .icon{
            width: 100px;
            height: 100px;
        /*	position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        */
        }

        .memory-card.-front > .icon{
            transform: translateY(-12px)
        }

    `;

    $head.insertBefore($style, null);





    return ({src, alt, className}) => `
        <article class="memory-card ${className}">
            <img 
                class='icon' 
                src="${src}" 
                alt="${alt}" 
                onClick="handleClick()"
            />
        </article>
    `; 
}
const handleClick = () => console.log("clicou");