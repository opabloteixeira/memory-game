
const createMemoryCard = ({src, alt, className}) => `
    <article class="memory-card ${className}">
        <img 
            class='icon' 
            src="${src}" 
            alt="${alt}" 
            onClick="handleClick()"
        />
    </article>
`;

const handleClick = () => console.log("clicou");