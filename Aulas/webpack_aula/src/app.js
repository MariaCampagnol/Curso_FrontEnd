require('!style-loader!css-loader!./style.css');

var obj = require('./func.js');
var $ = require('jquery');

obj.printarNome();  

$('h2').html('Ola');
$('body').append('<div style="width:500px;height:500px;background-color:indigo;"></div>'); 
$('body').append('<div style="width:500px;height:500px;background-color:purple;"></div>'); 
$('body').append('<div class="violet"></div>'); 
