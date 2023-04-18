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

function initAduduShape2(){
    let bodyShape = new Shape(aduduModel2['body']['vertices'],aduduModel2['body']['normal'],aduduModel2['body']['color'],gl.TRIANGLE_FAN,'body')
    let headShape = new Shape(aduduModel2['head']['vertices'],aduduModel2['head']['normal'],aduduModel2['head']['color'],gl.TRIANGLE_FAN,'head')
    let torsoLeftShape = new Shape(aduduModel2['torsoLeft']['vertices'],aduduModel2['torsoLeft']['normal'],aduduModel2['torsoLeft']['color'],gl.TRIANGLE_FAN,'torsoLeft')
    let torsoRightShape = new Shape(aduduModel2['torsoRight']['vertices'],aduduModel2['torsoRight']['normal'],aduduModel2['torsoRight']['color'],gl.TRIANGLE_FAN,'torsoRight')
    let footLeftShape = new Shape(aduduModel2['footLeft']['vertices'],aduduModel2['footLeft']['normal'],aduduModel2['footLeft']['color'],gl.TRIANGLE_FAN,'footLeft')
    let footRightShape = new Shape(aduduModel2['footRight']['vertices'],aduduModel2['footRight']['normal'],aduduModel2['footRight']['color'],gl.TRIANGLE_FAN,'footRight')
    let antennaLeftShape = new Shape(aduduModel2['antennaLeft']['vertices'],aduduModel2['antennaLeft']['normal'],aduduModel2['antennaLeft']['color'],gl.TRIANGLE_FAN,'antennaLeft')
    let antennaRightShape = new Shape(aduduModel2['antennaRight']['vertices'],aduduModel2['antennaRight']['normal'],aduduModel2['antennaRight']['color'],gl.TRIANGLE_FAN,'antennaRight')

    testShapeId2 = bodyShape.id
    modelIds['adudu2'] = testShapeId2

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

function initModels(){
    initAduduShape()
    initAduduShape2()
}