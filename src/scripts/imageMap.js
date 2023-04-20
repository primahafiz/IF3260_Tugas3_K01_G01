var listVertices = [];
var listVerticesSingle = [];

var baseImageTextureCoord = [
    32 / 63,  20 / 63,
    32 / 63,  32 / 63,
    40 / 63,  32 / 63,
    32 / 63,  32 / 63,

    40 / 63,  32 / 63,
    40 / 63,  20 / 63,
    20 / 63,  20 / 63,
    20 / 63,  32 / 63,

    28 / 63,  20 / 63,
    20 / 63,  32 / 63,
    28 / 63,  32 / 63,
    28 / 63,  20 / 63,

    20 / 63,  20 / 63,
    20 / 63,  32 / 63,
    28 / 63,  20 / 63,
    20 / 63,  32 / 63,

    28 / 63,  32 / 63,
    28 / 63,  20 / 63,
    20 / 63,  20 / 63,
    20 / 63,  32 / 63,

    28 / 63,  20 / 63,
    20 / 63,  32 / 63,
    28 / 63,  32 / 63,
    28 / 63,  20 / 63
]

function setTexcoords(glContext) {
    let textureCoordArray = []
    for(let i=0;i<Math.floor(listVertices.length/216);i++){
        for(let j=0;j<48;j++){
            textureCoordArray.push(baseImageTextureCoord[j])
        }
    }
    glContext.bufferData(
        glContext.ARRAY_BUFFER,
        new Float32Array(textureCoordArray),
        glContext.STATIC_DRAW);
  }

  // Asynchronously load an image
  let image = new Image();
  let url = "https://webglfundamentals.org/webgl/resources/f-texture.png"
  
  requestCORSIfNotSameOrigin(image, url);
  console.log(url)
  image.src = url;
  

//Initialize the WebGL
function initImageAll() {
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
    gl.uniformMatrix4fv(projectionMatrixLocation, false, flatten(globalProjectionMatrix));
    gl.uniformMatrix4fv(modelMatrixLocation, false, flatten(identityMatrix));
    gl.uniformMatrix4fv(viewMatrixLocation, false, flatten(globalViewMatrix))

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(listVertices), gl.STATIC_DRAW)


    let texcoordLocation = gl.getAttribLocation(program, "a_texcoord");
    let textureLocation = gl.getUniformLocation(program, "u_texture");
    let texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    
    // Set Texcoords.
    setTexcoords(gl);
    

    // Create a texture.
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    for (let i = 0; i < Math.floor(listVertices.length/36); i ++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4)
    }
    
    // Turn on the texcoord attribute
    gl.enableVertexAttribArray(texcoordLocation);
    
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
        
}

//Initialize the WebGL
function initImageSingle() {
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
        var info = glSingle.getProgramInfoLog(programSingle);
        throw new Error('Could not compile WebGL program. \n\n' + info);
    }
    
    projectionMatrixLocationSingle = glSingle.getUniformLocation(programSingle,"projectionMatrix") // <-- WATCH THIS
    modelMatrixLocationSingle = glSingle.getUniformLocation(programSingle,"modelMatrix")
    viewMatrixLocationSingle = glSingle.getUniformLocation(programSingle,"viewMatrix")
    
    //Enable the attribute
    glSingle.enableVertexAttribArray(positionAttribLocationSingle);
    glSingle.enableVertexAttribArray(colorAttribLocationSingle);
    glSingle.enableVertexAttribArray(normalAttribLocationSingle);
    
    if ( !glSingle.getProgramParameter( programSingle, glSingle.LINK_STATUS) ) {
        var infoSingle = glSingle.getProgramInfoLog(programSingle);
        throw new Error('Could not compile WebGL program. \n\n' + info);
    }
    
            
    //Start the program
    glSingle.useProgram(programSingle);
    
    let identityMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    glSingle.uniformMatrix4fv(projectionMatrixLocationSingle, false, flatten(globalProjectionMatrix));
    glSingle.uniformMatrix4fv(modelMatrixLocationSingle, false, flatten(identityMatrix));
    glSingle.uniformMatrix4fv(viewMatrixLocationSingle, false, flatten(globalViewMatrix))
    glSingle.bufferData(glSingle.ARRAY_BUFFER, new Float32Array(listVerticesSingle), glSingle.STATIC_DRAW)

    let texcoordLocationSingle = glSingle.getAttribLocation(programSingle, "a_texcoord");
    let textureLocationSingle = glSingle.getUniformLocation(programSingle, "u_texture");
    let texcoordBufferSingle = glSingle.createBuffer();
    glSingle.bindBuffer(glSingle.ARRAY_BUFFER, texcoordBufferSingle);
    // Set Texcoords.
    glSingle.bufferData(glSingle.ARRAY_BUFFER, new Float32Array(baseImageTextureCoord), glSingle.STATIC_DRAW)
    

    // Create a texture.
    let texture = glSingle.createTexture();
    glSingle.bindTexture(glSingle.TEXTURE_2D, texture);
    glSingle.texImage2D(glSingle.TEXTURE_2D, 0, glSingle.RGBA, glSingle.RGBA,glSingle.UNSIGNED_BYTE, image);
    glSingle.generateMipmap(glSingle.TEXTURE_2D);
    for (let i = 0; i < Math.floor(listVerticesSingle.length/36); i ++) {
        glSingle.drawArrays(glSingle.TRIANGLE_FAN, i*4, 4)
    }
    
    // Turn on the texcoord attribute
    glSingle.enableVertexAttribArray(texcoordLocationSingle);
    
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
        
}

initImageAll()
initImageSingle()