var choosenShapeID;
// TODO
var choosenRootShapeID = 0; // Currently point to adudumodel body
shapes = {}
var lastViewAngle = 0
var identityMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
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
var currentTextureMode = TextureMode.NONE

function redrawAll(){
    if(currentTextureMode == TextureMode.NONE){
        initAll()
        shapes[choosenRootShapeID].draw(identityMatrix)
    }else if(currentTextureMode == TextureMode.IMAGE){
        listVertices = []
        shapes[choosenRootShapeID].traverse(identityMatrix)
        initImageAll()
    }else if(currentTextureMode == TextureMode.ENVIRONMENT){
        listVertices = []
        shapes[choosenRootShapeID].traverse(identityMatrix)
        initEnvironmentAll()
    }else if(currentTextureMode == TextureMode.BUMP){
        listVertices = []
        shapes[choosenRootShapeID].traverse(identityMatrix)
        initBumpAll()
    }
}

function redrawSingle(){
    if(currentTextureMode == TextureMode.NONE){
        initSingle()
        shapes[choosenShapeID].drawSingle(choosenShapeID,identityMatrix)
    }else if(currentTextureMode == TextureMode.IMAGE){
        listVerticesSingle = []
        listVerticesSingle = shapes[choosenShapeID].getListVerticesToDraw()
        initImageSingle()
    }else if(currentTextureMode == TextureMode.ENVIRONMENT){
        listVerticesSingle = []
        listVerticesSingle = shapes[choosenShapeID].getListVerticesToDraw()
        initEnvironmentSingle()
    }else if(currentTextureMode == TextureMode.BUMP){
        listVerticesSingle = []
        listVerticesSingle = shapes[choosenShapeID].getListVerticesToDraw()
        initBumpSingle()
    }
}


function redraw() {
    redrawAll()
    redrawSingle()
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

function updateTranslationSingle(type,displacement){
    displacement /= 100;
    shapes[choosenShapeID].translateSingle(type,displacement)
    redraw()
}

function updateScalingSingle(type,ratio){
    ratio /= 500
    shapes[choosenShapeID].scaleSingle(type,ratio)
    redraw()
}

function updateRotationSingle(type,angle){
    shapes[choosenShapeID].rotateSingle(type,angle)
    redraw()
}

function updateChoosenShape(id){
    choosenShapeID = id
    redraw()
}

function addComponent(){
    let cubeAdded = new Shape(defaultCube['vertices'], defaultCube['normal'], defaultCube['color'], gl.TRIANGLE_FAN, 'cube')
    cubeAdded.nameShape += cubeAdded.id
    shapes[choosenShapeID].addChild(cubeAdded)
    choosenShapeID = cubeAdded.id
    shapes[choosenShapeID] = cubeAdded
    changeHierarchy(choosenRootShapeID)
    redraw()
}

var sliderCamera = document.getElementById("sliderRotationCamera")
var sliderZoom = document.getElementById("sliderZoomCamera")
var labelRotationCamera = document.getElementById('outputRotationCamera')
var labelZoomCamera = document.getElementById('outputZoomCamera')

sliderCamera.addEventListener("input", function (e) {
    globalViewMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    
    lastViewAngle = sliderCamera.value
    let translationMatrix = getTranslationMatrix(-1*(0.3-currentRadius)*Math.cos(toRad(lastViewAngle-90)),0,(0.3-currentRadius)*Math.sin(toRad(lastViewAngle-90)))
    globalViewMatrix = multiplyMatrix(globalViewMatrix, translationMatrix)

    let rotationViewMatrix = getRotationYMatrix(lastViewAngle)
    globalViewMatrix = multiplyMatrix(globalViewMatrix, rotationViewMatrix)


    labelRotationCamera.innerHTML = sliderCamera.value.toString() + "°"
    redraw()
})

sliderZoom.addEventListener("input", function (e) {
    currentRadius = 0.3 - 0.3 * sliderZoom.value / 100

    globalViewMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

    let translationMatrix = getTranslationMatrix(-1*(0.3-currentRadius)*Math.cos(toRad(lastViewAngle-90)),0,(0.3-currentRadius)*Math.sin(toRad(lastViewAngle-90)))
    globalViewMatrix = multiplyMatrix(globalViewMatrix, translationMatrix)

    let rotationViewMatrix = getRotationYMatrix(lastViewAngle)
    globalViewMatrix = multiplyMatrix(globalViewMatrix, rotationViewMatrix)


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
    choosenRootShapeID = 0;
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
    console.log(shapes[choosenRootShapeID]);
    let json = JSON.stringify(shapes[choosenRootShapeID]);
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
    Shape.ID = 0;
    reader.onload = function (event) {
        let shapesInput = JSON.parse(event.target.result);
        let parentShape = 0;
        let childShape;
        const queue = [[shapesInput, parentShape]];

        while (queue.length > 0) {
            const current = queue.shift();
            if (current === null) continue;

            if (parentShape === 0) {
                parentShape = new Shape(current[0].vertices, current[0].normal, current[0].color, current[0].webGLShape, current[0].nameShape);
                shapes[parentShape.id] = parentShape;
                childShape = parentShape;
            } else {
                parentShape = current[1];
                childShape = new Shape(current[0].vertices, current[0].normal, current[0].color, current[0].webGLShape, current[0].nameShape);
                parentShape.addChild(childShape);
                shapes[childShape.id] = childShape;
            }

            childShape.curAngleX = current[0].curAngleX;
            childShape.curAngleY = current[0].curAngleY;
            childShape.curAngleZ = current[0].curAngleZ;
            childShape.translateX = current[0].translateX;
            childShape.translateY = current[0].translateY;
            childShape.translateZ = current[0].translateZ;
            childShape.scaleX = current[0].scaleX;
            childShape.scaleY = current[0].scaleY;
            childShape.scaleZ = current[0].scaleZ;

            childShape.curAngleXSingle = current[0].curAngleXSingle;
            childShape.curAngleYSingle = current[0].curAngleYSingle;
            childShape.curAngleZSingle = current[0].curAngleZSingle;
            childShape.translateXSingle = current[0].translateXSingle;
            childShape.translateYSingle = current[0].translateYSingle;
            childShape.translateZSingle= current[0].translateZSingle;
            childShape.scaleXSingle = current[0].scaleXSingle;
            childShape.scaleYSingle = current[0].scaleYSingle;
            childShape.scaleZSingle = current[0].scaleZSingle;

            for (const child of current[0].childShape) {
                queue.push([child, childShape]);
            }
        }
        choosenRootShapeID = 0;
        choosenShapeID = 0;
        changeHierarchy(0);
        objectPicker.value = "";
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

function changeHierarchy(rootShapeId){
    let hierarchy = []
    shapes[rootShapeId].getHierarchy(0,hierarchy)

    renderHierarchy(hierarchy)
}

function updateTextureChosen(){
    currentTextureMode = parseInt(document.getElementById('texturelists').value)
    redraw()
}

// Dummy data
function initShapes(){
    Shape.ID = 0
    shapes = {}
    initModels()

    for (let i = 0; i < modelIds.length; i++) {
        changeHierarchy(modelIds[i])
    }

    choosenShapeID = modelIds.adudu;
    choosenRootShapeID = modelIds.adudu;
    changeHierarchy(choosenShapeID);
    redraw()
}

initShapes();
loadOptions() 
// TODO : add global slider variable
// resetObjectLabels();