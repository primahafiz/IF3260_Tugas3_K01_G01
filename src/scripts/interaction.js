var choosenShapeID = 0
shapes = {}
var lastViewAngle = 0
var viewMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
var currentRadius = 0.3;
var labelTranslationX =  document.getElementById('outputTranslationX')
var labelTranslationY =  document.getElementById('outputTranslationY')
var labelTranslationZ =  document.getElementById('outputTranslationZ')
var labelScalingX = document.getElementById('outputSx')
var labelScalingY = document.getElementById('outputSy')
var labelScalingZ = document.getElementById('outputSz')
var labelRotationX =  document.getElementById('outputRotationX')
var labelRotationY =  document.getElementById('outputRotationY')
var labelRotationZ =  document.getElementById('outputRotationZ')

function redraw() {
    for (let id in shapes) {
        shapes[id].materialize()
    }
}

function updateTranslation(type,displacement){
    displacement /= 100;
    shapes[choosenShapeID].translate(type,displacement)
    redraw()
}

function updateScaling(type,ratio){
    ratio /= 500
    shapes[choosenShapeID].scale(type,ratio)
    redraw()
}

function updateRotation(type,angle){
    shapes[choosenShapeID].rotate(type,angle)
    redraw()
}

var sliderCamera = document.getElementById("sliderRotationCamera")
var sliderZoom = document.getElementById("sliderZoomCamera")
var labelRotationCamera = document.getElementById('outputRotationCamera')
var labelZoomCamera = document.getElementById('outputZoomCamera')

sliderCamera.addEventListener("input", function (e) {
    viewMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    
    lastViewAngle = sliderCamera.value
    let translationMatrix = getTranslationMatrix(-1*(0.3-currentRadius)*Math.cos(toRad(lastViewAngle-90)),0,(0.3-currentRadius)*Math.sin(toRad(lastViewAngle-90)))
    viewMatrix = multiplyMatrix(viewMatrix, translationMatrix)

    let rotationViewMatrix = getRotationYMatrix(lastViewAngle)
    viewMatrix = multiplyMatrix(viewMatrix, rotationViewMatrix)


    labelRotationCamera.innerHTML = sliderCamera.value.toString() + "°"
    redraw()
})

sliderZoom.addEventListener("input", function (e) {
    currentRadius = 0.3 - 0.3 * sliderZoom.value / 100

    viewMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

    let translationMatrix = getTranslationMatrix(-1*(0.3-currentRadius)*Math.cos(toRad(lastViewAngle-90)),0,(0.3-currentRadius)*Math.sin(toRad(lastViewAngle-90)))
    viewMatrix = multiplyMatrix(viewMatrix, translationMatrix)

    let rotationViewMatrix = getRotationYMatrix(lastViewAngle)
    viewMatrix = multiplyMatrix(viewMatrix, rotationViewMatrix)


    redraw()
})

var shadingCheckBox = document.getElementById("isShading")
shadingCheckBox.addEventListener("change", function (e) {
    if (this.checked) {
        shading = true;
    } else {
        shading = false;
    }
    redraw()
})

var resetBtn = document.getElementById("resetBtn")
resetBtn.addEventListener("click", function (e) {
    viewMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    projectionPicker.selectedIndex = 0;
    choosenShapeID = 0;
    objectPicker.selectedIndex = 0;
    currentRadius = 0.5;
    initShapes()
    changeToOrtho()
    resetObjectLabels()
    sliderCamera.value = 0
    sliderZoom.value = 0
    document.getElementById('outputRotationCamera').innerHTML = ""
    redraw()
})

// save
var saveBtn = document.getElementById("saveBtn")
saveBtn.addEventListener("click", function (event) {
    let savedShapes = [];
    for (let i in shapes) {
        let shape = shapes[i];
        let savedShape = {
            "id": shape.id,
            "vertices": shape.getTransformedVertices(),
            "normal": shape.getTransformedNormal(),
            "color": shape.color,
            "webGLShape": shape.webGLShape
        };
        savedShapes.push(savedShape);
    }
    let json = JSON.stringify(savedShapes);
    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = "drawing.json";
    a.click();
    window.URL.revokeObjectURL(url);
});

var loadBtn = document.getElementById("loadBtn")
loadBtn.addEventListener("click", function (event) {
    let file = document.getElementById("inputFile").files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
        let shapesInput = JSON.parse(event.target.result);
        for (let i = 0; i < shapesInput.length; i++) {
            let center = getCenterPoint(shapesInput[i].vertices)
            for (let j = 0; j < shapesInput[i].vertices.length; j += 3) {
                shapesInput[i].vertices[j] -= center[0]
                shapesInput[i].vertices[j + 1] -= center[1]
                shapesInput[i].vertices[j + 2] -= center[2]
            }
            let hollowShape = new Shape(shapesInput[i].vertices, shapesInput[i].normal, shapesInput[i].color, shapesInput[i].webGLShape)
            shapes[shapesInput[i].id] = hollowShape
            hollowShape.baseTranslateX = center[0]
            hollowShape.baseTranslateY = center[1]
            hollowShape.baseTranslateZ = center[2]
            hollowShape.setId(shapesInput[i].id)
        }
        redraw();
    };
    try {
        reader.readAsText(file);
        shapes = {};
    }
    catch (err) {
        alert("No file selected");
    }
});

function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function () {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});

// Dummy data
function initShapes(){
    shapes = {}
    // triplePrismShape = new Shape(triplePrism, normalTriplePrism, [0.2, 1, 0.2], gl.TRIANGLE_FAN)
    // triplePrismShape.setId(0);
    // shapes[triplePrismShape.id] = triplePrismShape
    // boxedBoxShape = new Shape(boxedBoxVertices, boxedBoxNormals, [0.2, 1, 0.2], gl.TRIANGLE_FAN)
    // boxedBoxShape.setId(1);
    // boxedBoxShape.baseTranslateX = 0.7
    // shapes[boxedBoxShape.id] = boxedBoxShape
    trianglePrismShape = new Shape(trianglePrism, normalTrianglePrism, [0.2, 1, 0.2], gl.TRIANGLE_FAN)
    trianglePrismShape.setId(0);
    // triplePrismShape.baseTranslateX = -0.7
    shapes[trianglePrismShape.id] = trianglePrismShape;
    changeToOrtho()
    redraw()
}

initShapes();
// TODO : add global slider variable
// resetObjectLabels();