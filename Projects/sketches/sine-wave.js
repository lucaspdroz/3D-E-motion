const obj = {
    speed: 1,
    shapeWith: 10,
    rings: 10,
    // FullShape (circle =10),(hexagon =60), (square =90),(triangle=120)
    fullShape: 60,
    // RorateAngle (default =  0)
    rotateAngle: 0,
    rotateItem: false,
    rotateSpeed: 10,
    isDebugMode: true
}

const { speed, shapeWith, rings, fullShape, rotateAngle, rotateItem, rotateSpeed, isDebugMode } = obj

function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL)
    angleMode(DEGREES)
    camera(0, -90, 800, 0, 0, 0, 0, 1, 0);
}

function draw() {
    background(30)
    orbitControl(1, 1, 0.1);
    rotateX(40)
    noFill()
    stroke(255)

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

    // DebugMode
    if (isDebugMode) {
        stroke(255, 0, 152)
        debugMode();

        // Space
        if (keyIsDown(32)) {
            noDebugMode();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}