const pigExampleAnim = {
    "model_id": "pig",
    "second_between_frames": 0.25,
    "frames": 
    [
        [
            {
                "_comment": "This is the first frame. In which I am accessing the the 0th index difference from the root, which means the body",
                "index_diff" : 0,
                "_comment2": "any '_as_root' means it will rotate the object as it being the root, so along with any childrens it has. While if it's just 'obj_rot' it will rotate only the object itself",
                "as_root_rot": [0,0,0],
            },
            {
                "_comment": "This is still the first frame. In which i am accessing the 1st index diff from the root, which means the head",
                "index_diff" : 1,
                "as_root_rot": [0,-25,0],
            }
        ],
        [
            {
                "_comment": "This is the second frame. In which I am accessing the the 1st index difference from the root, which means the body",
                "index_diff" : 1,
                "as_root_rot": [0,-50,0],
            }
        ],
        [
            {
                "_comment": "This is the third frame. In which I am accessing the the 1st index difference from the root, which means the body",
                "index_diff" : 1,
                "as_root_rot": [0,-25,0],
            }
        ],
        [
            {
                "_comment": "This is the 4th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                "index_diff" : 1,
                "as_root_rot": [0,0,0],
            }
        ],
        [
            {
                "_comment": "This is the 5th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                "index_diff" : 1,
                "as_root_rot": [0,25,0],
            }
        ],
        [
            {
                "_comment": "This is the 6th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                "index_diff" : 1,
                "as_root_rot": [0,50,0],
            }
        ],
        [
            {
                "_comment": "This is the 7th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                "index_diff" : 1,
                "as_root_rot": [0,25,0],
            }
        ],
        [
            {
                "_comment": "This is the 8th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                "index_diff" : 1,
                "as_root_rot": [0,0,0],
            }
        ]
    ]
}