## Cara nambahin model baru yes

1. Bikin object model di `src/scripts/model.js`
Di sini list semua shape yang bakal ada di model berbentuk json
```json
const placeholder_name = {
    "placeholder_shape_name_1": {
        "vertices" : [
            // list of vertices
        ],
        "normal" : [
            // list of normals
        ],
        "color" : [
            // list of color in RGB format, X/255 for each where X is the value of the color, for example
            255/255,
            255/255,
            255/255 
            // makes it white
        ]
    },
    "placeholder_shape_name_2": {
        // ...
    }
}
```

2. Initiate model di `src/scripts/modelLoader.js`
```js
// di paling atas tambahin
var placeholder_model_id

function init_placeholder_shape(){
    let root_shape = new Shape(
        // shape params
    )
    let placeholder_shape_2 = new Shape(
        // shape params
    )
    placeholder_model_id = root_shape.id
    modelIds['placeholder'] = placeholder_model_id

    root_shape.addChild(placeholder_shape_2)

    shapes[root_shape.id] = root_shape
    shapes[placeholder_shape_2.id] = placeholder_shape_2
}

// di initModels tambahin
function initModels(){
    // previous models
    init_placeholder_shape()
}
```

3. Tambahin option di index.html
```html
                <!-- Sekitar line 21 -->
                <select id="objectlist" name="objectlist" onchange="updateObjectChosen()">
                    <!-- Previous values-->
                    <option value="placeholder">placeholder</option> 
                    <!-- valuenya berupa key di modelIds -->
                </select>
```