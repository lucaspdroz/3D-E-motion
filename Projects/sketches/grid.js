let cols = 0;
let rows = 0;
const w = 40;
let grid = []

function setup() {
    createCanvas(displayWidth, displayHeight)

    cols = floor(width / w)
    rows = floor(height / w)

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cell = new Cell(i, j)
            grid.push(cell)
        }
    }
}

function draw() {
    background(15)
    for (let i = 0; i < grid.length; i++) {
        grid[i].show()
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;

    this.show = function () {
        let x = this.i * w
        let y = this.j * w
        stroke(30)
        noFill()
        rect(x, y, w, w)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}