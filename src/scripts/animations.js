const pigExampleAnim = {
    "model_id": "pig",
    "second_between_frames": 0.25,
    "frames":
        [
            [
                {
                    "_comment": "This is the first frame. In which I am accessing the the 0th index difference from the root, which means the body",
                    "index_diff": 0,
                    "_comment2": "any '_as_root' means it will rotate the object as it being the root, so along with any childrens it has. While if it's just 'obj_rot' it will rotate only the object itself",
                    "as_root_rot": [0, 0, 0],
                    "as_root_pos": [0, 0, 0],
                    "as_root_scale": [1, 1, 1],
                    "obj_rot": [0, 0, 0],
                    "obj_pos": [0, 0, 0],
                    "obj_scale": [1, 1, 1],
                },
                {
                    "_comment": "This is still the first frame. In which i am accessing the 1st index diff from the root, which means the head",
                    "index_diff": 1,
                    "as_root_rot": [0, -25, 0],
                }
            ],
            [
                {
                    "_comment": "This is the second frame. In which I am accessing the the 1st index difference from the root, which means the body",
                    "index_diff": 1,
                    "as_root_rot": [0, -50, 0],
                }
            ],
            [
                {
                    "_comment": "This is the third frame. In which I am accessing the the 1st index difference from the root, which means the body",
                    "index_diff": 1,
                    "as_root_rot": [0, -25, 0],
                }
            ],
            [
                {
                    "_comment": "This is the 4th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                    "index_diff": 1,
                    "as_root_rot": [0, 0, 0],
                }
            ],
            [
                {
                    "_comment": "This is the 5th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                    "index_diff": 1,
                    "as_root_rot": [0, 25, 0],
                }
            ],
            [
                {
                    "_comment": "This is the 6th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                    "index_diff": 1,
                    "as_root_rot": [0, 50, 0],
                }
            ],
            [
                {
                    "_comment": "This is the 7th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                    "index_diff": 1,
                    "as_root_rot": [0, 25, 0],
                }
            ],
            [
                {
                    "_comment": "This is the 8th frame. In which I am accessing the the 1st index difference from the root, which means the body",
                    "index_diff": 1,
                    "as_root_rot": [0, 0, 0],
                }
            ]
        ]
}

const pigWalkAnim = {
    "model_id": "pig",
    "second_between_frames": 0.2,
    "frames": [
        [
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 6,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 6,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 6,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            },
            {
                "index_diff": 4,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 6,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 6,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 6,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 6,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 6,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 6,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 4,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            },
            {
                "index_diff": 6,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 5,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            }
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 6,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 6,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
        ],
        [
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 6,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            }
        ],
    ]
}

const steveWalkAnim = {
    "model_id": "steve",
    "second_between_frames": 0.2,
    "frames": [
        [
            {
                "index_diff": 2,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            },
            {
                "index_diff": 3,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 4,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 3,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            },
            {
                "index_diff": 4,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 5,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            }
        ],
    ]
}

const aduduWalkAnim = {
    "model_id": "adudu",
    "second_between_frames": 0.2,
    "frames": [
        [
            {
                "index_diff": 2,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            },
            {
                "index_diff": 3,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 4,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 5,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 3,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            },
            {
                "index_diff": 4,
                "obj_rot": [-45, 0, 0],
                "obj_pos": [0, 0.03, 0.03],
            },
            {
                "index_diff": 5,
                "obj_rot": [45, 0, 0],
                "obj_pos": [0, 0.03, -0.03],
            }
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 3,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
            {
                "index_diff": 4,
                "obj_rot": [-30, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [30, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.01, 0.01],
            },
            {
                "index_diff": 3,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.01, -0.01],
            },
            {
                "index_diff": 4,
                "obj_rot": [-15, 0, 0],
                "obj_pos": [0, 0.02, 0.02],
            },
            {
                "index_diff": 5,
                "obj_rot": [15, 0, 0],
                "obj_pos": [0, 0.02, -0.02],
            },
        ],
        [
            {
                "index_diff": 2,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 3,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 4,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            },
            {
                "index_diff": 5,
                "obj_rot": [0, 0, 0],
                "obj_pos": [0, 0, 0],
            }
        ],
    ]
}

const keretaWalkAnim = {

}