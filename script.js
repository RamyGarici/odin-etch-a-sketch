const container = document.getElementsByClassName("main-container")[0]

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}



function reset(){

const cells = document.querySelectorAll(".cell")
cells.forEach(cell => {cell.style.backgroundColor = "black";
    
});

}




for(let i=0; i<16*16;i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener('mouseenter',()=>{
        cell.style.backgroundColor= getRandomColor()
    })
    container.appendChild(cell);
}


