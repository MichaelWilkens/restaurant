var express = require('express');
var path = require("path");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations =[
    {
        name:'mike',
        number:'201-322-2938',
        email: 'yo@gmail.com',
        id:'1234'
    }   
]


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function(req,res){
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reservation', function(req,res){
    res.sendFile(path.join(__dirname, 'reservation.html'));
});


app.get('/api/reservation', function(req,res){
    res.json(reservations)
});

app.post('/api/reservation', function(req,res){
    console.log(req.body)
    reservations.push(req.body)
    res.json(reservations)
})

app.listen(8000, function(){
    console.log('Listening on port 8000')
})

app.get('/api/tables', function(req,res){
    var tables = reservations.slice(0,5)
    res.json(tables)
})

app.get('/api/waitlist', function(req,res){
    if(reservations.length>5){
        var waitlist = reservations.slice(5)
        res.json(waitlist)
    }    
})