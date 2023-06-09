var aduduShapeId;
var testShapeId2;
var steveShapeId;
var tayoShapeId;
var endermanShapeId;
var modelIds = {};

function initAduduShape(){
    let bodyShape = new Shape(aduduModel['body']['vertices'],aduduModel['body']['normal'],aduduModel['body']['color'],gl.TRIANGLE_FAN,'body')
    let headShape = new Shape(aduduModel['head']['vertices'],aduduModel['head']['normal'],aduduModel['head']['color'],gl.TRIANGLE_FAN,'head')
    let jointsTorsoLeftShape = new Shape(aduduModel['jointsTorsoLeft']['vertices'],aduduModel['jointsTorsoLeft']['normal'],aduduModel['jointsTorsoLeft']['color'],gl.TRIANGLE_FAN,'jointsTorsoLeft')
    let torsoLeftShape = new Shape(aduduModel['torsoLeft']['vertices'],aduduModel['torsoLeft']['normal'],aduduModel['torsoLeft']['color'],gl.TRIANGLE_FAN,'torsoLeft')
    let jointsTorsoRightShape = new Shape(aduduModel['jointsTorsoRight']['vertices'],aduduModel['jointsTorsoRight']['normal'],aduduModel['jointsTorsoRight']['color'],gl.TRIANGLE_FAN,'jointsTorsoRight')
    let torsoRightShape = new Shape(aduduModel['torsoRight']['vertices'],aduduModel['torsoRight']['normal'],aduduModel['torsoRight']['color'],gl.TRIANGLE_FAN,'torsoRight')
    let jointsFootLeftShape = new Shape(aduduModel['jointsFootLeft']['vertices'],aduduModel['jointsFootLeft']['normal'],aduduModel['jointsFootLeft']['color'],gl.TRIANGLE_FAN,'jointsFootLeft')
    let footLeftShape = new Shape(aduduModel['footLeft']['vertices'],aduduModel['footLeft']['normal'],aduduModel['footLeft']['color'],gl.TRIANGLE_FAN,'footLeft')
    let jointsFootRightShape = new Shape(aduduModel['jointsFootRight']['vertices'],aduduModel['jointsFootRight']['normal'],aduduModel['jointsFootRight']['color'],gl.TRIANGLE_FAN,'jointsFootRight')
    let footRightShape = new Shape(aduduModel['footRight']['vertices'],aduduModel['footRight']['normal'],aduduModel['footRight']['color'],gl.TRIANGLE_FAN,'footRight')
    let antennaLeftShape = new Shape(aduduModel['antennaLeft']['vertices'],aduduModel['antennaLeft']['normal'],aduduModel['antennaLeft']['color'],gl.TRIANGLE_FAN,'antennaLeft')
    let antennaRightShape = new Shape(aduduModel['antennaRight']['vertices'],aduduModel['antennaRight']['normal'],aduduModel['antennaRight']['color'],gl.TRIANGLE_FAN,'antennaRight')

    aduduShapeId = bodyShape.id
    modelIds['adudu'] = aduduShapeId

    bodyShape.addChild(headShape)
    bodyShape.addChild(jointsTorsoLeftShape)
    bodyShape.addChild(jointsTorsoRightShape)
    bodyShape.addChild(jointsFootLeftShape)
    bodyShape.addChild(jointsFootRightShape)

    headShape.addChild(antennaLeftShape)
    headShape.addChild(antennaRightShape)

    jointsTorsoLeftShape.addChild(torsoLeftShape)
    jointsTorsoRightShape.addChild(torsoRightShape)
    jointsFootLeftShape.addChild(footLeftShape)
    jointsFootRightShape.addChild(footRightShape)

    shapes[bodyShape.id] = bodyShape
    shapes[headShape.id] = headShape
    shapes[jointsTorsoLeftShape.id] = jointsTorsoLeftShape
    shapes[torsoLeftShape.id] = torsoLeftShape
    shapes[jointsTorsoRightShape.id] = jointsTorsoRightShape
    shapes[torsoRightShape.id] = torsoRightShape
    shapes[jointsFootLeftShape.id] = jointsFootLeftShape
    shapes[footLeftShape.id] = footLeftShape
    shapes[jointsFootRightShape.id] = jointsFootRightShape
    shapes[footRightShape.id] = footRightShape
    shapes[antennaLeftShape.id] = antennaLeftShape
    shapes[antennaRightShape.id] = antennaRightShape
}

function initPigShape() {
    let bodyShape = new Shape(pigModel['body']['vertices'], pigModel['body']['normal'], pigModel['body']['color'], gl.TRIANGLE_FAN, 'body')
    let headShape = new Shape(pigModel['head']['vertices'], pigModel['head']['normal'], pigModel['head']['color'], gl.TRIANGLE_FAN, 'head')
    let snotShape = new Shape(pigModel['snot']['vertices'], pigModel['snot']['normal'], pigModel['snot']['color'], gl.TRIANGLE_FAN, 'snot')
    let frontLeftFootShape = new Shape(pigModel['front_left_foot']['vertices'], pigModel['front_left_foot']['normal'], pigModel['front_left_foot']['color'], gl.TRIANGLE_FAN, 'front_left_foot')
    let frontRightFootShape = new Shape(pigModel['front_right_foot']['vertices'], pigModel['front_right_foot']['normal'], pigModel['front_right_foot']['color'], gl.TRIANGLE_FAN, 'front_right_foot')
    let backLeftFootShape = new Shape(pigModel['back_left_foot']['vertices'], pigModel['back_left_foot']['normal'], pigModel['back_left_foot']['color'], gl.TRIANGLE_FAN, 'back_left_foot')
    let backRightFootShape = new Shape(pigModel['back_right_foot']['vertices'], pigModel['back_right_foot']['normal'], pigModel['back_right_foot']['color'], gl.TRIANGLE_FAN, 'back_right_foot')

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
    let bodyShape = new Shape(steveModel['body']['vertices'], steveModel['body']['normal'], steveModel['body']['color'], gl.TRIANGLE_FAN, 'body')
    let headShape = new Shape(steveModel['head']['vertices'], steveModel['head']['normal'], steveModel['head']['color'], gl.TRIANGLE_FAN, 'head')
    let torsoLeftShape = new Shape(steveModel['torsoLeft']['vertices'], steveModel['torsoLeft']['normal'], steveModel['torsoLeft']['color'], gl.TRIANGLE_FAN, 'torsoLeft')
    let torsoRightShape = new Shape(steveModel['torsoRight']['vertices'], steveModel['torsoRight']['normal'], steveModel['torsoRight']['color'], gl.TRIANGLE_FAN, 'torsoRight')
    let footLeftShape = new Shape(steveModel['footLeft']['vertices'], steveModel['footLeft']['normal'], steveModel['footLeft']['color'], gl.TRIANGLE_FAN, 'footLeft')
    let footRightShape = new Shape(steveModel['footRight']['vertices'], steveModel['footRight']['normal'], steveModel['footRight']['color'], gl.TRIANGLE_FAN, 'footRight')

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

function inittayoShape() {
    let bodyShape = new Shape(tayoModel['body']['vertices'], tayoModel['body']['normal'], tayoModel['body']['color'], gl.TRIANGLE_FAN, 'body')
    // let headShape = new Shape(tayoModel['head']['vertices'], tayoModel['head']['normal'], tayoModel['head']['color'], gl.TRIANGLE_FAN, 'head')
    // let snotShape = new Shape(pigModel['snot']['vertices'], pigModel['snot']['normal'], pigModel['snot']['color'], gl.TRIANGLE_FAN, 'snot')
    let frontLeftwheelShape = new Shape(tayoModel['front_left_wheel']['vertices'], tayoModel['front_left_wheel']['normal'], tayoModel['front_left_wheel']['color'], gl.TRIANGLE_FAN, 'front_left_wheel')
    let frontRightwheelShape = new Shape(tayoModel['front_right_wheel']['vertices'], tayoModel['front_right_wheel']['normal'], tayoModel['front_right_wheel']['color'], gl.TRIANGLE_FAN, 'front_right_wheel')
    let backLeftwheelShape = new Shape(tayoModel['back_left_wheel']['vertices'], tayoModel['back_left_wheel']['normal'], tayoModel['back_left_wheel']['color'], gl.TRIANGLE_FAN, 'back_left_wheel')
    let backRightwheelShape = new Shape(tayoModel['back_right_wheel']['vertices'], tayoModel['back_right_wheel']['normal'], tayoModel['back_right_wheel']['color'], gl.TRIANGLE_FAN, 'back_right_wheel')

    // bodyShape.addChild(headShape)
    bodyShape.addChild(frontLeftwheelShape)
    bodyShape.addChild(backLeftwheelShape)
    bodyShape.addChild(frontRightwheelShape)
    bodyShape.addChild(backRightwheelShape)
    // headShape.addChild(snotShape)

    tayoShapeId = bodyShape.id
    modelIds['tayo'] = tayoShapeId

    shapes[bodyShape.id] = bodyShape
    // shapes[headShape.id] = headShape
    // shapes[snotShape.id] = snotShape
    shapes[frontLeftwheelShape.id] = frontLeftwheelShape
    shapes[frontRightwheelShape.id] = frontRightwheelShape
    shapes[backLeftwheelShape.id] = backLeftwheelShape
    shapes[backRightwheelShape.id] = backRightwheelShape
}

function initEndermanShape() {
    let bodyShape = new Shape(endermanModel['body']['vertices'], endermanModel['body']['normal'], endermanModel['body']['color'], gl.TRIANGLE_FAN, 'body')
    let headShape = new Shape(endermanModel['head']['vertices'], endermanModel['head']['normal'], endermanModel['head']['color'], gl.TRIANGLE_FAN, 'head')
    let leftArmShape = new Shape(endermanModel['leftArm']['vertices'], endermanModel['leftArm']['normal'], endermanModel['leftArm']['color'], gl.TRIANGLE_FAN, 'leftArm')
    let rightArmShape = new Shape(endermanModel['rightArm']['vertices'], endermanModel['rightArm']['normal'], endermanModel['rightArm']['color'], gl.TRIANGLE_FAN, 'rightArm')
    let leftLegShape = new Shape(endermanModel['leftLeg']['vertices'], endermanModel['leftLeg']['normal'], endermanModel['leftLeg']['color'], gl.TRIANGLE_FAN, 'leftLeg')
    let rightLegShape = new Shape(endermanModel['rightLeg']['vertices'], endermanModel['rightLeg']['normal'], endermanModel['rightLeg']['color'], gl.TRIANGLE_FAN, 'rightLeg')

    endermanShapeId = bodyShape.id
    modelIds['enderman'] = endermanShapeId

    bodyShape.addChild(headShape)
    bodyShape.addChild(leftArmShape)
    bodyShape.addChild(rightArmShape)
    bodyShape.addChild(leftLegShape)
    bodyShape.addChild(rightLegShape)

    shapes[bodyShape.id] = bodyShape
    shapes[headShape.id] = headShape
    shapes[leftArmShape.id] = leftArmShape
    shapes[rightArmShape.id] = rightArmShape
    shapes[leftLegShape.id] = leftLegShape
    shapes[rightLegShape.id] = rightLegShape
}

function initModels() {
    initAduduShape()
    initPigShape()
    initSteveShape()
    initEndermanShape()
    inittayoShape()
}