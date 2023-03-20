var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

function addTwoNumber(number1, number2){
  return parseInt(number1) + parseInt(number2);
}

function divideTwoNumber(number1, number2){
  if (parseInt(number2) == 0){
    return "Divide by zero error";
  }
  return parseInt(number1) / parseInt(number2);
}

function multiplyTwoNumber(number1, number2){
  return parseInt(number1) * parseInt(number2);
}

function subtractTwoNumber(number1, number2){
  return parseInt(number1) - parseInt(number2);
}

app.get('/addtwonumbers', (req, res)=>{
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var result = addTwoNumber(num1, num2);
  res.json({ statusCode: 200, data: result, message:'Success!'});
});

app.get('/subtracttwonumbers', (req, res)=>{
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var result = subtractTwoNumber(num1, num2);
  res.json({ statusCode: 200, data: result, message:'Success!'});
});

app.get('/multiplytwonumbers', (req, res)=>{
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var result = multiplyTwoNumber(num1, num2);
  res.json({ statusCode: 200, data: result, message:'Success!'});
});

app.get('/dividetwonumbers', (req, res)=>{
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var result = divideTwoNumber(num1, num2);
  res.json({ statusCode: 200, data: result, message:'Success!'});
});

app.get('/', (req, res)=>{
  res.render('index.html');
});

app.listen(port,()=>{
  console.log('listening on port:' + port);
});
