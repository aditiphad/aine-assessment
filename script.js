var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(50,50,5,0.5* Math.PI,0*Math.PI,false);
ctx.lineWidth = 10;
ctx.stroke();

// ################### inner pie ends #######################


// ################# 2nd semicircle starts ####################

ctx.beginPath();
ctx.arc(50,50,15,0.5*Math.PI,1.5*Math.PI,false);
ctx.lineWidth = 3;
ctx.stroke();
// ################### 2nd semicircle ends #####################
// #################### 3rd circle starts ###################
ctx.beginPath();
ctx.arc(50,50,21,0.5 * Math.PI, 1 * Math.PI);
ctx.linewidth = 3;
ctx.stroke();

// ################### 3rd circle ends #################