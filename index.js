var express = require('express');

var http = require('http');


var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/keyboard', function (req, res) {
    var data = {
        'type': 'buttons',
        'buttons': ['과일', '채소', '빵']
    };

    res.json(data);
});



app.post('/message', function (req, res) {
    var msg = req.body.content;

    console.log('전달메시지 : ' + msg);



    var send = {
        'message': {
            'text' : 'sdfs'
        }
    };


    res.json(send);

})




http.createServer(app).listen(process.env.PORT || 9000, function () {
    console.log('서버 실행')
});

