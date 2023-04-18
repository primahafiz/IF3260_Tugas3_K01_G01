var choosenShapeID = 0
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

// ROOT SHAPE ID
var aduduShapeId;

function redrawAll(){
    if(currentTextureMode == TextureMode.NONE){
        initAll()
        shapes[aduduShapeId].draw(identityMatrix)
    }else if(currentTextureMode == TextureMode.IMAGE){
        listVertices = []
        shapes[aduduShapeId].traverse(identityMatrix)
        initImageAll()
    }else if(currentTextureMode == TextureMode.ENVIRONMENT){
        listVertices = []
        shapes[aduduShapeId].traverse(identityMatrix)
        initEnvironmentAll()
    }
}

function redrawSingle(){
    if(currentTextureMode == TextureMode.NONE){
        initSingle()
        shapes[aduduShapeId].drawSingle(choosenShapeID,identityMatrix)
    }else if(currentTextureMode == TextureMode.IMAGE){
        listVerticesSingle = []
        listVerticesSingle = shapes[choosenShapeID].getListVerticesToDraw()
        initImageSingle()
    }else if(currentTextureMode == TextureMode.ENVIRONMENT){
        // TODO
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
    console.log(id)
    choosenShapeID = id
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

function initAduduShape(){
    let bodyShape = new Shape(aduduModel['body']['vertices'],aduduModel['body']['normal'],aduduModel['body']['color'],gl.TRIANGLE_FAN,'body')
    let headShape = new Shape(aduduModel['head']['vertices'],aduduModel['head']['normal'],aduduModel['head']['color'],gl.TRIANGLE_FAN,'head')
    let torsoLeftShape = new Shape(aduduModel['torsoLeft']['vertices'],aduduModel['torsoLeft']['normal'],aduduModel['torsoLeft']['color'],gl.TRIANGLE_FAN,'torsoLeft')
    let torsoRightShape = new Shape(aduduModel['torsoRight']['vertices'],aduduModel['torsoRight']['normal'],aduduModel['torsoRight']['color'],gl.TRIANGLE_FAN,'torsoRight')
    let footLeftShape = new Shape(aduduModel['footLeft']['vertices'],aduduModel['footLeft']['normal'],aduduModel['footLeft']['color'],gl.TRIANGLE_FAN,'footLeft')
    let footRightShape = new Shape(aduduModel['footRight']['vertices'],aduduModel['footRight']['normal'],aduduModel['footRight']['color'],gl.TRIANGLE_FAN,'footRight')
    let antennaLeftShape = new Shape(aduduModel['antennaLeft']['vertices'],aduduModel['antennaLeft']['normal'],aduduModel['antennaLeft']['color'],gl.TRIANGLE_FAN,'antennaLeft')
    let antennaRightShape = new Shape(aduduModel['antennaRight']['vertices'],aduduModel['antennaRight']['normal'],aduduModel['antennaRight']['color'],gl.TRIANGLE_FAN,'antennaRight')

    aduduShapeId = bodyShape.id

    bodyShape.addChild(headShape)
    bodyShape.addChild(torsoLeftShape)
    bodyShape.addChild(torsoRightShape)
    bodyShape.addChild(footLeftShape)
    bodyShape.addChild(footRightShape)
    headShape.addChild(antennaLeftShape)
    headShape.addChild(antennaRightShape)

    shapes[bodyShape.id] = bodyShape
    shapes[headShape.id] = headShape
    shapes[torsoLeftShape.id] = torsoLeftShape
    shapes[torsoRightShape.id] = torsoRightShape
    shapes[footLeftShape.id] = footLeftShape
    shapes[footRightShape.id] = footRightShape
    shapes[antennaLeftShape.id] = antennaLeftShape
    shapes[antennaRightShape.id] = antennaRightShape
}

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
    shapes = {}
    initAduduShape()
    changeHierarchy(aduduShapeId)
    // triplePrismShape = new Shape(triplePrism, normalTriplePrism, [0.2, 1, 0.2], gl.TRIANGLE_FAN)
    // triplePrismShape.setId(0);
    // shapes[triplePrismShape.id] = triplePrismShape
    // boxedBoxShape = new Shape(boxedBoxVertices, boxedBoxNormals, [0.2, 1, 0.2], gl.TRIANGLE_FAN)
    // boxedBoxShape.setId(1);
    // boxedBoxShape.baseTranslateX = 0.7
    // shapes[boxedBoxShape.id] = boxedBoxShape
    // trianglePrismShape = new Shape(trianglePrism, normalTrianglePrism, [0.2, 1, 0.2], gl.TRIANGLE_FAN)
    // trianglePrismShape.setId(0);
    // // triplePrismShape.baseTranslateX = -0.7
    // shapes[trianglePrismShape.id] = trianglePrismShape;
    // changeToOrtho()
    redraw()
}

initShapes();
// TODO : add global slider variable
// resetObjectLabels();