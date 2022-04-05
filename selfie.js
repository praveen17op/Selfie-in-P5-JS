background(255, 255, 255);
//fill(212,169,93);

//center points and scale
const x = 300;
const y = 350;
const s = 1;

translate(x, y);
scale(s);

//face outline
//chin
push();
fill(67, 56, 18);
beginShape();
vertex(-63, 28);
bezierVertex(-25, 90, 25, 90, 63, 28);
endShape();
pop();

//some face coloring
push();
noStroke();
fill(212, 169, 93);
quad(-32, 49, -70, 2, -85, -83, -20, -171);
quad(32, 49, 70, 2, 85, -83, 20, -171);
triangle(-85, -82, -104, -68, -82, -25);
triangle(85, -82, 104, -68, 82, -25);
quad(-32, 49, -24, 44, -11, 32, -33, 32);
quad(32, 49, 24, 44, 11, 32, 33, 32);
quad(-33, 32, 33, 32, 21, -164, -20, -171);
//triangle(-20,-171,-28,-161,9,-15);
quad(66, -155, 84, -32, 22, -164);
triangle(10, -165, -20, -172, -30, -159);
pop();

//left upper
push();
fill(212, 169, 93);
beginShape();
vertex(-63, 28);
bezierVertex(-84, -20, -90, -45, -84, -80);
endShape();
pop();
//right upper
push();
fill(212, 169, 93);
beginShape();
vertex(63, 28);
bezierVertex(84, -20, 90, -45, 84, -80);
endShape();
pop();

//hair

//some hair color filling
push();
stroke(57, 40, 13);
fill(57, 40, 13);
triangle(-100, -221, -45, -158, -84, -83);
quad(97, -149, 101, -158, -101, -222, -67, -180);
quad(65, -157, 96, -155, 90, -92, 85, -80);
triangle(94, -151, 100, -142, 89, -96);
pop();

//some more face filling
push();
stroke(212, 169, 93);
fill(212, 169, 93);
quad(69, -140, 82, -85, -78, -92, -72, -111);
pop();

push(); //strand
fill(57, 40, 13);
beginShape();
vertex(27, -167);
bezierVertex(3, -202, -107, -181, -102, -151);
endShape();
pop();

push(); //sides
fill(212, 169, 93);
beginShape();
vertex(84, -80);
bezierVertex(70, -145, 75, -110, 66, -154);
endShape();
pop();

push(); //rightupper
fill(212, 169, 93);
beginShape();
vertex(66, -154);
bezierVertex(35, -170, -20, -170, -20, -170);
//bezierVertex(-30,-170,-20,-70,-84,-80);
endShape();
pop();

push(); //leftupper
fill(212, 169, 93);
beginShape();
vertex(-20, -170);
bezierVertex(-35, -145, -55, -190, -84, -80);
endShape();
pop();

push();
fill(57, 40, 13);
beginShape();
vertex(-84, -80);
bezierVertex(-85, -135, -120, -153, -100, -220);
endShape();
pop();

push(); //upper part of hair
fill(57, 40, 13);
beginShape();
vertex(-100, -220);
bezierVertex(0, -331, 165, -205, 101, -155);
endShape();
pop();

push(); //right part of hair
fill(57, 40, 13);
beginShape();
vertex(101, -155);
bezierVertex(85, -140, 120, -153, 86, -70);
endShape();
pop();

//ears
push();
fill(212, 169, 93);
beginShape();
vertex(-84, -80);
bezierVertex(-94.5, -106, -105, -66, -103, -66);
endShape();
pop();

push();
fill(212, 169, 93);
scale(0.8);
beginShape();
vertex(-114, -80);
bezierVertex(-114.5, -106, -125, -66, -123, -66);
endShape();
beginShape();
vertex(114, -80);
bezierVertex(114.5, -106, 125, -66, 123, -66);
endShape();
pop();

push();
fill(212, 169, 93);
beginShape();
vertex(-103, -66);
bezierVertex(-96, -21, -91, -10, -82, -24);
endShape();
pop();

push();
fill(212, 169, 93);
scale(0.8);
beginShape();
vertex(-123, -66);
bezierVertex(-116, -21, -105, -30, -109, -44);
endShape();
beginShape();
vertex(123, -66);
bezierVertex(116, -21, 105, -30, 109, -44);
endShape();
pop();

push();
fill(212, 169, 93);
beginShape();
vertex(84, -80);
bezierVertex(94.5, -106, 105, -66, 103, -66);
endShape();
pop();

push();
fill(212, 169, 93);
beginShape();
vertex(103, -66);
bezierVertex(96, -21, 91, -10, 82, -24);
endShape();
pop();

//eyebrows

push(); //left
fill(62, 46, 14);
beginShape();
vertex(-23, -104);
bezierVertex(-31, -116, -67, -110, -75, -95);
endShape();
pop();
push();
fill(212, 169, 93);
noStroke();
beginShape();
vertex(-23, -104);
bezierVertex(-67, -99, -67, -99, -75, -95);
endShape();
pop();

push(); //right
fill(62, 46, 14);
beginShape();
vertex(21, -104);
bezierVertex(29, -116, 65, -110, 73, -95);
endShape();
pop();
push();
fill(212, 169, 93);

noStroke();
beginShape();
vertex(21, -104);
bezierVertex(65, -99, 65, -99, 73, -95);
endShape();
pop();

//eyes
push();
fill(212, 169, 93);
beginShape(); //left eyelid
vertex(-67, -91);
bezierVertex(-42, -102, -27, -92, -23, -91);
endShape();

beginShape(); //right eyelid
vertex(65, -91);
bezierVertex(40, -102, 25, -92, 21, -91);
endShape();
pop();
push();
fill(255, 255, 255);
beginShape(); //left upper eye part
vertex(-64, -83);
bezierVertex(-44, -100, -20, -85, -20, -85);
endShape();

beginShape(); //left lower eye part
vertex(-64, -83);
bezierVertex(-46, -65, -20, -85, -20, -85);
endShape();

beginShape(); //right upper eye part
vertex(64, -83);
bezierVertex(44, -100, 20, -85, 20, -85);
endShape();

beginShape(); //right lower eye part
vertex(64, -83);
bezierVertex(46, -65, 20, -85, 20, -85);
endShape();
pop();
//pupils
//push();
//fill(0,0,0);
//ellipse(-43.5,-85,18);
//pop();
push();
fill(15, 7, 0);
beginShape();
vertex(-53, -90);
bezierVertex(-43, -59, -37, -89, -35, -90.9);
endShape();

beginShape();
vertex(36, -90.8);
bezierVertex(35, -89, 43, -59, 52, -90);
endShape();
pop();

//nose
push();
fill(212, 169, 93);
beginShape();
vertex(-5, -86);
bezierVertex(-13, -75, -0, -60, -25, -38);
endShape();
pop();

push();
fill(212, 169, 93);
beginShape();
vertex(-8, -35);
bezierVertex(-5, -30, 4, -35, 3, -35);
endShape();
pop();

push();
fill(212, 169, 93);
beginShape();
vertex(-25, -38);
bezierVertex(-22, -28, -20, -43, -8, -35);
endShape();
pop();

push();
fill(212, 169, 93);
beginShape();
vertex(20, -38);
bezierVertex(17, -28, 15, -43, 3, -35);
endShape();
pop();

push();
fill(15, 7, 0);
beginShape();
vertex(-22, -36);
bezierVertex(-16, -30, -8, -35, -9, -37);
endShape();

beginShape();
vertex(16, -36);
bezierVertex(10, -30, 3, -35, 3, -37);
endShape();
pop();

//lower lip
push();
fill(194, 123, 84, 225);
beginShape();
vertex(-38, 1);
bezierVertex(-3, 33, 32, 1, 32, 1);
endShape();

beginShape();
vertex(-38, 1);
bezierVertex(-3, 4, 32, 1, 32, 1);
endShape();
pop();

//upper lip
push();
push();
noStroke();
fill(213, 153, 117, 225);
triangle(-38, 1, -6, -4, 32, 1);
pop();
fill(213, 153, 117, 225);
beginShape();
vertex(-38, 1);
bezierVertex(-23, -10, -10, -3.5, -6, -4);
endShape();

beginShape();
vertex(32, 1);
bezierVertex(17, -10, 4, -3.5, 0, -4);
endShape();

beginShape();
vertex(-6, -4);
bezierVertex(-4, -2, 0, -4, 0, -4);
endShape();
pop();
//moustache
push();
stroke(51);
fill(76, 48, 8);
/*
quad(-44,-3,-32,-3,-11,-9,-8,-30);

quad(-44,-3,-34,-2,-35,-3,-43,7);

quad(37,-3,25,-3,-1,-9,-4,-30);

quad(37,-3,27,-2,28,-3,36,7);
*/
beginShape();
vertex(-9, -9);
bezierVertex(5, -45, -39, -20, -49, 3);
endShape();
beginShape();
vertex(2, -9);
bezierVertex(-13, -45, 31, -20, 41, 3);
endShape();
pop();
push();
noStroke();
fill(73, 52, 23);
beginShape();
vertex(-20, 15);
bezierVertex(-7, 23, 30, 6, 1, 29);
endShape();
beginShape();
vertex(-20, 15);
bezierVertex(-22, 21, -16, 29, 1, 29);
endShape();
pop();

//beard
push();
fill(67, 56, 18);
triangle(-75, -3, -64, 25, -32, 49);
triangle(75, -3, 64, 25, 32, 49);
triangle(-64, 25, -32, 49, -41, 56);
triangle(64, 25, 32, 49, 41, 56);

beginShape();
line(-75, -3, -32, 49);
line(75, -3, 32, 49);
vertex(-32, 49);
bezierVertex(-20, 47, -19, 35, -1, 33);

vertex(32, 49);
bezierVertex(20, 47, 19, 35, 1, 33);

endShape();
pop();
