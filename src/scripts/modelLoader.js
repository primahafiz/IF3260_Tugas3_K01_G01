var aduduShapeId;
var testShapeId2;
var modelIds = {};

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
    modelIds['adudu'] = aduduShapeId

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

function initPigShape(){
    let bodyShape = new Shape(pigModel['body']['vertices'],pigModel['body']['normal'],pigModel['body']['color'],gl.TRIANGLE_FAN,'body')
    let headShape = new Shape(pigModel['head']['vertices'],pigModel['head']['normal'],pigModel['head']['color'],gl.TRIANGLE_FAN,'head')
    let snotShape = new Shape(pigModel['snot']['vertices'],pigModel['snot']['normal'],pigModel['snot']['color'],gl.TRIANGLE_FAN,'snot')
    let frontLeftFootShape = new Shape(pigModel['front_left_foot']['vertices'],pigModel['front_left_foot']['normal'],pigModel['front_left_foot']['color'],gl.TRIANGLE_FAN,'front_left_foot')
    let frontRightFootShape = new Shape(pigModel['front_right_foot']['vertices'],pigModel['front_right_foot']['normal'],pigModel['front_right_foot']['color'],gl.TRIANGLE_FAN,'front_right_foot')
    let backLeftFootShape = new Shape(pigModel['back_left_foot']['vertices'],pigModel['back_left_foot']['normal'],pigModel['back_left_foot']['color'],gl.TRIANGLE_FAN,'back_left_foot')
    let backRightFootShape = new Shape(pigModel['back_right_foot']['vertices'],pigModel['back_right_foot']['normal'],pigModel['back_right_foot']['color'],gl.TRIANGLE_FAN,'back_right_foot')

    bodyShape.addChild(headShape)
    bodyShape.addChild(frontLeftFootShape)
    bodyShape.addChild(backLeftFootShape)
    bodyShape.addChild(frontRightFootShape)
    bodyShape.addChild(backRightFootShape)
    headShape.addChild(snotShape)

    testShapeId2 = bodyShape.id
    modelIds['pig'] = testShapeId2

    shapes[bodyShape.id] = bodyShape
    shapes[headShape.id] = headShape
    shapes[snotShape.id] = snotShape
    shapes[frontLeftFootShape.id] = frontLeftFootShape
    shapes[frontRightFootShape.id] = frontRightFootShape
    shapes[backLeftFootShape.id] = backLeftFootShape
    shapes[backRightFootShape.id] = backRightFootShape
}

function initSteveShape() {
    let bodyShape = new Shape(steveModel['body']['vertices'],steveModel['body']['normal'],steveModel['body']['color'],gl.TRIANGLE_FAN,'body')
    let headShape = new Shape(steveModel['head']['vertices'],steveModel['head']['normal'],steveModel['head']['color'],gl.TRIANGLE_FAN,'head')
    let torsoLeftShape = new Shape(steveModel['torsoLeft']['vertices'],steveModel['torsoLeft']['normal'],steveModel['torsoLeft']['color'],gl.TRIANGLE_FAN,'torsoLeft')
    let torsoRightShape = new Shape(steveModel['torsoRight']['vertices'],steveModel['torsoRight']['normal'],steveModel['torsoRight']['color'],gl.TRIANGLE_FAN,'torsoRight')
    let footLeftShape = new Shape(steveModel['footLeft']['vertices'],steveModel['footLeft']['normal'],steveModel['footLeft']['color'],gl.TRIANGLE_FAN,'footLeft')
    let footRightShape = new Shape(steveModel['footRight']['vertices'],steveModel['footRight']['normal'],steveModel['footRight']['color'],gl.TRIANGLE_FAN,'footRight')

    steveShapeId = bodyShape.id
    modelIds['steve'] = steveShapeId

    bodyShape.addChild(headShape)
    bodyShape.addChild(torsoLeftShape)
    bodyShape.addChild(torsoRightShape)
    bodyShape.addChild(footLeftShape)
    bodyShape.addChild(footRightShape)

    shapes[bodyShape.id] = bodyShape
    shapes[headShape.id] = headShape
    shapes[torsoLeftShape.id] = torsoLeftShape
    shapes[torsoRightShape.id] = torsoRightShape
    shapes[footLeftShape.id] = footLeftShape
    shapes[footRightShape.id] = footRightShape
}

function initModels(){
    initAduduShape()
    initPigShape()
    initSteveShape()
}