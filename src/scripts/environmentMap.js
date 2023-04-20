var faceInfos;
var justUsedEnv = false;
var justUsedEnvSingle = false;

function setupImageEnvironment(glContext){
    faceInfos = [
        {
            target: glContext.TEXTURE_CUBE_MAP_POSITIVE_X,
            url: 'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/pos-x.jpg',
          },
          {
            target: glContext.TEXTURE_CUBE_MAP_NEGATIVE_X,
            url: 'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/neg-x.jpg',
          },
          {
            target: glContext.TEXTURE_CUBE_MAP_POSITIVE_Y,
            url: 'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/pos-y.jpg',
          },
          {
            target: glContext.TEXTURE_CUBE_MAP_NEGATIVE_Y,
            url: 'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/neg-y.jpg',
          },
          {
            target: glContext.TEXTURE_CUBE_MAP_POSITIVE_Z,
            url: 'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/pos-z.jpg',
          },
          {
            target: glContext.TEXTURE_CUBE_MAP_NEGATIVE_Z,
            url: 'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/neg-z.jpg',
          },
      ];
}

var listImage = []

//Initialize the WebGL
function initEnvironmentAll() {
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
        varying vec4 fragColor;
        varying vec3 vnormal;
        varying vec3 vpos;
    
        void main() {
            fragColor = vec4(vertColor,1);
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vertPosition, 1);

            vnormal = normalize(a_normal);
            vpos = vertPosition;
        }`,

        fragmentShaderSource: `
        precision mediump float;
        varying vec3 vnormal;
        varying vec4 fragColor;
        uniform samplerCube u_texture;
        varying vec3 vpos;
    
        void main() {
            vec3 eyeToSurfaceDir = vpos;
            vec3 direction = reflect(eyeToSurfaceDir,vnormal);

            gl_FragColor = textureCube(u_texture, direction);
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

    let textureLocation = gl.getUniformLocation(program, "u_texture");

    setupImageEnvironment(gl);
    // Create a texture.
    
    if(!justUsedEnv){
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        justUsedEnv = true
        for(let i=0;i<6;i++){
            const {target,url} = faceInfos[i]
            // Upload the canvas to the cubemap face.
            const level = 0;
            const internalFormat = gl.RGBA;
            const width = 512;
            const height = 512;
            const format = gl.RGBA;
            const type = gl.UNSIGNED_BYTE;
    
            // setup each face so it's immediately renderable
            gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
    
            // Asynchronously load an image
            const imageEnv = new Image();
            imageEnv.src = url;
            imageEnv.crossOrigin = "anonymous"
            imageEnv.addEventListener('load', function() {
                // Now that the image has loaded make copy it to the texture.
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                gl.texImage2D(target, level, internalFormat, format, type, imageEnv);
                gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    
                for (let i = 0; i < Math.floor(listVertices.length/36); i ++) {
                    gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4)
                }
            });
        }
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    }
    
    
    // Tell the shader to use texture unit 0 for u_texture
    gl.uniform1i(textureLocation, 0);

    for (let i = 0; i < Math.floor(listVertices.length/36); i ++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4)
    }
        
}

function initEnvironmentSingle() {
    //Check if webgl is supported
    if (!glSingle) {
        alert("WebglSingle is not supported");
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
        varying vec4 fragColor;
        varying vec3 vnormal;
        varying vec3 vpos;
    
        void main() {
            fragColor = vec4(vertColor,1);
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vertPosition, 1);

            vnormal = normalize(a_normal);
            vpos = vertPosition;
        }`,

        fragmentShaderSourceSingle: `
        precision mediump float;
        varying vec3 vnormal;
        varying vec4 fragColor;
        uniform samplerCube u_texture;
        varying vec3 vpos;
    
        void main() {
            vec3 eyeToSurfaceDir = vpos;
            vec3 direction = reflect(eyeToSurfaceDir,vnormal);

            gl_FragColor = textureCube(u_texture, direction);
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
    glSingle.uniformMatrix4fv(projectionMatrixLocationSingle, false, flatten(globalProjectionMatrix));
    glSingle.uniformMatrix4fv(modelMatrixLocationSingle, false, flatten(identityMatrix));
    glSingle.uniformMatrix4fv(viewMatrixLocationSingle, false, flatten(globalViewMatrix))
    glSingle.bufferData(glSingle.ARRAY_BUFFER, new Float32Array(listVerticesSingle), glSingle.STATIC_DRAW)

    let textureLocationSingle = glSingle.getUniformLocation(programSingle, "u_texture");

    setupImageEnvironment(glSingle);
    
    if(!justUsedEnvSingle){
        let textureSingle = glSingle.createTexture();
        glSingle.bindTexture(glSingle.TEXTURE_CUBE_MAP, textureSingle);
        justUsedEnvSingle = true
        for(let i=0;i<6;i++){
            const {target,url} = faceInfos[i]
            // Upload the canvas to the cubemap face.
            const level = 0;
            const internalFormat = glSingle.RGBA;
            const width = 512;
            const height = 512;
            const format = glSingle.RGBA;
            const type = glSingle.UNSIGNED_BYTE;
    
            // setup each face so it's immediately renderable
            glSingle.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
    
            // Asynchronously load an image
            const imageEnv = new Image();
            imageEnv.src = url;
            imageEnv.crossOrigin = "anonymous"
            imageEnv.addEventListener('load', function() {
                // Now that the image has loaded make copy it to the texture.
                glSingle.bindTexture(glSingle.TEXTURE_CUBE_MAP, textureSingle);
                glSingle.texImage2D(target, level, internalFormat, format, type, imageEnv);
                glSingle.generateMipmap(glSingle.TEXTURE_CUBE_MAP);
    
                for (let i = 0; i < Math.floor(listVerticesSingle.length/36); i ++) {
                    glSingle.drawArrays(glSingle.TRIANGLE_FAN, i*4, 4)
                }
            });
        }
        glSingle.generateMipmap(glSingle.TEXTURE_CUBE_MAP);
        glSingle.texParameteri(glSingle.TEXTURE_CUBE_MAP, glSingle.TEXTURE_MIN_FILTER, glSingle.LINEAR_MIPMAP_LINEAR);
    }
    
    
    // Tell the shader to use texture unit 0 for u_texture
    glSingle.uniform1i(textureLocationSingle, 0);

    for (let i = 0; i < Math.floor(listVerticesSingle.length/4); i ++) {
        glSingle.drawArrays(glSingle.TRIANGLE_FAN, i*4, 4)
    }
        
}

initEnvironmentAll()
initEnvironmentSingle()