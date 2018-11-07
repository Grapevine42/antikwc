var express = require('express');

var http = require('http');


var app = express();

app.get('/keyboard', function (req, res) {
    var data= {
        'type' : 'buttons',
        'buttons' : ['과일', '채소', '빵']
    };

    res.json(data);
});

http.createServer(app).listen(process.env.PORT || 9000, function () {
    console.log('서버 실행')
});

