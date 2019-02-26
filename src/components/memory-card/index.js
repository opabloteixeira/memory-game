function memoryCard(){

    const $head  = document.querySelector("head");
    const $style = document.createElement("style"); 

    $style.textContent = `

        .memory-card{
            width: 155px;
            height: 155px;
            position: relative;

        }


        .memory-card.-active .card{
            display: none;
        }
        
        .memory-card.-active .card.-front{
            display: flex;
        }

        .memory-card .card{
            width:  100%;
            height: 100%;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            cursor: pointer;
            position: absolute;
 
        }
        .memory-card .card.-front{
            background-color: #fff;

        }

        .memory-card .card.-front::before{
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            position: absolute;
            border-radius: 50%;

        }

        .memory-card .card > .icon{
            width: 100px;
            height: 100px;
        /*	position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        */
        }

        .memory-card .card.-front > .icon{
            transform: translateY(-12px)
        }

    `;

    $head.insertBefore($style, null);





    return ({src, alt}) => `
        <div class="memory-card" onClick="handleClick(this)">
            <article class="card -front">
                <img 
                    class='icon' 
                    src="${src}" 
                    alt="${alt}" 
                    onClick="handleClick()"
                />
            </article>
            <article class="card">
                <img 
                    class='icon' 
                    src="img/icon-collabcode.png" 
                    alt="Mascote da collabcode" 
                    onClick="handleClick()"
                />
            </article>
        </div>
    `; 
}
const handleClick = $component => {
    $component.classList.toggle("-active");
}