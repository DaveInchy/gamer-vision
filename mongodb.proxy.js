const Database = {
    "host": "mongodb.doonline.nl",
    "port": "80",
    "endpoints": [
        {
            "auth": [
                {
                    "method": "GET",
                    "bearer": "false",
                    "path": "/api/auth/signin",
                    "action": "login",
                    "params": [
                        "username",
                        "password"
                    ]
                },
                {
                    "method": "GET",
                    "bearer": "false",
                    "path": "/api/auth/signup",
                    "action": "register",
                    "params": [
                        "username",
                        "email",
                        "password"
                    ]
                }
            ],
            "data": [
                {
                    "method": "GET",
                    "bearer": "true",
                    "path": "/api/database",
                    "action": "create",
                    "params": [
                        "collection",
                        "action",
                        "id"
                    ]
                },
                {
                    "method": "GET",
                    "bearer": "true",
                    "path": "/api/database",
                    "action": "read",
                    "params": [
                        "collection",
                        "action",
                        "id"
                    ]
                },
                {
                    "method": "GET",
                    "bearer": "true",
                    "path": "/api/database",
                    "action": "update",
                    "params": [
                        "collection",
                        "action",
                        "id"
                    ]
                },
                {
                    "method": "GET",
                    "bearer": "true",
                    "path": "/api/database",
                    "action": "delete",
                    "params": [
                        "collection",
                        "action",
                        "id"
                    ]
                }
            ]
        }
    ]
}

export default Database;