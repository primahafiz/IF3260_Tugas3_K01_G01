const animations = {
    "pig_example": pigExampleAnim,
    "pig_walk": pigWalkAnim
}

var animationChosen = "pig_walk";

function playAnimation(animationName, currentFrame = 0){
    // if animationName does not exist in animations, return
    if (!animations[animationName] || animationName === undefined) return;

    let animation = animations[animationName];
    let modelRootId = modelIds[animation.model_id];
    let time_between_frames = animation.second_between_frames * 1000;
    let frameLen = animation.frames.length;

    let frameData = animation.frames[currentFrame];
    for (let j = 0; j < frameData.length; j++){
        let objData = frameData[j];
        let obj = shapes[modelRootId + objData.index_diff];
        if (objData.as_root_rot){
            obj.rotate('x', objData.as_root_rot[0])
            obj.rotate('y', objData.as_root_rot[1])
            obj.rotate('z', objData.as_root_rot[2])
        }
        if (objData.as_root_pos){
            obj.translate('x', objData.as_root_pos[0])
            obj.translate('y', objData.as_root_pos[1])
            obj.translate('z', objData.as_root_pos[2])
        }
        if (objData.as_root_scale){
            obj.scale('x', objData.as_root_scale[0])
            obj.scale('y', objData.as_root_scale[1])
            obj.scale('z', objData.as_root_scale[2])
        }
        if (objData.obj_rot){
            obj.rotateSingle('x', objData.obj_rot[0])
            obj.rotateSingle('y', objData.obj_rot[1])
            obj.rotateSingle('z', objData.obj_rot[2])
        }
        if (objData.obj_pos){
            obj.translateSingle('x', objData.obj_pos[0])
            obj.translateSingle('y', objData.obj_pos[1])
            obj.translateSingle('z', objData.obj_pos[2])
        }
        if (objData.obj_scale){
            obj.scaleSingle('x', objData.obj_scale[0])
            obj.scaleSingle('y', objData.obj_scale[1])
            obj.scaleSingle('z', objData.obj_scale[2])
        }
    }
    redraw();
    if (currentFrame < frameLen - 1) {
        setTimeout(function() {
          playAnimation(animationName, currentFrame + 1);
        }, time_between_frames);
    }
}

