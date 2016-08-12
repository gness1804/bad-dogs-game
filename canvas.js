var canvas = document.getElementById("canvas_mal");
var draw = canvas.getContext("2d");
draw.beginPath();
draw.arc(150, (300 / 4), 50, 0, 2*Math.PI);
draw.fillStyle = "rgb(242, 149, 10)";
draw.fill(); // end of head
draw.beginPath();
draw.moveTo(105, 55);
draw.lineTo(99, 18);
draw.lineTo(122, 34);
draw.strokeStyle = "rgb(242, 149, 10)";
draw.stroke();
draw.fillStyle = "rgb(242, 149, 10)";
draw.fill(); // end of left ear
draw.beginPath();
draw.moveTo(184, 52);
draw.lineTo(190, 15);
draw.lineTo(167, 31);
draw.strokeStyle = "rgb(242, 149, 10)";
draw.stroke();
draw.fillStyle = "rgb(242, 149, 10)";
draw.fill(); //end of right ear
draw.beginPath();
draw.arc((141 - 8), (354 - 300), 13, 0, 2*Math.PI);
draw.fillStyle = "rgb(19, 142, 35)";
draw.fill(); // end of left eye outline
draw.beginPath();
draw.arc((176 - 8), (352 - 300), 13, 0, 2*Math.PI);
draw.fillStyle = "rgb(19, 142, 35)";
draw.fill(); // end of right eye outline
draw.beginPath();
draw.moveTo((140 - 8), (350 - 300));
draw.lineTo((140 - 8), (361 - 300));
draw.strokeStyle = "black";
draw.stroke();
draw.closePath(); // end of left eye vert. line
draw.beginPath();
draw.moveTo((177 - 8), (349 - 300));
draw.lineTo((177 - 8), (49 + 11));
draw.strokeStyle = "black";
draw.stroke();
draw.closePath(); // end of right eye vert. line
draw.beginPath();
draw.moveTo((158 - 8), (377 - 300));
draw.lineTo((149 - 8), (392 - 300));
draw.lineTo((165 - 8), (392 - 300));
draw.lineTo((158 - 8), (377 - 300));
draw.fillStyle = 'black'
draw.fill(); // end of nose
draw.beginPath();
draw.moveTo((161 - 8), (384 - 300));
draw.lineTo((180 - 8), (372 - 300));
draw.stroke();
draw.closePath(); // end of top right whisker
draw.beginPath();
draw.moveTo((161 - 8), (384 - 300));
draw.lineTo(172, (384 - 300));
draw.stroke();
draw.closePath(); // end of middle right whisker
draw.beginPath();
draw.moveTo((161 - 8), (384 - 300));
draw.lineTo(172, (84 + 12));
draw.stroke();
draw.closePath(); // end of bottom right whisker
draw.beginPath();
draw.moveTo((154 - 8), 84);
draw.lineTo(127, 72);
draw.stroke();
draw.closePath(); // end of top left whisker
draw.beginPath();
draw.moveTo((154 - 8), 84);
draw.lineTo(127, 84);
draw.stroke();
draw.closePath(); // end of middle left whisker
draw.beginPath();
draw.moveTo((154 - 8), 84);
draw.lineTo(127, (84 + 12));
draw.stroke();
draw.closePath(); // end of bottom left whisker
draw.beginPath();
draw.moveTo((125 - 8), (393 - 300));
draw.bezierCurveTo(117, 114, 189, 114, 189, 93);
draw.stroke();
draw.closePath(); // end of smile
draw.fillStyle = "rgb(242, 149, 10)";
draw.fillRect((109 - 8), (423 - 300), 100, 150); // end of body rectangle
draw.beginPath();
draw.moveTo(200, 148);
draw.lineTo(248, 102);
draw.lineTo(248, 117);
draw.lineTo(200, (148 + 15));
draw.strokeStyle = "rgb(242, 149, 10)";
draw.fill(); // end of right arm
draw.beginPath();
draw.moveTo(102, 148);
draw.lineTo(54, 102);
draw.lineTo(55, 117);
draw.lineTo(102,(148 + 15));
draw.fillStyle = "rgb(242, 149, 10)";
draw.fill(); // end of left arm
draw.beginPath();
draw.moveTo(102, 246);
draw.lineTo(39, 293);
draw.lineTo(52, 293);
draw.lineTo(102, 260);
draw.fill(); // end of left leg
draw.beginPath();
draw.moveTo(200, 246);
draw.lineTo(254, 293);
draw.lineTo((254 - 13), 293);
draw.lineTo(200, 260);
draw.fill(); // end of right leg
draw.beginPath();
draw.arc(53, 107, 10, 0, 2*Math.PI);
draw.fill(); // end of top left paw
draw.beginPath();
draw.arc(248, 110, 10, 0, 2*Math.PI);
draw.fill(); // end of top right paw
draw.beginPath();
draw.arc(47, 290, 10, 0, 2*Math.PI);
draw.fill(); // end of bottom left paw
draw.beginPath();
draw.arc(248, 290, 10, 0, 2*Math.PI);
draw.fill(); // end of bottom right paw

var cloud = document.getElementById("cloud");
var draw2 = cloud.getContext("2d");
draw2.beginPath();
draw2.arc((376 - 350), (90 - 65), 25, 0, 2*Math.PI);
draw2.strokeStyle = "rgb(205, 198, 198)";
draw2.fillStyle = "rgb(205, 198, 198)";
draw2.fill();
draw2.beginPath();
draw2.arc((408 - 350), (108 - 65), 25, 0, 2*Math.PI);
draw2.fill();
draw2.beginPath();
draw2.arc((428 - 350), (90 - 65), 25, 0, 2*Math.PI);
draw2.fill();
draw2.beginPath();
draw2.arc((452 - 350), (110 - 65), 25, 0, 2*Math.PI);
draw2.fill(); // end of first cloud
