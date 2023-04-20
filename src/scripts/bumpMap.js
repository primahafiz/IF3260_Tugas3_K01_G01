var texSize = 256;

// Bump Data
const baseColor = [20/255,145/255,200/255]
const deltaColor = [0.6,0.6,0.6]
const widthTexture = 5;

var data = new Array()
    for (var i = 0; i<= texSize; i++)  data[i] = new Array();
    for (var i = 0; i<= texSize; i++) for (var j=0; j<=texSize; j++)
        data[i][j] = 0.0;
    for (var i = Math.floor(texSize/5); i<4*texSize/5; i++){ 
        for (var j = Math.floor(texSize/5); j<4*texSize/5; j++){
            let mnm = Math.min(Math.min(i-texSize/5,4*texSize/5-i-1),Math.min(j-texSize/5,4*texSize/5-j-1))
            if(mnm <= widthTexture){
                data[i][j] = mnm/widthTexture;
            }else{
                data[i][j] = 1;
            }
        }
    }
  

// Bump Map Normals

var normalst = new Array()
    for (var i=0; i<texSize; i++)  normalst[i] = new Array();
    for (var i=0; i<texSize; i++) for ( var j = 0; j < texSize; j++)
        normalst[i][j] = new Array();
    for (var i=0; i<texSize; i++) for ( var j = 0; j < texSize; j++) {
        normalst[i][j][0] = data[i][j]-data[i+1][j];
        normalst[i][j][1] = data[i][j]-data[i][j+1];
        normalst[i][j][2] = 1;
    }
// Scale to Texture Coordinates

    for (var i=0; i<texSize; i++){
        for (var j=0; j<texSize; j++) {
            var d = 0;
            for(let k=0;k<3;k++) {
                d+=Math.abs(normalst[i][j][k])
            }
            for(let k=0;k<3;k++){
                normalst[i][j][k] = max(0,baseColor[k] - (d-1) * deltaColor[k]);
            }
        }
    }
// Normal Texture Array
var normals = new Uint8Array(3*texSize*texSize);

    for ( var i = 0; i < texSize; i++ ){
        for ( var j = 0; j < texSize; j++ ){
            for(var k =0; k<3; k++){
                normals[3*texSize*i+3*j+k] = 255*normalst[i][j][k];
            }
        }
    }

var baseTextureCoordBump = [
    0,0,
    1,0,
    1,1,
    0,1,

    0,0,
    1,0,
    1,1,
    0,1,
    
    0,0,
    1,0,
    1,1,
    0,1,

    0,0,
    1,0,
    1,1,
    0,1,

    0,0,
    1,0,
    1,1,
    0,1,

    0,0,
    1,0,
    1,1,
    0,1,
]

function setTexcoordsBump(glContext) {
    let textureCoordArray = []
    for(let i=0;i<Math.floor(listVertices.length/216);i++){
        for(let j=0;j<48;j++){
            textureCoordArray.push(baseTextureCoordBump[j])
        }
    }
    glContext.bufferData(
        glContext.ARRAY_BUFFER,
        new Float32Array(textureCoordArray),
        glContext.STATIC_DRAW);
  }

function configureTexture( glContext,textureBump ) {
    var texture = glContext.createTexture();
    glContext.activeTexture(glContext.TEXTURE0);
    glContext.bindTexture(glContext.TEXTURE_2D, texture);
    glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, true);
    glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.RGB, texSize, texSize, 0, glContext.RGB, glContext.UNSIGNED_BYTE, textureBump);
    glContext.generateMipmap(glContext.TEXTURE_2D);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER,
    glContext.NEAREST_MIPMAP_LINEAR);
    glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.NEAREST);
}

function initBumpAll() {
    //Check if webgl is supported
    if (!gl) {
        alert("WebGL is not supported");
        return;
    }

    //Set the Canvas
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    gl.enable(gl.DEPTH_TEST);
    // Clear the canvas AND the depth buffer.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //Create Shadder
    const shadderSource = {
        vertexShaderSource: `
        attribute vec3 vertPosition;
        attribute vec3 vertColor;
        attribute vec3 a_normal;
        uniform mat4 modelMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 projectionMatrix;
        attribute vec2 a_texcoord;
        varying vec2 v_texcoord;
        varying vec4 fragColor;
        varying vec3 vnormal;
    
        void main() {
            fragColor = vec4(vertColor,1);
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vertPosition, 1);

            vnormal = normalize(a_normal);
            v_texcoord = a_texcoord;
        }`,

        fragmentShaderSource: `
        precision mediump float;
        varying vec3 vnormal;
        varying vec4 fragColor;
        varying vec2 v_texcoord;
        uniform sampler2D u_texture;
    
        void main() {
            gl_FragColor = texture2D(u_texture, v_texcoord);

            vec3 vReverseLightDir = vec3(0.0,0.0,-1.0);
            float ratio = 0.5 * dot(vnormal,vReverseLightDir);

            gl_FragColor.rgb *= ratio + 0.5;
        }`
    }
    gl.shaderSource(vertexShader, shadderSource.vertexShaderSource);
    gl.shaderSource(fragmentShader, shadderSource.fragmentShaderSource);

    //Compile Shadder
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    //Attach Shadder
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    //Link Shadder
    gl.linkProgram(program);

    //Bind the buffer
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        positionAttribLocation = gl.getAttribLocation(program, "vertPosition");
    gl.vertexAttribPointer(
        positionAttribLocation,
        3,                                      //3 float per vertex (XYZ)
        gl.FLOAT,
        gl.FALSE,
        9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYZRGBN1N2N3)
        0                                       //Position start from the first element
    );

    // Create Color Attribute
    colorAttribLocation = gl.getAttribLocation(program, "vertColor");
    gl.vertexAttribPointer(
        colorAttribLocation,
        3,                                      //3 float per vertex (RGB)
        gl.FLOAT,
        gl.FALSE,
        9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYZRGBN1N2N3)
        3 * Float32Array.BYTES_PER_ELEMENT      //Color start from the fourth element
        );
        
        // Create normal attribute
        normalAttribLocation = gl.getAttribLocation(program, "a_normal");
        gl.vertexAttribPointer(
            normalAttribLocation,
            3,                                      //3 float per vertex (N1N2N3)
            gl.FLOAT,
            gl.FALSE,
            9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYRGBN1N2N3)
            6 * Float32Array.BYTES_PER_ELEMENT      //Normals start from the fourth element
            );
            
            projectionMatrixLocation = gl.getUniformLocation(program,"projectionMatrix") // <-- WATCH THIS
            modelMatrixLocation = gl.getUniformLocation(program,"modelMatrix")
            viewMatrixLocation = gl.getUniformLocation(program,"viewMatrix")
            
            //Enable the attribute
            gl.enableVertexAttribArray(positionAttribLocation);
            gl.enableVertexAttribArray(colorAttribLocation);
            gl.enableVertexAttribArray(normalAttribLocation);
            
            if ( !gl.getProgramParameter( program, gl.LINK_STATUS) ) {
                var info = gl.getProgramInfoLog(program);
                throw new Error('Could not compile WebGL program. \n\n' + info);
            }  
            
            //Start the program
    gl.useProgram(program);
    
    let identityMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    gl.uniformMatrix4fv(projectionMatrixLocation, false, flatten(identityMatrix));
    gl.uniformMatrix4fv(modelMatrixLocation, false, flatten(identityMatrix));
    gl.uniformMatrix4fv(viewMatrixLocation, false, flatten(identityMatrix))
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(listVertices), gl.STATIC_DRAW)
    

    let texcoordLocation = gl.getAttribLocation(program, "a_texcoord");
    let textureLocation = gl.getUniformLocation(program, "u_texture");
    let texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    // Set Texcoords.
    setTexcoordsBump(gl);
    
    // Turn on the texcoord attribute
    gl.enableVertexAttribArray(texcoordLocation);
    
    configureTexture(gl,normals)
    // bind the texcoord buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    
    // Tell the shader to use texture unit 0 for u_texture
    gl.uniform1i(textureLocation, 0);
    
    // Tell the texcoord attribute how to get data out of texcoordBuffer (ARRAY_BUFFER)
    let size = 2;          // 2 components per iteration
    let type = gl.FLOAT;   // the data is 32bit floats
    let normalize = false; // don't normalize the data
    let stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    let offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        texcoordLocation, size, type, normalize, stride, offset);
        
    for (let i = 0; i < Math.floor(listVertices.length/36); i ++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4)
    }
}


function initBumpSingle() {
    //Check if webgl is supported
    if (!glSingle) {
        alert("WebGL is not supported");
        return;
    }

    //Set the Canvas
    glSingle.viewport( 0, 0, canvasSingle.width, canvasSingle.height );
    glSingle.clearColor( 1.0, 1.0, 1.0, 1.0 );
    glSingle.enable(glSingle.DEPTH_TEST);
    // Clear the canvas AND the depth buffer.
    glSingle.clear(glSingle.COLOR_BUFFER_BIT | glSingle.DEPTH_BUFFER_BIT);

    //Create Shadder
    const shadderSourceSingle = {
        vertexShaderSourceSingle: `
        attribute vec3 vertPosition;
        attribute vec3 vertColor;
        attribute vec3 a_normal;
        uniform mat4 modelMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 projectionMatrix;
        attribute vec2 a_texcoord;
        varying vec2 v_texcoord;
        varying vec4 fragColor;
        varying vec3 vnormal;
    
        void main() {
            fragColor = vec4(vertColor,1);
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vertPosition, 1);

            vnormal = normalize(a_normal);
            v_texcoord = a_texcoord;
        }`,

        fragmentShaderSourceSingle: `
        precision mediump float;
        varying vec3 vnormal;
        varying vec4 fragColor;
        varying vec2 v_texcoord;
        uniform sampler2D u_texture;
    
        void main() {
            gl_FragColor = texture2D(u_texture, v_texcoord);

            vec3 vReverseLightDir = vec3(0.0,0.0,-1.0);
            float ratio = 0.5 * dot(vnormal,vReverseLightDir);

            gl_FragColor.rgb *= ratio + 0.5;
        }`
    }
    glSingle.shaderSource(vertexShaderSingle, shadderSourceSingle.vertexShaderSourceSingle);
    glSingle.shaderSource(fragmentShaderSingle, shadderSourceSingle.fragmentShaderSourceSingle);

    //Compile Shadder
    glSingle.compileShader(vertexShaderSingle);
    glSingle.compileShader(fragmentShaderSingle);

    //Attach Shadder
    glSingle.attachShader(programSingle, vertexShaderSingle);
    glSingle.attachShader(programSingle, fragmentShaderSingle);

    //Link Shadder
    glSingle.linkProgram(programSingle);

    //Bind the buffer
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    glSingle.bindBuffer(glSingle.ARRAY_BUFFER, vertexBufferSingle);
        positionAttribLocationSingle = glSingle.getAttribLocation(programSingle, "vertPosition");
    glSingle.vertexAttribPointer(
        positionAttribLocationSingle,
        3,                                      //3 float per vertex (XYZ)
        glSingle.FLOAT,
        glSingle.FALSE,
        9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYZRGBN1N2N3)
        0                                       //Position start from the first element
    );

    // Create Color Attribute
    colorAttribLocationSingle = glSingle.getAttribLocation(programSingle, "vertColor");
    glSingle.vertexAttribPointer(
        colorAttribLocationSingle,
        3,                                      //3 float per vertex (RGB)
        glSingle.FLOAT,
        glSingle.FALSE,
        9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYZRGBN1N2N3)
        3 * Float32Array.BYTES_PER_ELEMENT      //Color start from the fourth element
        );
        
        // Create normal attribute
        normalAttribLocationSingle = glSingle.getAttribLocation(programSingle, "a_normal");
        glSingle.vertexAttribPointer(
            normalAttribLocationSingle,
            3,                                      //3 float per vertex (N1N2N3)
            glSingle.FLOAT,
            glSingle.FALSE,
            9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYRGBN1N2N3)
            6 * Float32Array.BYTES_PER_ELEMENT      //Normals start from the fourth element
            );
            
            projectionMatrixLocationSingle = glSingle.getUniformLocation(programSingle,"projectionMatrix") // <-- WATCH THIS
            modelMatrixLocationSingle = glSingle.getUniformLocation(programSingle,"modelMatrix")
            viewMatrixLocationSingle = glSingle.getUniformLocation(programSingle,"viewMatrix")
            
            //Enable the attribute
            glSingle.enableVertexAttribArray(positionAttribLocationSingle);
            glSingle.enableVertexAttribArray(colorAttribLocationSingle);
            glSingle.enableVertexAttribArray(normalAttribLocationSingle);
            
            if ( !glSingle.getProgramParameter( programSingle, glSingle.LINK_STATUS) ) {
                var infoSingle = glSingle.getProgramInfoLog(programSingle);
                throw new Error('Could not compile WebGL program. \n\n' + infoSingle);
            }  
            
    //Start the program
    glSingle.useProgram(programSingle);
    
    let identityMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    glSingle.uniformMatrix4fv(projectionMatrixLocationSingle, false, flatten(identityMatrix));
        glSingle.uniformMatrix4fv(modelMatrixLocationSingle, false, flatten(identityMatrix));
        glSingle.uniformMatrix4fv(viewMatrixLocationSingle, false, flatten(identityMatrix))
    glSingle.bufferData(glSingle.ARRAY_BUFFER, new Float32Array(listVerticesSingle), glSingle.STATIC_DRAW)
    

    let texcoordLocationSingle = glSingle.getAttribLocation(programSingle, "a_texcoord");
    let textureLocationSingle = glSingle.getUniformLocation(programSingle, "u_texture");
    let texcoordBufferSingle = glSingle.createBuffer();
    glSingle.bindBuffer(glSingle.ARRAY_BUFFER, texcoordBufferSingle);
    // Set Texcoords.
    glSingle.bufferData(glSingle.ARRAY_BUFFER, new Float32Array(baseTextureCoordBump), glSingle.STATIC_DRAW)
    

    
    // Turn on the texcoord attribute
    glSingle.enableVertexAttribArray(texcoordLocationSingle);
    
    configureTexture(glSingle,normals)
    // bind the texcoord buffer.
    glSingle.bindBuffer(glSingle.ARRAY_BUFFER, texcoordBufferSingle);
    
    // Tell the shader to use texture unit 0 for u_texture
    glSingle.uniform1i(textureLocationSingle, 0);
    
    // Tell the texcoord attribute how to get data out of texcoordBuffer (ARRAY_BUFFER)
    let size = 2;          // 2 components per iteration
    let type = glSingle.FLOAT;   // the data is 32bit floats
    let normalize = false; // don't normalize the data
    let stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    let offset = 0;        // start at the beginning of the buffer
    glSingle.vertexAttribPointer(
        texcoordLocationSingle, size, type, normalize, stride, offset);
        
    for (let i = 0; i < Math.floor(listVerticesSingle.length/36); i ++) {
        glSingle.drawArrays(glSingle.TRIANGLE_FAN, i*4, 4)
    }
}