exports.sendSMS = {
    description: 'Sending a SMS for verification',
    tags: ["Customers"],
    summary: 'Sending a SMS',
    query: {
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            }
        },
        "required": [
            "customerId"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failure', 'success'],
                },
                "message": {
                    "type": "string"
                }
                // "data": {
                //     "type": "object",
                //     "properties": {
                //         "customerId":{
                //             "type": "string",
                //         },
                //         "userName": {
                //             "type": "string"
                //         },
                //         "mobileNo": {
                //             "type": "number"
                //         },
                //         "email":{
                //             "type":"string",
                //         },
                //         "password": {
                //             "type": "string"
                //         },
                //         "markForDelete":{
                //             "type":"boolean",
                //         }
                //     },
                //     "required": [
                //         "customerId",
                //         "userName",
                //         "mobileNo",
                //         "email",
                //         "password",
                //         "markForDelete"
                //     ]
                // },
            },
                    "required": [
                            "status"
                            // "data"
                            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }
    exports.sendMail = {
        description: 'Sending an email for verification',
        tags: ["Customers"],
        summary: 'Sending an mail',
        query: {
            "type": "object",
            "properties": {
                "customerId": {
                    "type": "string"
                }
            },
            "required": [
                "customerId"
            ]
        },
        response: {
            201: {
                description: 'Successful response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string",
                        "enum": ['failure', 'success'],
                    },
                    "message": {
                        "type": "string"
                    }
                    // "data": {
                    //     "type": "object",
                    //     "properties": {
                    //         "customerId":{
                    //             "type": "string",
                    //         },
                    //         "userName": {
                    //             "type": "string"
                    //         },
                    //         "mobileNo": {
                    //             "type": "number"
                    //         },
                    //         "email":{
                    //             "type":"string",
                    //         },
                    //         "password": {
                    //             "type": "string"
                    //         },
                    //         "markForDelete":{
                    //             "type":"boolean",
                    //         }
                    //     },
                    //     "required": [
                    //         "customerId",
                    //         "userName",
                    //         "mobileNo",
                    //         "email",
                    //         "password",
                    //         "markForDelete"
                    //     ]
                    // },
                },
                        "required": [
                                "status"
                                // "data"
                                ]
            }, 400: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code"
                ]
            },
            500: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code",
                    "errorCause"
                ]
            }
        }
        }