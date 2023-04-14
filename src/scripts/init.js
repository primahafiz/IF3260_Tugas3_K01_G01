//Variable Declaration and Initialization Canvas all
var canvas = document.getElementById("canvasAll");
var gl = canvas.getContext("webgl2");
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
var program = gl.createProgram();
var vertexBuffer = gl.createBuffer();
var positionAttribLocation;
var colorAttribLocation;
var normalAttribLocation;
var reverseLightDirectionLocation;
var modelMatrixLocation;
var viewMatrixLocation;
var projectionMatrixLocation;
var shadderSource;

//Variable Declaration and Initialization Canvas single
var canvasSingle = document.getElementById("canvasSingle");
var glSingle = canvasSingle.getContext("webgl2");
var vertexShaderSingle = glSingle.createShader(glSingle.VERTEX_SHADER);
var fragmentShaderSingle = glSingle.createShader(glSingle.FRAGMENT_SHADER);
var programSingle = glSingle.createProgram();
var vertexBufferSingle = glSingle.createBuffer();
var positionAttribLocationSingle;
var colorAttribLocationSingle;
var normalAttribLocationSingle;
var reverseLightDirectionLocationSingle;
var modelMatrixLocationSingle;
var viewMatrixLocationSingle;
var projectionMatrixLocationSingle;
var shadderSourceSingle;

//Variable Declaration and Initialization Canvas subtree
var canvasSubtree = document.getElementById("canvasSubtree");
var glSubtree = canvasSubtree.getContext("webgl2");
var vertexShaderSubtree = glSubtree.createShader(glSubtree.VERTEX_SHADER);
var fragmentShaderSubtree = glSubtree.createShader(glSubtree.FRAGMENT_SHADER);
var programSubtree = glSubtree.createProgram();
var vertexBufferSubtree = glSubtree.createBuffer();
var positionAttribLocationSubtree;
var colorAttribLocationSubtree;
var normalAttribLocationSubtree;
var reverseLightDirectionLocationSubtree;
var modelMatrixLocationSubtree;
var viewMatrixLocationSubtree;
var projectionMatrixLocationSubtree;
var shadderSourceSubtree;

var shading = true;


//Initialize the WebGL
function initAll() {
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
        vertexShaderSource: `#version 300 es
        in vec3 vertPosition;
        in vec3 vertColor;
        in vec3 a_normal;
        uniform mat4 modelMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 projectionMatrix;
        out vec4 fragColor;
        out vec3 vnormal;
    
        void main() {
            fragColor = vec4(vertColor,1);
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vertPosition, 1);

            vnormal = normalize(a_normal);
        }`,

        fragmentShaderSource: `#version 300 es
        precision mediump float;
        in vec3 vnormal;
        in vec4 fragColor;
        out vec4 outColor;
    
        void main() {
            outColor = fragColor;
            
            vec3 vReverseLightDir = vec3(0.0,0.0,-1.0);
            float ratio = 0.5 * max(dot(vnormal,vReverseLightDir),0.0f);
            outColor.rgb *= ratio + 0.5;
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
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    // Create Position Attribute
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
}

//Initialize the WebGL
function initSingle() {
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
        vertexShaderSourceSingle: `#version 300 es
        in vec3 vertPosition;
        in vec3 vertColor;
        in vec3 a_normal;
        uniform mat4 modelMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 projectionMatrix;
        out vec4 fragColor;
        out vec3 vnormal;
    
        void main() {
            fragColor = vec4(vertColor,1);
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vertPosition, 1);

            vnormal = normalize(a_normal);
        }`,

        fragmentShaderSourceSingle: `#version 300 es
        precision mediump float;
        in vec3 vnormal;
        in vec4 fragColor;
        out vec4 outColor;
    
        void main() {
            outColor = fragColor;
            
            vec3 vReverseLightDir = vec3(0.0,0.0,-1.0);
            float ratio = 0.5 * max(dot(vnormal,vReverseLightDir),0.0f);
            outColor.rgb *= ratio + 0.5;
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
    glSingle.bindBuffer(glSingle.ARRAY_BUFFER, vertexBufferSingle);

    // Create Position Attribute
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
}

//Initialize the WebGL
function initSubtree() {
    //Check if webgl is supported
    if (!glSubtree) {
        alert("WebGL is not supported");
        return;
    }

    //Set the Canvas
    glSubtree.viewport( 0, 0, canvasSubtree.width, canvasSubtree.height );
    glSubtree.clearColor( 1.0, 1.0, 1.0, 1.0 );
    glSubtree.enable(glSubtree.DEPTH_TEST);
    // Clear the canvas AND the depth buffer.
    glSubtree.clear(glSubtree.COLOR_BUFFER_BIT | glSubtree.DEPTH_BUFFER_BIT);

    //Create Shadder
    const shadderSourceSubtree = {
        vertexShaderSourceSubtree: `#version 300 es
        in vec3 vertPosition;
        in vec3 vertColor;
        in vec3 a_normal;
        uniform mat4 modelMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 projectionMatrix;
        out vec4 fragColor;
        out vec3 vnormal;
    
        void main() {
            fragColor = vec4(vertColor,1);
            gl_PointSize = 20.0;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vertPosition, 1);

            vnormal = normalize(a_normal);
        }`,

        fragmentShaderSourceSubtree: `#version 300 es
        precision mediump float;
        in vec3 vnormal;
        in vec4 fragColor;
        out vec4 outColor;
    
        void main() {
            outColor = fragColor;
            
            vec3 vReverseLightDir = vec3(0.0,0.0,-1.0);
            float ratio = 0.5 * max(dot(vnormal,vReverseLightDir),0.0f);
            outColor.rgb *= ratio + 0.5;
        }`
    }
    glSubtree.shaderSource(vertexShaderSubtree, shadderSourceSubtree.vertexShaderSourceSubtree);
    glSubtree.shaderSource(fragmentShaderSubtree, shadderSourceSubtree.fragmentShaderSourceSubtree);

    //Compile Shadder
    glSubtree.compileShader(vertexShaderSubtree);
    glSubtree.compileShader(fragmentShaderSubtree);

    //Attach Shadder
    glSubtree.attachShader(programSubtree, vertexShaderSubtree);
    glSubtree.attachShader(programSubtree, fragmentShaderSubtree);

    //Link Shadder
    glSubtree.linkProgram(programSubtree);

    //Bind the buffer
    glSubtree.bindBuffer(glSubtree.ARRAY_BUFFER, vertexBufferSubtree);

    // Create Position Attribute
    positionAttribLocationSubtree = glSubtree.getAttribLocation(programSubtree, "vertPosition");
    glSubtree.vertexAttribPointer(
        positionAttribLocationSubtree,
        3,                                      //3 float per vertex (XYZ)
        glSubtree.FLOAT,
        glSubtree.FALSE,
        9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYZRGBN1N2N3)
        0                                       //Position start from the first element
    );

    // Create Color Attribute
    colorAttribLocationSubtree = glSubtree.getAttribLocation(programSubtree, "vertColor");
    glSubtree.vertexAttribPointer(
        colorAttribLocationSubtree,
        3,                                      //3 float per vertex (RGB)
        glSubtree.FLOAT,
        glSubtree.FALSE,
        9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYZRGBN1N2N3)
        3 * Float32Array.BYTES_PER_ELEMENT      //Color start from the fourth element
    );

    // Create normal attribute
    normalAttribLocationSubtree = glSubtree.getAttribLocation(programSubtree, "a_normal");
    glSubtree.vertexAttribPointer(
        normalAttribLocationSubtree,
        3,                                      //3 float per vertex (N1N2N3)
        glSubtree.FLOAT,
        glSubtree.FALSE,
        9 * Float32Array.BYTES_PER_ELEMENT,     //1 vertex = 9 float (XYRGBN1N2N3)
        6 * Float32Array.BYTES_PER_ELEMENT      //Normals start from the fourth element
    );

    projectionMatrixLocationSubtree = glSubtree.getUniformLocation(programSubtree,"projectionMatrix") // <-- WATCH THIS
    modelMatrixLocationSubtree = glSubtree.getUniformLocation(programSubtree,"modelMatrix")
    viewMatrixLocationSubtree = glSubtree.getUniformLocation(programSubtree,"viewMatrix")

    //Enable the attribute
    glSubtree.enableVertexAttribArray(positionAttribLocationSubtree);
    glSubtree.enableVertexAttribArray(colorAttribLocationSubtree);
    glSubtree.enableVertexAttribArray(normalAttribLocationSubtree);

    if ( !glSubtree.getProgramParameter( programSubtree, glSubtree.LINK_STATUS) ) {
        var infoSubtree = glSubtree.getProgramInfoLog(programSubtree);
        throw new Error('Could not compile WebGL program. \n\n' + infoSubtree);
      }
      

    //Start the program
    glSubtree.useProgram(programSubtree);
}

//Initialize the WebGL
initAll();
initSingle();
initSubtree();
