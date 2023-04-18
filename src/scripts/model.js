const tL = 0.3
const tW = 0.08
const bH = 0.25
const bW = 0.125
const hL = 0.5
const hW = 0.25
const aW = 0.05
const aL = 0.2
const aD = 0.03
const tD = 0.08

const aduduModel = {
    "body":{
        "vertices" : [
            -bW,bH,-bW,  bW,bH,-bW,  bW,bH,bW,  -bW,bH,bW,
            bW,-bH,-bW,  -bW,-bH,-bW,  -bW,-bH,bW, bW,-bH,bW,
            -bW,-bH,bW,  -bW,-bH,-bW,  -bW,bH,-bW,  -bW,bH,bW,
            bW,-bH,-bW,  bW,-bH,bW,  bW,bH,bW,  bW,bH,-bW,
            -bW,-bH,-bW,  bW,-bH,-bW,  bW,bH,-bW,  -bW,bH,-bW,
            bW,-bH,bW,  -bW,-bH,bW,  -bW,bH,bW,  bW,bH,bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [252/255,198/255,42/255]
    },
    "head":{
        "vertices" : [
            -hW,bH+hL,-hW,  hW,bH+hL,-hW,  hW,bH+hL,hW,  -hW,bH+hL,hW,
            hW,bH,-hW,  -hW,bH,-hW,  -hW,bH,hW, hW,bH,hW,
            -hW,bH,hW,  -hW,bH,-hW,  -hW,bH+hL,-hW,  -hW,bH+hL,hW,
            hW,bH,-hW,  hW,bH,hW,  hW,bH+hL,hW,  hW,bH+hL,-hW,
            -hW,bH,-hW,  hW,bH,-hW,  hW,bH+hL,-hW,  -hW,bH+hL,-hW,
            hW,bH,hW,  -hW,bH,hW,  -hW,bH+hL,hW,  hW,bH+hL,hW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [41/255,138/255,130/255]
    },
    "torsoLeft":{
        "vertices" : [
            -bW-tW,bH,-tD,  -bW,bH,-tD,  -bW,bH,tD,  -bW-tW,bH,tD,
            -bW,-bH,-tD,  -bW-tW,-bH,-tD,  -bW-tW,-bH,tD, -bW,-bH,tD,
            -bW-tW,-bH,tD,  -bW-tW,-bH,-tD,  -bW-tW,bH,-tD,  -bW-tW,bH,tD,
            -bW,-bH,-tD,  -bW,-bH,tD,  -bW,bH,tD,  -bW,bH,-tD,
            -bW-tW,-bH,-tD,  -bW,-bH,-tD,  -bW,bH,-tD,  -bW-tW,bH,-tD,
            -bW,-bH,tD,  -bW-tW,-bH,tD,  -bW-tW,bH,tD,  -bW,bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [202/255,135/255,25/255]
    },
    "torsoRight":{
        "vertices" : [
            bW,bH,-tD,  bW+tW,bH,-tD,  bW+tW,bH,tD,  bW,bH,tD,
            bW+tW,-bH,-tD,  bW,-bH,-tD,  bW,-bH,tD, bW+tW,-bH,tD,
            bW,-bH,tD,  bW,-bH,-tD,  bW,bH,-tD,  bW,bH,tD,
            bW+tW,-bH,-tD,  bW+tW,-bH,tD,  bW+tW,bH,tD,  bW+tW,bH,-tD,
            bW,-bH,-tD,  bW+tW,-bH,-tD,  bW+tW,bH,-tD,  bW,bH,-tD,
            bW+tW,-bH,tD,  bW,-bH,tD,  bW,bH,tD,  bW+tW,bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [202/255,135/255,25/255]
    },
    "footLeft":{
        "vertices" : [
            -0.8*bW/2-tW,-bH,-tD,  -0.8*bW/2,-bH,-tD,  -0.8*bW/2,-bH,tD,  -0.8*bW/2-tW,-bH,tD,
            -0.8*bW/2,-bH-tL,-tD,  -0.8*bW/2-tW,-bH-tL,-tD,  -0.8*bW/2-tW,-bH-tL,tD, -0.8*bW/2,-bH-tL,tD,
            -0.8*bW/2-tW,-bH-tL,tD,  -0.8*bW/2-tW,-bH-tL,-tD,  -0.8*bW/2-tW,-bH,-tD,  -0.8*bW/2-tW,-bH,tD,
            -0.8*bW/2,-bH-tL,-tD,  -0.8*bW/2,-bH-tL,tD,  -0.8*bW/2,-bH,tD,  -0.8*bW/2,-bH,-tD,
            -0.8*bW/2-tW,-bH-tL,-tD,  -0.8*bW/2,-bH-tL,-tD,  -0.8*bW/2,-bH,-tD,  -0.8*bW/2-tW,-bH,-tD,
            -0.8*bW/2,-bH-tL,tD,  -0.8*bW/2-tW,-bH-tL,tD,  -0.8*bW/2-tW,-bH,tD,  -0.8*bW/2,-bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [37/255,45/255,53/255]
    },
    "footRight":{
        "vertices" : [
            0.8*bW/2,-bH,-tD,  0.8*bW/2+tW,-bH,-tD,  0.8*bW/2+tW,-bH,tD,  0.8*bW/2,-bH,tD,
            0.8*bW/2+tW,-bH-tL,-tD,  0.8*bW/2,-bH-tL,-tD,  0.8*bW/2,-bH-tL,tD, 0.8*bW/2+tW,-bH-tL,tD,
            0.8*bW/2,-bH-tL,tD,  0.8*bW/2,-bH-tL,-tD,  0.8*bW/2,-bH,-tD,  0.8*bW/2,-bH,tD,
            0.8*bW/2+tW,-bH-tL,-tD,  0.8*bW/2+tW,-bH-tL,tD,  0.8*bW/2+tW,-bH,tD,  0.8*bW/2+tW,-bH,-tD,
            0.8*bW/2,-bH-tL,-tD,  0.8*bW/2+tW,-bH-tL,-tD,  0.8*bW/2+tW,-bH,-tD,  0.8*bW/2,-bH,-tD,
            0.8*bW/2+tW,-bH-tL,tD,  0.8*bW/2,-bH-tL,tD,  0.8*bW/2,-bH,tD,  0.8*bW/2+tW,-bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [37/255,45/255,53/255]
    },
    "antennaLeft":{
        "vertices" : [
            -0.7*hW/2,bH+hL+aL,-aD,  -0.7*hW/2-aW,bH+hL+aL,-aD,  -0.7*hW/2-aW,bH+hL+aL,aD,  -0.7*hW/2,bH+hL+aL,aD,
            -0.7*hW/2-aW,bH+hL,-aD,  -0.7*hW/2,bH+hL,-aD,  -0.7*hW/2,bH+hL,aD, -0.7*hW/2-aW,bH+hL,aD,
            -0.7*hW/2,bH+hL,aD,  -0.7*hW/2,bH+hL,-aD,  -0.7*hW/2,bH+hL+aL,-aD,  -0.7*hW/2,bH+hL+aL,aD,
            -0.7*hW/2-aW,bH+hL,-aD,  -0.7*hW/2-aW,bH+hL,aD,  -0.7*hW/2-aW,bH+hL+aL,aD,  -0.7*hW/2-aW,bH+hL+aL,-aD,
            -0.7*hW/2,bH+hL,-aD,  -0.7*hW/2-aW,bH+hL,-aD,  -0.7*hW/2-aW,bH+hL+aL,-aD,  -0.7*hW/2,bH+hL+aL,-aD,
            -0.7*hW/2-aW,bH+hL,aD,  -0.7*hW/2,bH+hL,aD,  -0.7*hW/2,bH+hL+aL,aD,  -0.7*hW/2-aW,bH+hL+aL,aD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [73/255,181/255,164/255]
    },
    "antennaRight":{
        "vertices" : [
            0.7*hW/2,bH+hL+aL,-aD,  0.7*hW/2+aW,bH+hL+aL,-aD,  0.7*hW/2+aW,bH+hL+aL,aD,  0.7*hW/2,bH+hL+aL,aD,
            0.7*hW/2+aW,bH+hL,-aD,  0.7*hW/2,bH+hL,-aD,  0.7*hW/2,bH+hL,aD, 0.7*hW/2+aW,bH+hL,aD,
            0.7*hW/2,bH+hL,aD,  0.7*hW/2,bH+hL,-aD,  0.7*hW/2,bH+hL+aL,-aD,  0.7*hW/2,bH+hL+aL,aD,
            0.7*hW/2+aW,bH+hL,-aD,  0.7*hW/2+aW,bH+hL,aD,  0.7*hW/2+aW,bH+hL+aL,aD,  0.7*hW/2+aW,bH+hL+aL,-aD,
            0.7*hW/2,bH+hL,-aD,  0.7*hW/2+aW,bH+hL,-aD,  0.7*hW/2+aW,bH+hL+aL,-aD,  0.7*hW/2,bH+hL+aL,-aD,
            0.7*hW/2+aW,bH+hL,aD,  0.7*hW/2,bH+hL,aD,  0.7*hW/2,bH+hL+aL,aD,  0.7*hW/2+aW,bH+hL+aL,aD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [73/255,181/255,164/255]
    }
}

const aduduModel2 = {
    "body":{
        "vertices" : [
            -bW,bH,-bW,  bW,bH,-bW,  bW,bH,bW,  -bW,bH,bW,
            bW,-bH,-bW,  -bW,-bH,-bW,  -bW,-bH,bW, bW,-bH,bW,
            -bW,-bH,bW,  -bW,-bH,-bW,  -bW,bH,-bW,  -bW,bH,bW,
            bW,-bH,-bW,  bW,-bH,bW,  bW,bH,bW,  bW,bH,-bW,
            -bW,-bH,-bW,  bW,-bH,-bW,  bW,bH,-bW,  -bW,bH,-bW,
            bW,-bH,bW,  -bW,-bH,bW,  -bW,bH,bW,  bW,bH,bW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [0/255,0/255,0/255]
    },
    "head":{
        "vertices" : [
            -hW,bH+hL,-hW,  hW,bH+hL,-hW,  hW,bH+hL,hW,  -hW,bH+hL,hW,
            hW,bH,-hW,  -hW,bH,-hW,  -hW,bH,hW, hW,bH,hW,
            -hW,bH,hW,  -hW,bH,-hW,  -hW,bH+hL,-hW,  -hW,bH+hL,hW,
            hW,bH,-hW,  hW,bH,hW,  hW,bH+hL,hW,  hW,bH+hL,-hW,
            -hW,bH,-hW,  hW,bH,-hW,  hW,bH+hL,-hW,  -hW,bH+hL,-hW,
            hW,bH,hW,  -hW,bH,hW,  -hW,bH+hL,hW,  hW,bH+hL,hW
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [41/255,138/255,130/255]
    },
    "torsoLeft":{
        "vertices" : [
            -bW-tW,bH,-tD,  -bW,bH,-tD,  -bW,bH,tD,  -bW-tW,bH,tD,
            -bW,-bH,-tD,  -bW-tW,-bH,-tD,  -bW-tW,-bH,tD, -bW,-bH,tD,
            -bW-tW,-bH,tD,  -bW-tW,-bH,-tD,  -bW-tW,bH,-tD,  -bW-tW,bH,tD,
            -bW,-bH,-tD,  -bW,-bH,tD,  -bW,bH,tD,  -bW,bH,-tD,
            -bW-tW,-bH,-tD,  -bW,-bH,-tD,  -bW,bH,-tD,  -bW-tW,bH,-tD,
            -bW,-bH,tD,  -bW-tW,-bH,tD,  -bW-tW,bH,tD,  -bW,bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [202/255,135/255,25/255]
    },
    "torsoRight":{
        "vertices" : [
            bW,bH,-tD,  bW+tW,bH,-tD,  bW+tW,bH,tD,  bW,bH,tD,
            bW+tW,-bH,-tD,  bW,-bH,-tD,  bW,-bH,tD, bW+tW,-bH,tD,
            bW,-bH,tD,  bW,-bH,-tD,  bW,bH,-tD,  bW,bH,tD,
            bW+tW,-bH,-tD,  bW+tW,-bH,tD,  bW+tW,bH,tD,  bW+tW,bH,-tD,
            bW,-bH,-tD,  bW+tW,-bH,-tD,  bW+tW,bH,-tD,  bW,bH,-tD,
            bW+tW,-bH,tD,  bW,-bH,tD,  bW,bH,tD,  bW+tW,bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [202/255,135/255,25/255]
    },
    "footLeft":{
        "vertices" : [
            -0.8*bW/2-tW,-bH,-tD,  -0.8*bW/2,-bH,-tD,  -0.8*bW/2,-bH,tD,  -0.8*bW/2-tW,-bH,tD,
            -0.8*bW/2,-bH-tL,-tD,  -0.8*bW/2-tW,-bH-tL,-tD,  -0.8*bW/2-tW,-bH-tL,tD, -0.8*bW/2,-bH-tL,tD,
            -0.8*bW/2-tW,-bH-tL,tD,  -0.8*bW/2-tW,-bH-tL,-tD,  -0.8*bW/2-tW,-bH,-tD,  -0.8*bW/2-tW,-bH,tD,
            -0.8*bW/2,-bH-tL,-tD,  -0.8*bW/2,-bH-tL,tD,  -0.8*bW/2,-bH,tD,  -0.8*bW/2,-bH,-tD,
            -0.8*bW/2-tW,-bH-tL,-tD,  -0.8*bW/2,-bH-tL,-tD,  -0.8*bW/2,-bH,-tD,  -0.8*bW/2-tW,-bH,-tD,
            -0.8*bW/2,-bH-tL,tD,  -0.8*bW/2-tW,-bH-tL,tD,  -0.8*bW/2-tW,-bH,tD,  -0.8*bW/2,-bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [37/255,45/255,53/255]
    },
    "footRight":{
        "vertices" : [
            0.8*bW/2,-bH,-tD,  0.8*bW/2+tW,-bH,-tD,  0.8*bW/2+tW,-bH,tD,  0.8*bW/2,-bH,tD,
            0.8*bW/2+tW,-bH-tL,-tD,  0.8*bW/2,-bH-tL,-tD,  0.8*bW/2,-bH-tL,tD, 0.8*bW/2+tW,-bH-tL,tD,
            0.8*bW/2,-bH-tL,tD,  0.8*bW/2,-bH-tL,-tD,  0.8*bW/2,-bH,-tD,  0.8*bW/2,-bH,tD,
            0.8*bW/2+tW,-bH-tL,-tD,  0.8*bW/2+tW,-bH-tL,tD,  0.8*bW/2+tW,-bH,tD,  0.8*bW/2+tW,-bH,-tD,
            0.8*bW/2,-bH-tL,-tD,  0.8*bW/2+tW,-bH-tL,-tD,  0.8*bW/2+tW,-bH,-tD,  0.8*bW/2,-bH,-tD,
            0.8*bW/2+tW,-bH-tL,tD,  0.8*bW/2,-bH-tL,tD,  0.8*bW/2,-bH,tD,  0.8*bW/2+tW,-bH,tD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [37/255,45/255,53/255]
    },
    "antennaLeft":{
        "vertices" : [
            -0.7*hW/2,bH+hL+aL,-aD,  -0.7*hW/2-aW,bH+hL+aL,-aD,  -0.7*hW/2-aW,bH+hL+aL,aD,  -0.7*hW/2,bH+hL+aL,aD,
            -0.7*hW/2-aW,bH+hL,-aD,  -0.7*hW/2,bH+hL,-aD,  -0.7*hW/2,bH+hL,aD, -0.7*hW/2-aW,bH+hL,aD,
            -0.7*hW/2,bH+hL,aD,  -0.7*hW/2,bH+hL,-aD,  -0.7*hW/2,bH+hL+aL,-aD,  -0.7*hW/2,bH+hL+aL,aD,
            -0.7*hW/2-aW,bH+hL,-aD,  -0.7*hW/2-aW,bH+hL,aD,  -0.7*hW/2-aW,bH+hL+aL,aD,  -0.7*hW/2-aW,bH+hL+aL,-aD,
            -0.7*hW/2,bH+hL,-aD,  -0.7*hW/2-aW,bH+hL,-aD,  -0.7*hW/2-aW,bH+hL+aL,-aD,  -0.7*hW/2,bH+hL+aL,-aD,
            -0.7*hW/2-aW,bH+hL,aD,  -0.7*hW/2,bH+hL,aD,  -0.7*hW/2,bH+hL+aL,aD,  -0.7*hW/2-aW,bH+hL+aL,aD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [73/255,181/255,164/255]
    },
    "antennaRight":{
        "vertices" : [
            0.7*hW/2,bH+hL+aL,-aD,  0.7*hW/2+aW,bH+hL+aL,-aD,  0.7*hW/2+aW,bH+hL+aL,aD,  0.7*hW/2,bH+hL+aL,aD,
            0.7*hW/2+aW,bH+hL,-aD,  0.7*hW/2,bH+hL,-aD,  0.7*hW/2,bH+hL,aD, 0.7*hW/2+aW,bH+hL,aD,
            0.7*hW/2,bH+hL,aD,  0.7*hW/2,bH+hL,-aD,  0.7*hW/2,bH+hL+aL,-aD,  0.7*hW/2,bH+hL+aL,aD,
            0.7*hW/2+aW,bH+hL,-aD,  0.7*hW/2+aW,bH+hL,aD,  0.7*hW/2+aW,bH+hL+aL,aD,  0.7*hW/2+aW,bH+hL+aL,-aD,
            0.7*hW/2,bH+hL,-aD,  0.7*hW/2+aW,bH+hL,-aD,  0.7*hW/2+aW,bH+hL+aL,-aD,  0.7*hW/2,bH+hL+aL,-aD,
            0.7*hW/2+aW,bH+hL,aD,  0.7*hW/2,bH+hL,aD,  0.7*hW/2,bH+hL+aL,aD,  0.7*hW/2+aW,bH+hL+aL,aD
        ],
        "normal" : [
            0,1,0,  0,1,0,  0,1,0,  0,1,0,
            0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,
            -1,0,0,  -1,0,0,  -1,0,0,  -1,0,0,
            1,0,0,  1,0,0,  1,0,0,  1,0,0,
            0,0,-1,  0,0,-1,  0,0,-1,  0,0,-1,
            0,0,1,  0,0,1,  0,0,1,  0,0,1
        ],
        "color" : [73/255,181/255,164/255]
    }
}

