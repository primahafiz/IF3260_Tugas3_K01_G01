class Shape {
    static ID = 0

    constructor(vertices, normal, color, webGLShape) {
        this.id = Shape.ID++
        this.webGLShape = webGLShape
        this.vertices = vertices
        this.normal = normal;
        this.color = color
        this.transformationMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
        this.projection_matrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

        this.parentMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

        this.toInheritTransformationMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
        
        this.singleTransformationMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
        

        // Transformation variable which will be passed to child shape
        this.curAngleX = 0
        this.curAngleY = 0
        this.curAngleZ = 0
        this.translateX = 0
        this.translateY = 0
        this.translateZ = 0
        this.scaleX = 1
        this.scaleY = 1
        this.scaleZ = 1

        // Transformation variable which won't be passed to child shape and only applied in current shape
        this.curAngleXSingle = 0
        this.curAngleYSingle = 0
        this.curAngleZSingle = 0
        this.translateXSingle = 0
        this.translateYSingle = 0
        this.translateZSingle = 0
        this.scaleXSingle = 1
        this.scaleYSingle = 1
        this.scaleZSingle = 1

        this.childShape = []
    }
    
    addChild(shape){
        this.childShape.push(shape);
    }

    draw(parentTransformationMatrix){
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                this.parentMatrix[i][j] = parentTransformationMatrix[i][j]
            }
        }
        this.materialize()
        for(let i=0;i<this.childShape.length;i++){
            this.childShape[i].draw(this.toInheritTransformationMatrix)
        }
    }

    materialize() {
        let vertices = this.vertices
        let normal = this.getTransformedNormal()
        this.transformationMatrix = this.getTransformedMatrix()
        this.toInheritTransformationMatrix = this.getToInheritTransformationMatrix(this.parentMatrix)
        gl.uniformMatrix4fv(projectionMatrixLocation, false, flatten(this.projection_matrix));
        gl.uniformMatrix4fv(modelMatrixLocation, false, flatten(this.transformationMatrix));
        gl.uniformMatrix4fv(viewMatrixLocation, false, flatten(viewMatrix))
        for (let i = 0; i < vertices.length; i += 12) {
            let verticesToDraw = []
            for (let j = 0; j < 12; j += 3) {
                if (shading) {
                    verticesToDraw.push(vertices[i + j], vertices[i + j + 1], vertices[i + j + 2], this.color[0], this.color[1], this.color[2], normal[i + j], normal[i + j + 1], normal[i + j + 2]);
                } else {
                    verticesToDraw.push(vertices[i + j], vertices[i + j + 1], vertices[i + j + 2], this.color[0], this.color[1], this.color[2], 0, 0, 1);
                }
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesToDraw), gl.STATIC_DRAW)
            gl.drawArrays(this.webGLShape, 0, 4)
        }
    }

    rotate(type,angle) {
        if(type == 'x'){
            this.curAngleX = angle
        }else if(type == 'y'){
            this.curAngleY = angle
        }else if(type == 'z'){
            this.curAngleZ = angle
        }
    }

    translate(type,displacement) {
        if(type == 'x'){
            this.translateX = displacement
        }else if(type == 'y'){
            this.translateY = displacement
        }else if(type == 'z'){
            this.translateZ = displacement
        }
    }

    scale(type,ratio) {
        if(type == 'x'){
            this.scaleX = ratio
        }else if(type == 'y'){
            this.scaleY = ratio
        }else if(type == 'z'){
            this.scaleZ = ratio
        }
    }

    rotateSingle(type,angle) {
        if(type == 'x'){
            this.curAngleXSingle = angle
        }else if(type == 'y'){
            this.curAngleYSingle = angle
        }else if(type == 'z'){
            this.curAngleZSingle = angle
        }
    }

    translateSingle(type,displacement) {
        if(type == 'x'){
            this.translateXSingle = displacement
        }else if(type == 'y'){
            this.translateYSingle = displacement
        }else if(type == 'z'){
            this.translateZSingle = displacement
        }
    }

    scaleSingle(type,ratio) {
        if(type == 'x'){
            this.scaleXSingle = ratio
        }else if(type == 'y'){
            this.scaleYSingle = ratio
        }else if(type == 'z'){
            this.scaleZSingle = ratio
        }
    }

    getSingleTransformationMatrix(currentTransformationMatrix){
        let center = getCenterPoint(this.vertices,currentTransformationMatrix);
        let singleTransformationMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

        // Scaling
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix, getTranslationMatrix(-center[0],-center[1],-center[2]))
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix, getScalingMatrix(this.scaleXSingle, this.scaleYSingle, this.scaleZSingle))
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix,getTranslationMatrix(center[0],center[1],center[2]))
        // Rotation
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix, getTranslationMatrix(-center[0],-center[1],-center[2]))
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix, getRotationZMatrix(this.curAngleZSingle))
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix, getRotationYMatrix(this.curAngleYSingle))
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix, getRotationXMatrix(this.curAngleXSingle))
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix,getTranslationMatrix(center[0],center[1],center[2]))
        // Translation
        singleTransformationMatrix = multiplyMatrix(singleTransformationMatrix, getTranslationMatrix(this.translateXSingle, this.translateYSingle, this.translateZSingle))

        return singleTransformationMatrix
    }

    getToInheritTransformationMatrix(currentTransformationMatrix){
        let center = getCenterPoint(this.vertices,currentTransformationMatrix);
        let newToInheritTransformationMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                newToInheritTransformationMatrix[i][j] = this.parentMatrix[i][j]
            }
        }

        // Scaling
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix, getTranslationMatrix(-center[0],-center[1],-center[2]))
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix, getScalingMatrix(this.scaleX, this.scaleY, this.scaleZ))
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix,getTranslationMatrix(center[0],center[1],center[2]))
        // Rotation
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix, getTranslationMatrix(-center[0],-center[1],-center[2]))
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix, getRotationZMatrix(this.curAngleZ))
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix, getRotationYMatrix(this.curAngleY))
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix, getRotationXMatrix(this.curAngleX))
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix,getTranslationMatrix(center[0],center[1],center[2]))
        // Translation
        newToInheritTransformationMatrix = multiplyMatrix(newToInheritTransformationMatrix, getTranslationMatrix(this.translateX, this.translateY, this.translateZ))

        return newToInheritTransformationMatrix
    }

    getTransformedMatrix() {
        let transformationMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
        
        // to inherit transformation
        transformationMatrix = multiplyMatrix(transformationMatrix,this.getToInheritTransformationMatrix(this.parentMatrix))
        // single transformation
        transformationMatrix = multiplyMatrix(transformationMatrix,this.getSingleTransformationMatrix(transformationMatrix))
        
        return transformationMatrix
    }

    getTransformedMatrixNonWebgl(){
        let transformationMatrix = transpose(this.getTransformedMatrix())
        return transformationMatrix
    }

    getTransformedVertices() {
        let vertices = []
        this.reset()
        this.getTransformedMatrixNonWebgl()
        for (let i = 0; i < this.vertices.length; i += 12) {
            for (let j = 0; j < 12; j += 3) {
                let newVertex = [[this.vertices[i + j]], [this.vertices[i + j + 1]], [this.vertices[i + j + 2]], [1]]
                let retMat = multiplyMatrix(this.transformationMatrix, newVertex)

                vertices.push(retMat[0][0], retMat[1][0], retMat[2][0])
            }
        }
        return vertices
    }
    getTransformedNormal() {
        let normal = []
        let transformationMatrix = this.getTransformedMatrix()
        let invTransposeMat = transpose(inverse(transformationMatrix))

        for (let i = 0; i < this.normal.length; i += 12) {
            for (let j = 0; j < 12; j += 3) {
                let newNormal = [[this.normal[i + j]], [this.normal[i + j + 1]], [this.normal[i + j + 2]], [0]]
                let retMat = multiplyMatrix(invTransposeMat, newNormal)

                normal.push(retMat[0][0], retMat[1][0], retMat[2][0])
            }
        }
        return normal
    }

    setId(id) {
        this.id = id
    }

    setProjectionMatrix(mat) {
        this.projection_matrix = mat;
    }

    reset() {
        this.transformationMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    }

    resetTransformation() {
        this.curAngleX = 0
        this.curAngleY = 0
        this.curAngleZ = 0
        this.translateX = 0
        this.translateY = 0
        this.translateZ = 0
        this.scaleX = 1
        this.scaleY = 1
        this.scaleZ = 1

        this.curAngleXSingle = 0
        this.curAngleYSingle = 0
        this.curAngleZSingle = 0
        this.translateXSingle = 0
        this.translateYSingle = 0
        this.translateZSingle = 0
        this.scaleXSingle = 1
        this.scaleYSingle = 1
        this.scaleZSingle = 1

        this.projection_matrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]
    }
}