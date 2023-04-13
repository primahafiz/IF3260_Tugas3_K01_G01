const tL = 0.3
const tW = 0.2
const bH = 0.3
const bW = 0.2
const hL = 0.2
const hW = 0.2
const aW = 0.1

const aduduModel = {
    "body":{
        "vertices" : [
            -bW,bH,-bW,  bW,bH,-bW,  bW,bH,bW,  -bW,bH,bW,
            bW,-bH,-bW,  -bW,-bH,-bW,  -bW,-bH,bW, bW,-bH,bW,
            -bW,-bH,bW,  -bW,-bH,-bW,  -bW,bH,-bW,  -bW,bH,bW,
            bW,-bH,-bW,  bW,-bH,bW,  bW,bH,bW,  bW,bH,-bW,
            -bW,-bH,-bW,  bW,-bH,-bW,  bW,bH,-bW,  -bW,bH,-bW,
            bW,-bH,-bW,  -bW,-bH,-bW,  -bW,bH,-bW,  bW,bH,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [252/255,198/255,42/255]
    },
    "head":{
        "vertices" : [
            -bW,bH+bW,-bW,  bW,bH+bW,-bW,  bW,bH+bW,bW,  -bW,bH+bW,bW,
            bW,bH,-bW,  -bW,bH,-bW,  -bW,bH,bW, bW,bH,bW,
            -bW,bH,bW,  -bW,bH,-bW,  -bW,bH+bW,-bW,  -bW,bH+bW,bW,
            bW,bH,-bW,  bW,bH,bW,  bW,bH+bW,bW,  bW,bH+bW,-bW,
            -bW,bH,-bW,  bW,bH,-bW,  bW,bH+bW,-bW,  -bW,bH+bW,-bW,
            bW,bH,-bW,  -bW,bH,-bW,  -bW,bH+bW,-bW,  bW,bH+bW,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [41/255,138/255,130/255]
    },
    "torsoLeft":{
        "vertices" : [
            -bW-tW,bH,-bW,  -bW,bH,-bW,  -bW,bH,bW,  -bW-tW,bH,bW,
            -bW,-bH,-bW,  -bW-tW,-bH,-bW,  -bW-tW,-bH,bW, -bW,-bH,bW,
            -bW-tW,-bH,bW,  -bW-tW,-bH,-bW,  -bW-tW,bH,-bW,  -bW-tW,bH,bW,
            -bW,-bH,-bW,  -bW,-bH,bW,  -bW,bH,bW,  -bW,bH,-bW,
            -bW-tW,-bH,-bW,  -bW,-bH,-bW,  -bW,bH,-bW,  -bW-tW,bH,-bW,
            -bW,-bH,-bW,  -bW-tW,-bH,-bW,  -bW-tW,bH,-bW,  -bW,bH,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [202/255,135/255,25/255]
    },
    "torsoRight":{
        "vertices" : [
            bW,bH,-bW,  bW+tW,bH,-bW,  bW+tW,bH,bW,  bW,bH,bW,
            bW+tW,-bH,-bW,  bW,-bH,-bW,  bW,-bH,bW, bW+tW,-bH,bW,
            bW,-bH,bW,  bW,-bH,-bW,  bW,bH,-bW,  bW,bH,bW,
            bW+tW,-bH,-bW,  bW+tW,-bH,bW,  bW+tW,bH,bW,  bW+tW,bH,-bW,
            bW,-bH,-bW,  bW+tW,-bH,-bW,  bW+tW,bH,-bW,  bW,bH,-bW,
            bW+tW,-bH,-bW,  bW,-bH,-bW,  bW,bH,-bW,  bW+tW,bH,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [202/255,135/255,25/255]
    },
    "footLeft":{
        "vertices" : [
            -bW/2,-bH,-bW,  -bW/2+tW,-bH,-bW,  -bW/2+tW,-bH,bW,  -bW/2,-bH,bW,
            -bW/2+tW,-bH-tL,-bW,  -bW/2,-bH-tL,-bW,  -bW/2,-bH-tL,bW, -bW/2+tW,-bH-tL,bW,
            -bW/2,-bH-tL,bW,  -bW/2,-bH-tL,-bW,  -bW/2,-bH,-bW,  -bW/2,-bH,bW,
            -bW/2+tW,-bH-tL,-bW,  -bW/2+tW,-bH-tL,bW,  -bW/2+tW,-bH,bW,  -bW/2+tW,-bH,-bW,
            -bW/2,-bH-tL,-bW,  -bW/2+tW,-bH-tL,-bW,  -bW/2+tW,-bH,-bW,  -bW/2,-bH,-bW,
            -bW/2+tW,-bH-tL,-bW,  -bW/2,-bH-tL,-bW,  -bW/2,-bH,-bW,  -bW/2+tW,-bH,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [37/255,45/255,53/255]
    },
    "footRight":{
        "vertices" : [
            bW/2,-bH,-bW,  bW/2+tW,-bH,-bW,  bW/2+tW,-bH,bW,  bW/2,-bH,bW,
            bW/2+tW,-bH-tL,-bW,  bW/2,-bH-tL,-bW,  bW/2,-bH-tL,bW, bW/2+tW,-bH-tL,bW,
            bW/2,-bH-tL,bW,  bW/2,-bH-tL,-bW,  bW/2,-bH,-bW,  bW/2,-bH,bW,
            bW/2+tW,-bH-tL,-bW,  bW/2+tW,-bH-tL,bW,  bW/2+tW,-bH,bW,  bW/2+tW,-bH,-bW,
            bW/2,-bH-tL,-bW,  bW/2+tW,-bH-tL,-bW,  bW/2+tW,-bH,-bW,  bW/2,-bH,-bW,
            bW/2+tW,-bH-tL,-bW,  bW/2,-bH-tL,-bW,  bW/2,-bH,-bW,  bW/2+tW,-bH,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [37/255,45/255,53/255]
    },
    "antennaLeft":{
        "vertices" : [
            -bW/2,bH+bW+tL,-bW,  -bW/2+tW,bH+bW+tL,-bW,  -bW/2+tW,bH+bW+tL,bW,  -bW/2,bH+bW+tL,bW,
            -bW/2+tW,bH+bW,-bW,  -bW/2,bH+bW,-bW,  -bW/2,bH+bW,bW, -bW/2+tW,bH+bW,bW,
            -bW/2,bH+bW,bW,  -bW/2,bH+bW,-bW,  -bW/2,bH+bW+tL,-bW,  -bW/2,bH+bW+tL,bW,
            -bW/2+tW,bH+bW,-bW,  -bW/2+tW,bH+bW,bW,  -bW/2+tW,bH+bW+tL,bW,  -bW/2+tW,bH+bW+tL,-bW,
            -bW/2,bH+bW,-bW,  -bW/2+tW,bH+bW,-bW,  -bW/2+tW,bH+bW+tL,-bW,  -bW/2,bH+bW+tL,-bW,
            -bW/2+tW,bH+bW,-bW,  -bW/2,bH+bW,-bW,  -bW/2,bH+bW+tL,-bW,  -bW/2+tW,bH+bW,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [12/255,48/255,50/255]
    },
    "antennaRight":{
        "vertices" : [
            bW/2,bH+bW+tL,-bW,  bW/2+tW,bH+bW+tL,-bW,  bW/2+tW,bH+bW+tL,bW,  bW/2,bH+bW+tL,bW,
            bW/2+tW,bH+bW,-bW,  bW/2,bH+bW,-bW,  bW/2,bH+bW,bW, bW/2+tW,bH+bW,bW,
            bW/2,bH+bW,bW,  bW/2,bH+bW,-bW,  bW/2,bH+bW+tL,-bW,  bW/2,bH+bW+tL,bW,
            bW/2+tW,bH+bW,-bW,  bW/2+tW,bH+bW,bW,  bW/2+tW,bH+bW+tL,bW,  bW/2+tW,bH+bW+tL,-bW,
            bW/2,bH+bW,-bW,  bW/2+tW,bH+bW,-bW,  bW/2+tW,bH+bW+tL,-bW,  bW/2,bH+bW+tL,-bW,
            bW/2+tW,bH+bW,-bW,  bW/2,bH+bW,-bW,  bW/2,bH+bW+tL,-bW,  bW/2+tW,bH+bW,-bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0  -1,0,0  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [12/255,48/255,50/255]
    }
}