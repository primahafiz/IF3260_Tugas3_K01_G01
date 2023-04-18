var faceInfos;
var justUsedEnv = false;

function setupImageEnvironment(glContext){
    faceInfos = [
        {
          target: gl.TEXTURE_CUBE_MAP_POSITIVE_X,
          url: '../src/asset/pos-x.png',
        },
        {
          target: gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
          url: '../src/asset/neg-x.png',
        },
        {
          target: gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
          url: '../src/asset/pos-y.png',
        },
        {
          target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
          url: '../src/asset/neg-y.png',
        },
        {
          target: gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
          url: '../src/asset/pos-z.png',
        },
        {
          target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
          url: '../src/asset/neg-z.png',
        },
      ];
}

var listImage = []

//Initialize the WebGL
function initEnvironmentAll() {
    console.log("MASUK GAN")
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
    gl.uniformMatrix4fv(projectionMatrixLocation, false, flatten(identityMatrix));
        gl.uniformMatrix4fv(modelMatrixLocation, false, flatten(identityMatrix));
        gl.uniformMatrix4fv(viewMatrixLocation, false, flatten(identityMatrix))
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(listVertices), gl.STATIC_DRAW)
    console.log("PANJANG = "+listVertices.length)

    let textureLocation = gl.getUniformLocation(program, "u_texture");

    setupImageEnvironment(gl);
    // Create a texture.
    
    if(!justUsedEnv){
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        justUsedEnv = true
        for(let i=0;i<6;i++){
            const {target,url} = faceInfos[i]
            console.log(target)
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
                if(listImage.length < 6){
                    listImage.push(imageEnv)
                }
                console.log(imageEnv.src)
                console.log(imageEnv)
                // Now that the image has loaded make copy it to the texture.
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                gl.texImage2D(target, level, internalFormat, format, type, imageEnv);
                gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    
                for (let i = 0; i < Math.floor(listVertices.length/4); i ++) {
                    gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4)
                }
            });
        }
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    }
    
    
    // Tell the shader to use texture unit 0 for u_texture
    gl.uniform1i(textureLocation, 0);

    for (let i = 0; i < Math.floor(listVertices.length/4); i ++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4)
    }
        
}

// initEnvironmentAll()