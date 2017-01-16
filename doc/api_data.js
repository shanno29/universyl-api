define({ "api": [
  {
    "type": "delete",
    "url": "/chats/:key",
    "title": "Delete Chat",
    "group": "Chats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "key",
            "description": "<p>Task key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>{} chat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n\n {\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:20:37.394Z\",\n    \"__v\": 0,\n    \"messages\": [\n    {\n        \"relative\": \"a few seconds ago\",\n        \"updated\": \"2017-01-16T02:20:37.394Z\",\n        \"author\": \"58797cdd4d1e021ce8648461\",\n        \"text\": \"Hello World\",\n        \"_id\": \"587c2df51a52911468a727d1\"\n    }\n    ],\n    \"owners\": [\n    {\n        \"_id\": \"58797cdd4d1e021ce8648461\",\n        \"email\": \"blue@email.com\",\n        \"password\": \"test\",\n        \"username\": \"blue\",\n        \"fullname\": \"blue color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    },\n    {\n        \"_id\": \"58797cdd4d1e021ce864845f\",\n        \"email\": \"red@email.com\",\n        \"password\": \"test\",\n        \"username\": \"red\",\n        \"fullname\": \"red color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/chat/chat.route.js",
    "groupTitle": "Chats",
    "name": "DeleteChatsKey"
  },
  {
    "type": "get",
    "url": "/chats",
    "title": "List All Chats",
    "group": "Chats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "chats",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n[\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:44:54.135Z\",\n    \"__v\": 0,\n    \"messages\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.135Z\",\n            \"author\": \"58797cdd4d1e021ce8648461\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf294\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846c\",\n    \"updated\": \"2017-01-16T02:44:54.126Z\",\n    \"__v\": 0,\n    \"messages\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.126Z\",\n            \"author\": \"58797cdd4d1e021ce8648460\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf293\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846b\",\n    \"updated\": \"2017-01-16T02:44:54.106Z\",\n    \"__v\": 0,\n    \"messages\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.107Z\",\n            \"author\": \"58797cdd4d1e021ce864845f\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf292\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/chat/chat.route.js",
    "groupTitle": "Chats",
    "name": "GetChats"
  },
  {
    "type": "get",
    "url": "/chats/:key",
    "title": "Get Chat",
    "group": "Chats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "key",
            "description": "<p>Task key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>{} chat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n\n {\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:20:37.394Z\",\n    \"__v\": 0,\n    \"messages\": [\n    {\n        \"relative\": \"a few seconds ago\",\n        \"updated\": \"2017-01-16T02:20:37.394Z\",\n        \"author\": \"58797cdd4d1e021ce8648461\",\n        \"text\": \"Hello World\",\n        \"_id\": \"587c2df51a52911468a727d1\"\n    }\n    ],\n    \"owners\": [\n    {\n        \"_id\": \"58797cdd4d1e021ce8648461\",\n        \"email\": \"blue@email.com\",\n        \"password\": \"test\",\n        \"username\": \"blue\",\n        \"fullname\": \"blue color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    },\n    {\n        \"_id\": \"58797cdd4d1e021ce864845f\",\n        \"email\": \"red@email.com\",\n        \"password\": \"test\",\n        \"username\": \"red\",\n        \"fullname\": \"red color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/chat/chat.route.js",
    "groupTitle": "Chats",
    "name": "GetChatsKey"
  },
  {
    "type": "get",
    "url": "/chats/:key/user",
    "title": "Get User Chats",
    "group": "Chats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "key",
            "description": "<p>User key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "chats",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n\n[\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:44:54.135Z\",\n    \"__v\": 0,\n    \"messages\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.135Z\",\n            \"author\": \"58797cdd4d1e021ce8648461\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf294\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846c\",\n    \"updated\": \"2017-01-16T02:44:54.126Z\",\n    \"__v\": 0,\n    \"messages\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.126Z\",\n            \"author\": \"58797cdd4d1e021ce8648460\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf293\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846b\",\n    \"updated\": \"2017-01-16T02:44:54.106Z\",\n    \"__v\": 0,\n    \"messages\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.107Z\",\n            \"author\": \"58797cdd4d1e021ce864845f\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf292\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/chat/chat.route.js",
    "groupTitle": "Chats",
    "name": "GetChatsKeyUser"
  },
  {
    "type": "post",
    "url": "/chats",
    "title": "Post Chat",
    "group": "Chats",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n   owners: [58797cdd4d1e021ce864845f, 58797cdd4d1e021ce8648450],\n   messages: [{author: 58797cdd4d1e021ce864845f, text: 'Hello World'}],\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>{} chat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846b\",\n    \"updated\": \"2017-01-16T02:44:54.106Z\",\n    \"__v\": 0,\n    \"messages\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.107Z\",\n            \"author\": \"58797cdd4d1e021ce864845f\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf292\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/chat/chat.route.js",
    "groupTitle": "Chats",
    "name": "PostChats"
  },
  {
    "type": "delete",
    "url": "/posts/:key",
    "title": "Delete Post",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "key",
            "description": "<p>Task key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>{} post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n\n {\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:20:37.394Z\",\n    \"__v\": 0,\n    \"comments\": [\n    {\n        \"relative\": \"a few seconds ago\",\n        \"updated\": \"2017-01-16T02:20:37.394Z\",\n        \"author\": \"58797cdd4d1e021ce8648461\",\n        \"text\": \"Hello World\",\n        \"_id\": \"587c2df51a52911468a727d1\"\n    }\n    ],\n    \"owners\": [\n    {\n        \"_id\": \"58797cdd4d1e021ce8648461\",\n        \"email\": \"blue@email.com\",\n        \"password\": \"test\",\n        \"username\": \"blue\",\n        \"fullname\": \"blue color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    },\n    {\n        \"_id\": \"58797cdd4d1e021ce864845f\",\n        \"email\": \"red@email.com\",\n        \"password\": \"test\",\n        \"username\": \"red\",\n        \"fullname\": \"red color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/post/post.route.js",
    "groupTitle": "Posts",
    "name": "DeletePostsKey"
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "List All Posts",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "posts",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n[\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:44:54.135Z\",\n    \"__v\": 0,\n    \"comments\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.135Z\",\n            \"author\": \"58797cdd4d1e021ce8648461\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf294\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846c\",\n    \"updated\": \"2017-01-16T02:44:54.126Z\",\n    \"__v\": 0,\n    \"comments\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.126Z\",\n            \"author\": \"58797cdd4d1e021ce8648460\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf293\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846b\",\n    \"updated\": \"2017-01-16T02:44:54.106Z\",\n    \"__v\": 0,\n    \"comments\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.107Z\",\n            \"author\": \"58797cdd4d1e021ce864845f\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf292\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/post/post.route.js",
    "groupTitle": "Posts",
    "name": "GetPosts"
  },
  {
    "type": "get",
    "url": "/posts/:key",
    "title": "Get Post",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "key",
            "description": "<p>Task key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>{} post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n\n {\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:20:37.394Z\",\n    \"__v\": 0,\n    \"comments\": [\n    {\n        \"relative\": \"a few seconds ago\",\n        \"updated\": \"2017-01-16T02:20:37.394Z\",\n        \"author\": \"58797cdd4d1e021ce8648461\",\n        \"text\": \"Hello World\",\n        \"_id\": \"587c2df51a52911468a727d1\"\n    }\n    ],\n    \"owners\": [\n    {\n        \"_id\": \"58797cdd4d1e021ce8648461\",\n        \"email\": \"blue@email.com\",\n        \"password\": \"test\",\n        \"username\": \"blue\",\n        \"fullname\": \"blue color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    },\n    {\n        \"_id\": \"58797cdd4d1e021ce864845f\",\n        \"email\": \"red@email.com\",\n        \"password\": \"test\",\n        \"username\": \"red\",\n        \"fullname\": \"red color\",\n        \"city\": \"milwaukee\",\n        \"state\": \"wi\",\n        \"age\": 23,\n        \"gender\": \"male\",\n        \"__v\": 0,\n        \"picture\": \"http://.../default_picture.jpg\",\n        \"banner\": \"http://.../default_banner.jpg\",\n        \"aboutme\": \"Tap to edit your about info\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/post/post.route.js",
    "groupTitle": "Posts",
    "name": "GetPostsKey"
  },
  {
    "type": "get",
    "url": "/posts/:key/user",
    "title": "Get User Posts",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "key",
            "description": "<p>User key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "posts",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n\n[\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846d\",\n    \"updated\": \"2017-01-16T02:44:54.135Z\",\n    \"__v\": 0,\n    \"comments\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.135Z\",\n            \"author\": \"58797cdd4d1e021ce8648461\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf294\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846c\",\n    \"updated\": \"2017-01-16T02:44:54.126Z\",\n    \"__v\": 0,\n    \"comments\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.126Z\",\n            \"author\": \"58797cdd4d1e021ce8648460\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf293\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648461\",\n            \"email\": \"blue@email.com\",\n            \"password\": \"test\",\n            \"username\": \"blue\",\n            \"fullname\": \"blue color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n},\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846b\",\n    \"updated\": \"2017-01-16T02:44:54.106Z\",\n    \"__v\": 0,\n    \"comments\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.107Z\",\n            \"author\": \"58797cdd4d1e021ce864845f\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf292\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/post/post.route.js",
    "groupTitle": "Posts",
    "name": "GetPostsKeyUser"
  },
  {
    "type": "post",
    "url": "/posts",
    "title": "Post Post",
    "group": "Posts",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n   owners: [58797cdd4d1e021ce864845f, 58797cdd4d1e021ce8648450],\n   comments: [{author: 58797cdd4d1e021ce864845f, text: 'Hello World'}],\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>{} post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"relative\": \"a few seconds ago\",\n    \"_id\": \"58797cdd4d1e021ce864846b\",\n    \"updated\": \"2017-01-16T02:44:54.106Z\",\n    \"__v\": 0,\n    \"comments\": [\n        {\n            \"relative\": \"a few seconds ago\",\n            \"updated\": \"2017-01-16T02:44:54.107Z\",\n            \"author\": \"58797cdd4d1e021ce864845f\",\n            \"text\": \"Hello World\",\n            \"_id\": \"587c33a6db609215244cf292\"\n        }\n    ],\n    \"owners\": [\n        {\n            \"_id\": \"58797cdd4d1e021ce864845f\",\n            \"email\": \"red@email.com\",\n            \"password\": \"test\",\n            \"username\": \"red\",\n            \"fullname\": \"red color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        },\n        {\n            \"_id\": \"58797cdd4d1e021ce8648460\",\n            \"email\": \"yellow@email.com\",\n            \"password\": \"test\",\n            \"username\": \"yellow\",\n            \"fullname\": \"yellow color\",\n            \"city\": \"milwaukee\",\n            \"state\": \"wi\",\n            \"age\": 23,\n            \"gender\": \"male\",\n            \"__v\": 0,\n            \"picture\": \"http://.../default_picture.jpg\",\n            \"banner\": \"http://.../default_banner.jpg\",\n            \"aboutme\": \"Tap to edit your about info\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/post/post.route.js",
    "groupTitle": "Posts",
    "name": "PostPosts"
  }
] });