const gridSizeButton = document.querySelector('.grid-size-btn');
const gridContainer = document.querySelector('.container');

function generateGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.height = "600px"
    gridContainer.style.width = "600px"
    gridContainer.style.border = "1px solid"
    for (let i = 0; i < size * size; i++) {
        const gridChild = document.createElement('div');
        gridChild.classList = "grid-child"
        gridChild.style.setProperty('width', `calc(100% / ${size})`);
        gridChild.style.setProperty('height', `calc(100% / ${size})`);
        gridChild.style.border = "1px solid"
        gridChild.style.border = "1px solid"
        gridContainer.appendChild(gridChild);
    }
    return gridContainer;
}

function getRandomColor() {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return color;
}

gridSizeButton.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Enter the size of the grid"));
    while (gridSize < 1 || gridSize > 100) {
        gridSize = parseInt(prompt("Please enter a value between 1 and 100"));
    }
    let updatedGridContainer = generateGrid(gridSize);
    let children = updatedGridContainer.childNodes;
    children.forEach(child => {
        child.addEventListener('mouseenter', () => {
            let color = getRandomColor();
            child.style.setProperty('--td-background-color', color);
        })
    })
})