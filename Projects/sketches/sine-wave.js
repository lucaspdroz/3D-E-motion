const obj = {
    speed: 1,
    shapeWith: 10,
    rings: 10,
    // FullShape (circle =10),(hexagon =60), (square =90),(triangle=120)
    fullShape: 120,
    // RorateAngle (default =  0)
    rotateAngle: 0,
    rotateItem: false,
    rotateSpeed: 10,
    isDebugMode: true
}

const canvas_config = {
    bg: 30,
    rotationX: 40,
    stroke_color: [120, 100, 200],
}

const debug_config = {
    debug_stroke_color: [10, 120, 152]
}

const { bg, rotationX, stroke_color } = canvas_config
const { debug_stroke_color } = debug_config
const { speed, shapeWith, rings, fullShape, rotateAngle, rotateItem, rotateSpeed, isDebugMode } = obj

function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL)
    angleMode(DEGREES)
    camera(0, -90, 800, 0, 0, 0, 0, 1, 0);
}

function draw() {
    configItem(bg, rotationX, stroke_color)
    drawVertex(speed, shapeWith, rings, fullShape, rotateAngle, rotateItem, rotateSpeed)
    DubugMode(isDebugMode, debug_stroke_color)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function configItem(config_bg, rotationX, stroke_color) {
    background(config_bg)
    orbitControl(1, 1, 0.1);
    rotateX(rotationX)
    noFill()
    stroke(stroke_color)
}

function drawVertex(speed, shapeWith, rings, fullShape, rotateAngle, rotateItem, rotateSpeed) {
    for (let i = 0; i < rings; i++) {
        beginShape()

        // Animate the rotation
        if (rotateItem) {
            rotate(frameCount / rotateSpeed)
        }
        // Rotate the shape
        rotate(rotateAngle)

        for (let j = 0; j < 360; j += fullShape) {
            let rad = i * shapeWith
            let x = rad * cos(j)
            let y = rad * sin(j)
            let z = sin(frameCount * speed + i * 10) * 50
            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}

function DubugMode(isDebugMode, color) {
    if (isDebugMode) {
        stroke(color)
        debugMode();
        // Space key
        if (keyIsDown(32)) {
            noDebugMode();
        }
    }
}