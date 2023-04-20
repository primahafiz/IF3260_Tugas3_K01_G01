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
    "body": {
        "vertices": [
            -bW, bH, -bW, bW, bH, -bW, bW, bH, bW, -bW, bH, bW,
            bW, -bH, -bW, -bW, -bH, -bW, -bW, -bH, bW, bW, -bH, bW,
            -bW, -bH, bW, -bW, -bH, -bW, -bW, bH, -bW, -bW, bH, bW,
            bW, -bH, -bW, bW, -bH, bW, bW, bH, bW, bW, bH, -bW,
            -bW, -bH, -bW, bW, -bH, -bW, bW, bH, -bW, -bW, bH, -bW,
            bW, -bH, bW, -bW, -bH, bW, -bW, bH, bW, bW, bH, bW
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [252 / 255, 198 / 255, 42 / 255]
    },
    "head": {
        "vertices": [
            -hW, bH + hL, -hW, hW, bH + hL, -hW, hW, bH + hL, hW, -hW, bH + hL, hW,
            hW, bH, -hW, -hW, bH, -hW, -hW, bH, hW, hW, bH, hW,
            -hW, bH, hW, -hW, bH, -hW, -hW, bH + hL, -hW, -hW, bH + hL, hW,
            hW, bH, -hW, hW, bH, hW, hW, bH + hL, hW, hW, bH + hL, -hW,
            -hW, bH, -hW, hW, bH, -hW, hW, bH + hL, -hW, -hW, bH + hL, -hW,
            hW, bH, hW, -hW, bH, hW, -hW, bH + hL, hW, hW, bH + hL, hW
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [41 / 255, 138 / 255, 130 / 255]
    },
    "torsoLeft": {
        "vertices": [
            -bW - tW, bH, -tD, -bW, bH, -tD, -bW, bH, tD, -bW - tW, bH, tD,
            -bW, -bH, -tD, -bW - tW, -bH, -tD, -bW - tW, -bH, tD, -bW, -bH, tD,
            -bW - tW, -bH, tD, -bW - tW, -bH, -tD, -bW - tW, bH, -tD, -bW - tW, bH, tD,
            -bW, -bH, -tD, -bW, -bH, tD, -bW, bH, tD, -bW, bH, -tD,
            -bW - tW, -bH, -tD, -bW, -bH, -tD, -bW, bH, -tD, -bW - tW, bH, -tD,
            -bW, -bH, tD, -bW - tW, -bH, tD, -bW - tW, bH, tD, -bW, bH, tD
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [202 / 255, 135 / 255, 25 / 255]
    },
    "torsoRight": {
        "vertices": [
            bW, bH, -tD, bW + tW, bH, -tD, bW + tW, bH, tD, bW, bH, tD,
            bW + tW, -bH, -tD, bW, -bH, -tD, bW, -bH, tD, bW + tW, -bH, tD,
            bW, -bH, tD, bW, -bH, -tD, bW, bH, -tD, bW, bH, tD,
            bW + tW, -bH, -tD, bW + tW, -bH, tD, bW + tW, bH, tD, bW + tW, bH, -tD,
            bW, -bH, -tD, bW + tW, -bH, -tD, bW + tW, bH, -tD, bW, bH, -tD,
            bW + tW, -bH, tD, bW, -bH, tD, bW, bH, tD, bW + tW, bH, tD
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [202 / 255, 135 / 255, 25 / 255]
    },
    "footLeft": {
        "vertices": [
            -0.8 * bW / 2 - tW, -bH, -tD, -0.8 * bW / 2, -bH, -tD, -0.8 * bW / 2, -bH, tD, -0.8 * bW / 2 - tW, -bH, tD,
            -0.8 * bW / 2, -bH - tL, -tD, -0.8 * bW / 2 - tW, -bH - tL, -tD, -0.8 * bW / 2 - tW, -bH - tL, tD, -0.8 * bW / 2, -bH - tL, tD,
            -0.8 * bW / 2 - tW, -bH - tL, tD, -0.8 * bW / 2 - tW, -bH - tL, -tD, -0.8 * bW / 2 - tW, -bH, -tD, -0.8 * bW / 2 - tW, -bH, tD,
            -0.8 * bW / 2, -bH - tL, -tD, -0.8 * bW / 2, -bH - tL, tD, -0.8 * bW / 2, -bH, tD, -0.8 * bW / 2, -bH, -tD,
            -0.8 * bW / 2 - tW, -bH - tL, -tD, -0.8 * bW / 2, -bH - tL, -tD, -0.8 * bW / 2, -bH, -tD, -0.8 * bW / 2 - tW, -bH, -tD,
            -0.8 * bW / 2, -bH - tL, tD, -0.8 * bW / 2 - tW, -bH - tL, tD, -0.8 * bW / 2 - tW, -bH, tD, -0.8 * bW / 2, -bH, tD
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [37 / 255, 45 / 255, 53 / 255]
    },
    "footRight": {
        "vertices": [
            0.8 * bW / 2, -bH, -tD, 0.8 * bW / 2 + tW, -bH, -tD, 0.8 * bW / 2 + tW, -bH, tD, 0.8 * bW / 2, -bH, tD,
            0.8 * bW / 2 + tW, -bH - tL, -tD, 0.8 * bW / 2, -bH - tL, -tD, 0.8 * bW / 2, -bH - tL, tD, 0.8 * bW / 2 + tW, -bH - tL, tD,
            0.8 * bW / 2, -bH - tL, tD, 0.8 * bW / 2, -bH - tL, -tD, 0.8 * bW / 2, -bH, -tD, 0.8 * bW / 2, -bH, tD,
            0.8 * bW / 2 + tW, -bH - tL, -tD, 0.8 * bW / 2 + tW, -bH - tL, tD, 0.8 * bW / 2 + tW, -bH, tD, 0.8 * bW / 2 + tW, -bH, -tD,
            0.8 * bW / 2, -bH - tL, -tD, 0.8 * bW / 2 + tW, -bH - tL, -tD, 0.8 * bW / 2 + tW, -bH, -tD, 0.8 * bW / 2, -bH, -tD,
            0.8 * bW / 2 + tW, -bH - tL, tD, 0.8 * bW / 2, -bH - tL, tD, 0.8 * bW / 2, -bH, tD, 0.8 * bW / 2 + tW, -bH, tD
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [37 / 255, 45 / 255, 53 / 255]
    },
    "antennaLeft": {
        "vertices": [
            -0.7 * hW / 2, bH + hL + aL, -aD, -0.7 * hW / 2 - aW, bH + hL + aL, -aD, -0.7 * hW / 2 - aW, bH + hL + aL, aD, -0.7 * hW / 2, bH + hL + aL, aD,
            -0.7 * hW / 2 - aW, bH + hL, -aD, -0.7 * hW / 2, bH + hL, -aD, -0.7 * hW / 2, bH + hL, aD, -0.7 * hW / 2 - aW, bH + hL, aD,
            -0.7 * hW / 2, bH + hL, aD, -0.7 * hW / 2, bH + hL, -aD, -0.7 * hW / 2, bH + hL + aL, -aD, -0.7 * hW / 2, bH + hL + aL, aD,
            -0.7 * hW / 2 - aW, bH + hL, -aD, -0.7 * hW / 2 - aW, bH + hL, aD, -0.7 * hW / 2 - aW, bH + hL + aL, aD, -0.7 * hW / 2 - aW, bH + hL + aL, -aD,
            -0.7 * hW / 2, bH + hL, -aD, -0.7 * hW / 2 - aW, bH + hL, -aD, -0.7 * hW / 2 - aW, bH + hL + aL, -aD, -0.7 * hW / 2, bH + hL + aL, -aD,
            -0.7 * hW / 2 - aW, bH + hL, aD, -0.7 * hW / 2, bH + hL, aD, -0.7 * hW / 2, bH + hL + aL, aD, -0.7 * hW / 2 - aW, bH + hL + aL, aD
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [73 / 255, 181 / 255, 164 / 255]
    },
    "antennaRight": {
        "vertices": [
            0.7 * hW / 2, bH + hL + aL, -aD, 0.7 * hW / 2 + aW, bH + hL + aL, -aD, 0.7 * hW / 2 + aW, bH + hL + aL, aD, 0.7 * hW / 2, bH + hL + aL, aD,
            0.7 * hW / 2 + aW, bH + hL, -aD, 0.7 * hW / 2, bH + hL, -aD, 0.7 * hW / 2, bH + hL, aD, 0.7 * hW / 2 + aW, bH + hL, aD,
            0.7 * hW / 2, bH + hL, aD, 0.7 * hW / 2, bH + hL, -aD, 0.7 * hW / 2, bH + hL + aL, -aD, 0.7 * hW / 2, bH + hL + aL, aD,
            0.7 * hW / 2 + aW, bH + hL, -aD, 0.7 * hW / 2 + aW, bH + hL, aD, 0.7 * hW / 2 + aW, bH + hL + aL, aD, 0.7 * hW / 2 + aW, bH + hL + aL, -aD,
            0.7 * hW / 2, bH + hL, -aD, 0.7 * hW / 2 + aW, bH + hL, -aD, 0.7 * hW / 2 + aW, bH + hL + aL, -aD, 0.7 * hW / 2, bH + hL + aL, -aD,
            0.7 * hW / 2 + aW, bH + hL, aD, 0.7 * hW / 2, bH + hL, aD, 0.7 * hW / 2, bH + hL + aL, aD, 0.7 * hW / 2 + aW, bH + hL + aL, aD
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [73 / 255, 181 / 255, 164 / 255]
    }
}

const pig_bW = 0.4;
const pig_bH = 0.2;
const pig_hW = 0.42;
const pig_hH = 0.21;
const pig_sW = 0.1;
const pig_sH = 0.05;
const pig_fH = 0.14;
const pig_fW = 0.18;

const pigModel = {
    "body": {
        "vertices": [
            -pig_bW / 2, pig_bH, -pig_bW, pig_bW / 2, pig_bH, -pig_bW, pig_bW / 2, pig_bH, pig_bW, -pig_bW / 2, pig_bH, pig_bW,
            pig_bW / 2, -pig_bH, -pig_bW, -pig_bW / 2, -pig_bH, -pig_bW, -pig_bW / 2, -pig_bH, pig_bW, pig_bW / 2, -pig_bH, pig_bW,
            -pig_bW / 2, -pig_bH, pig_bW, -pig_bW / 2, -pig_bH, -pig_bW, -pig_bW / 2, pig_bH, -pig_bW, -pig_bW / 2, pig_bH, pig_bW,
            pig_bW / 2, -pig_bH, -pig_bW, pig_bW / 2, -pig_bH, pig_bW, pig_bW / 2, pig_bH, pig_bW, pig_bW / 2, pig_bH, -pig_bW,
            -pig_bW / 2, -pig_bH, -pig_bW, pig_bW / 2, -pig_bH, -pig_bW, pig_bW / 2, pig_bH, -pig_bW, -pig_bW / 2, pig_bH, -pig_bW,
            pig_bW / 2, -pig_bH, pig_bW, -pig_bW / 2, -pig_bH, pig_bW, -pig_bW / 2, pig_bH, pig_bW, pig_bW / 2, pig_bH, pig_bW
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [210 / 255, 143 / 255, 146 / 255]
        // rgb(210, 143, 146)
    },
    "head": {
        "vertices": [
            -pig_hW / 2, pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2),
            pig_hW / 2, -pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, -pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, -pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, -pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2),
            -pig_hW / 2, -pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, -pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2),
            pig_hW / 2, -pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, -pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2),
            -pig_hW / 2, -pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, -pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, pig_hH + (3 * pig_bH / 5), -pig_hW / 2 - (pig_bW * 1.2),
            pig_hW / 2, -pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, -pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), -pig_hW / 2, pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2), pig_hW / 2, pig_hH + (3 * pig_bH / 5), pig_hW / 2 - (pig_bW * 1.2)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [218 / 255, 117 / 255, 131 / 255]
        // rgb(218, 117, 131)
    },
    "snot": {
        "vertices": [
            -pig_sW, pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2),
            pig_sW, -pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, -pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, -pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, -pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2),
            -pig_sW, -pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, -pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2),
            pig_sW, -pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, -pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2),
            -pig_sW, -pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, -pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, pig_sH + (0.8 * pig_bH / 2), -pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2),
            pig_sW, -pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, -pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), -pig_sW, pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2), pig_sW, pig_sH + (0.8 * pig_bH / 2), pig_sW / 2 - (pig_hW / 2 + pig_bW * 1.2)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [219 / 255, 180 / 255, 188 / 255]
        // rgb(219, 180, 188)
    },
    "front_right_foot": {
        "vertices": [
            -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2),
            pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2),
            -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2),
            pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2),
            -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2),
            pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [213 / 255, 107 / 255, 107 / 255]
        //rgb(213, 107, 107)
    },
    "front_left_foot": {
        "vertices": [
            -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2),
            pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2),
            -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2),
            pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2),
            -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 - (pig_bW - pig_fW / 2),
            pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 - (pig_bW - pig_fW / 2)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [213 / 255, 107 / 255, 107 / 255]
        //rgb(213, 107, 107)
    },
    "back_right_foot": {
        "vertices": [
            -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2),
            pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2),
            -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2),
            pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2),
            -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2),
            pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 - (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [213 / 255, 107 / 255, 107 / 255]
        //rgb(213, 107, 107)
    },
    "back_left_foot": {
        "vertices": [
            -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2),
            pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2),
            -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2),
            pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2),
            -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), -pig_fW / 2 + (pig_bW - pig_fW / 2),
            pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), -pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), -pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2), pig_fW / 2 + (pig_bW / 2 - pig_fW / 2), pig_fH - (pig_bH + pig_fH), pig_fW / 2 + (pig_bW - pig_fW / 2)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [213 / 255, 107 / 255, 107 / 255]
        //rgb(213, 107, 107)
    }

}

const bodyHeight = 0.4
const bodyWidth = 0.2
const bodyLength = 0.15

const headHeight = 0.25
const headWidth = 0.2
const headLength = 0.4

const torsoLength = 0.5
const torsoWidth = 0.2
const torsoDepth = 0.15


const steveModel = {
    "head": {
        "vertices": [
            -headWidth, bodyHeight + headLength, -headHeight,
            headWidth, bodyHeight + headLength, -headHeight,
            headWidth, bodyHeight + headLength, headHeight,
            -headWidth, bodyHeight + headLength, headHeight,

            headWidth, bodyHeight, -headHeight,
            -headWidth, bodyHeight, -headHeight,
            -headWidth, bodyHeight, headHeight,
            headWidth, bodyHeight, headHeight,

            -headWidth, bodyHeight, headHeight,
            -headWidth, bodyHeight, -headHeight,
            -headWidth, bodyHeight + headLength, -headHeight,
            -headWidth, bodyHeight + headLength, headHeight,

            headWidth, bodyHeight, -headHeight,
            headWidth, bodyHeight, headHeight,
            headWidth, bodyHeight + headLength, headHeight,
            headWidth, bodyHeight + headLength, -headHeight,

            -headWidth, bodyHeight, -headHeight,
            headWidth, bodyHeight, -headHeight,
            headWidth, bodyHeight + headLength, -headHeight,
            -headWidth, bodyHeight + headLength, -headHeight,

            headWidth, bodyHeight, headHeight,
            -headWidth, bodyHeight, headHeight,
            -headWidth, bodyHeight + headLength, headHeight,
            headWidth, bodyHeight + headLength, headHeight
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [169 / 255, 125 / 255, 100 / 255]
        // (169,125,100)
    },
    "body": {
        "vertices": [
            -bodyWidth, bodyHeight, -bodyLength, bodyWidth, bodyHeight, -bodyLength, bodyWidth, bodyHeight, bodyLength, -bodyWidth, bodyHeight, bodyLength,
            bodyWidth, -bodyHeight, -bodyLength, -bodyWidth, -bodyHeight, -bodyLength, -bodyWidth, -bodyHeight, bodyLength, bodyWidth, -bodyHeight, bodyLength,
            -bodyWidth, -bodyHeight, bodyLength, -bodyWidth, -bodyHeight, -bodyLength, -bodyWidth, bodyHeight, -bodyLength, -bodyWidth, bodyHeight, bodyLength,
            bodyWidth, -bodyHeight, -bodyLength, bodyWidth, -bodyHeight, bodyLength, bodyWidth, bodyHeight, bodyLength, bodyWidth, bodyHeight, -bodyLength,
            -bodyWidth, -bodyHeight, -bodyLength, bodyWidth, -bodyHeight, -bodyLength, bodyWidth, bodyHeight, -bodyLength, -bodyWidth, bodyHeight, -bodyLength,
            bodyWidth, -bodyHeight, bodyLength, -bodyWidth, -bodyHeight, bodyLength, -bodyWidth, bodyHeight, bodyLength, bodyWidth, bodyHeight, bodyLength
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [14 / 255, 174 / 255, 174 / 255]
        // (14,174,174)
    },
    "torsoLeft": {
        "vertices": [
            -bodyWidth - torsoWidth, bodyHeight, -torsoDepth, -bodyWidth, bodyHeight, -torsoDepth, -bodyWidth, bodyHeight, torsoDepth, -bodyWidth - torsoWidth, bodyHeight, torsoDepth,
            -bodyWidth, -bodyHeight, -torsoDepth, -bodyWidth - torsoWidth, -bodyHeight, -torsoDepth, -bodyWidth - torsoWidth, -bodyHeight, torsoDepth, -bodyWidth, -bodyHeight, torsoDepth,
            -bodyWidth - torsoWidth, -bodyHeight, torsoDepth, -bodyWidth - torsoWidth, -bodyHeight, -torsoDepth, -bodyWidth - torsoWidth, bodyHeight, -torsoDepth, -bodyWidth - torsoWidth, bodyHeight, torsoDepth,
            -bodyWidth, -bodyHeight, -torsoDepth, -bodyWidth, -bodyHeight, torsoDepth, -bodyWidth, bodyHeight, torsoDepth, -bodyWidth, bodyHeight, -torsoDepth,
            -bodyWidth - torsoWidth, -bodyHeight, -torsoDepth, -bodyWidth, -bodyHeight, -torsoDepth, -bodyWidth, bodyHeight, -torsoDepth, -bodyWidth - torsoWidth, bodyHeight, -torsoDepth,
            -bodyWidth, -bodyHeight, torsoDepth, -bodyWidth - torsoWidth, -bodyHeight, torsoDepth, -bodyWidth - torsoWidth, bodyHeight, torsoDepth, -bodyWidth, bodyHeight, torsoDepth
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [169 / 255, 125 / 255, 100 / 255]
    },
    "torsoRight": {
        "vertices": [
            bodyWidth, bodyHeight, -torsoDepth, bodyWidth + torsoWidth, bodyHeight, -torsoDepth, bodyWidth + torsoWidth, bodyHeight, torsoDepth, bodyWidth, bodyHeight, torsoDepth,
            bodyWidth + torsoWidth, -bodyHeight, -torsoDepth, bodyWidth, -bodyHeight, -torsoDepth, bodyWidth, -bodyHeight, torsoDepth, bodyWidth + torsoWidth, -bodyHeight, torsoDepth,
            bodyWidth, -bodyHeight, torsoDepth, bodyWidth, -bodyHeight, -torsoDepth, bodyWidth, bodyHeight, -torsoDepth, bodyWidth, bodyHeight, torsoDepth,
            bodyWidth + torsoWidth, -bodyHeight, -torsoDepth, bodyWidth + torsoWidth, -bodyHeight, torsoDepth, bodyWidth + torsoWidth, bodyHeight, torsoDepth, bodyWidth + torsoWidth, bodyHeight, -torsoDepth,
            bodyWidth, -bodyHeight, -torsoDepth, bodyWidth + torsoWidth, -bodyHeight, -torsoDepth, bodyWidth + torsoWidth, bodyHeight, -torsoDepth, bodyWidth, bodyHeight, -torsoDepth,
            bodyWidth + torsoWidth, -bodyHeight, torsoDepth, bodyWidth, -bodyHeight, torsoDepth, bodyWidth, bodyHeight, torsoDepth, bodyWidth + torsoWidth, bodyHeight, torsoDepth
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [169 / 255, 125 / 255, 100 / 255]
    },
    "footLeft": {
        "vertices": [
            -bodyWidth / 100 - torsoWidth, -bodyHeight, -torsoDepth, -bodyWidth / 100, -bodyHeight, -torsoDepth, -bodyWidth / 100, -bodyHeight, torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight, torsoDepth,
            -bodyWidth / 100, -bodyHeight - torsoLength, -torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight - torsoLength, -torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight - torsoLength, torsoDepth, -bodyWidth / 100, -bodyHeight - torsoLength, torsoDepth,
            -bodyWidth / 100 - torsoWidth, -bodyHeight - torsoLength, torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight - torsoLength, -torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight, -torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight, torsoDepth,
            -bodyWidth / 100, -bodyHeight - torsoLength, -torsoDepth, -bodyWidth / 100, -bodyHeight - torsoLength, torsoDepth, -bodyWidth / 100, -bodyHeight, torsoDepth, -bodyWidth / 100, -bodyHeight, -torsoDepth,
            -bodyWidth / 100 - torsoWidth, -bodyHeight - torsoLength, -torsoDepth, -bodyWidth / 100, -bodyHeight - torsoLength, -torsoDepth, -bodyWidth / 100, -bodyHeight, -torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight, -torsoDepth,
            -bodyWidth / 100, -bodyHeight - torsoLength, torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight - torsoLength, torsoDepth, -bodyWidth / 100 - torsoWidth, -bodyHeight, torsoDepth, -bodyWidth / 100, -bodyHeight, torsoDepth
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [73 / 255, 70 / 255, 151 / 255]
        // (73,70,151)
    },
    "footRight": {
        "vertices": [
            bodyWidth / 100, -bodyHeight, -torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight, -torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight, torsoDepth, bodyWidth / 100, -bodyHeight, torsoDepth,
            bodyWidth / 100 + torsoWidth, -bodyHeight - torsoLength, -torsoDepth, bodyWidth / 100, -bodyHeight - torsoLength, -torsoDepth, bodyWidth / 100, -bodyHeight - torsoLength, torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight - torsoLength, torsoDepth,
            bodyWidth / 100, -bodyHeight - torsoLength, torsoDepth, bodyWidth / 100, -bodyHeight - torsoLength, -torsoDepth, bodyWidth / 100, -bodyHeight, -torsoDepth, bodyWidth / 100, -bodyHeight, torsoDepth,
            bodyWidth / 100 + torsoWidth, -bodyHeight - torsoLength, -torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight - torsoLength, torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight, torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight, -torsoDepth,
            bodyWidth / 100, -bodyHeight - torsoLength, -torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight - torsoLength, -torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight, -torsoDepth, bodyWidth / 100, -bodyHeight, -torsoDepth,
            bodyWidth / 100 + torsoWidth, -bodyHeight - torsoLength, torsoDepth, bodyWidth / 100, -bodyHeight - torsoLength, torsoDepth, bodyWidth / 100, -bodyHeight, torsoDepth, bodyWidth / 100 + torsoWidth, -bodyHeight, torsoDepth
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [73 / 255, 70 / 255, 151 / 255]
    },
}

const kepalaHeight = 0.3;
const kepalaWeight = 0.3;
const kepalaDepth = 0.7
const badanKeretaHeight = 0.2;
const badanKeretaWeight = 0.7;
const badanKeretaDepth = 0.9;
const rodaKotakHeight = 0.1;
const rodaKotakWeight = 0.3;
const ekorHeight = 0.2;
const ekorWeight = 0.8;

const keretaModel = {
    "body": {
        "vertices": [
            -badanKeretaWeight / 4, badanKeretaHeight, -badanKeretaWeight, badanKeretaWeight / 4, badanKeretaHeight, -badanKeretaWeight, badanKeretaWeight / 4, badanKeretaHeight, badanKeretaWeight, -badanKeretaWeight / 4, badanKeretaHeight, badanKeretaWeight,
            badanKeretaWeight / 4, -badanKeretaHeight, -badanKeretaWeight, -badanKeretaWeight / 4, -badanKeretaHeight, -badanKeretaWeight, -badanKeretaWeight / 4, -badanKeretaHeight, badanKeretaWeight, badanKeretaWeight / 4, -badanKeretaHeight, badanKeretaWeight,
            -badanKeretaWeight / 4, -badanKeretaHeight, badanKeretaWeight, -badanKeretaWeight / 4, -badanKeretaHeight, -badanKeretaWeight, -badanKeretaWeight / 4, badanKeretaHeight, -badanKeretaWeight, -badanKeretaWeight / 4, badanKeretaHeight, badanKeretaWeight,
            badanKeretaWeight / 4, -badanKeretaHeight, -badanKeretaWeight, badanKeretaWeight / 4, -badanKeretaHeight, badanKeretaWeight, badanKeretaWeight / 4, badanKeretaHeight, badanKeretaWeight, badanKeretaWeight / 4, badanKeretaHeight, -badanKeretaWeight,
            -badanKeretaWeight / 4, -badanKeretaHeight, -badanKeretaWeight, badanKeretaWeight / 4, -badanKeretaHeight, -badanKeretaWeight, badanKeretaWeight / 4, badanKeretaHeight, -badanKeretaWeight, -badanKeretaWeight / 4, badanKeretaHeight, -badanKeretaWeight,
            badanKeretaWeight / 4, -badanKeretaHeight, badanKeretaWeight, -badanKeretaWeight / 4, -badanKeretaHeight, badanKeretaWeight, -badanKeretaWeight / 4, badanKeretaHeight, badanKeretaWeight, badanKeretaWeight / 4, badanKeretaHeight, badanKeretaWeight
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [210 / 255, 214 / 255, 215 / 255]
        // rgb(210, 143, 146)
    },
    "front_right_wheel": {
        "vertices": [
            -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [82 / 255, 84 / 255, 84 / 255]
    },
    "front_left_wheel": {
        "vertices": [
            -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 - (badanKeretaWeight - rodaKotakWeight / 4)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [82 / 255, 84 / 255, 84 / 255]
    },
    "back_right_wheel": {
        "vertices": [
            -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 - (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [82 / 255, 84 / 255, 84 / 255]
    },
    "back_left_wheel": {
        "vertices": [
            -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), -rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4),
            rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), -rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), -rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4), rodaKotakWeight / 4 + (badanKeretaWeight / 4 - rodaKotakWeight / 4), rodaKotakHeight - (badanKeretaHeight + rodaKotakHeight), rodaKotakWeight / 4 + (badanKeretaWeight - rodaKotakWeight / 4)
        ],
        "normal": [
            0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
            0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
            -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
            1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
            0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
        ],
        "color": [82 / 255, 84 / 255, 84 / 255]
    }
}