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

## Cara nambahin animasi buat model baru yes
1. Bikin object animasi di `src/scripts/animations.js`
```js
const placeholderAnim = {
    "model_id": "{insert your model id name here}",
    "second_between_frames": {time between frames in seconds},
    "frames": 
    [
        [],
        [],
        []
    ]
}
```
Karena gamungkin sempet nerapin bonus, kyknya cuman bisa standar waktu antar frame aja. Jadi kalo mau bikin animasi yang lebih smooth, harus bikin frame yang lebih banyak. 

model_id itu yang diset di atas, misalnya tadi model placeholder itu di kode `modelIds['placeholder'] = placeholder_model_id` punya id 'placeholder'

2. tambahin di animations di `src/scripts/animation.js`
```js
const animations = {
    "pig_example": pigExampleAnim
    // add here, for example
    "placeholder": placeholderAnim
}

```

3. Play lewat console, karena sementara blm ada UI buat ngeplay animasi
```bash
playAnimation('placeholder')
```

4. Tambahin animation di index.html
```html
            <!-- Sekitar line 166 -->
            <b>Animations</b>
            <div>
                <select id="animation_selector" name="animation_selector" onchange="updateAnimationChosen()">
                    <option value="pig_walk" selected>Pig Walk</option>
                    <!-- Tambahin animasi di sini, misalnya -->
                    <option value="placeholder">Placeholder</option>
                </select>
                <button id="playAnimBtn" onclick="playAnimation(animationChosen)">Play</button>
            </div>
            </br>
```