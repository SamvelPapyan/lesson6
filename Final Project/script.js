var nQanak = 80;
var mQanak = 80;
var side = 10;

var socket = io();


function setup() {
	createCanvas(nQanak * side, mQanak * side);
	background('#acacac');
	frameRate(10);
	
}
function drawMatrix(obj) {

	var matrix = obj.m;
	var weather = obj.w;
	for (var m = 0; m < mQanak; m++) {
		for (var n = 0; n < nQanak; n++) {
			if (matrix[m][n] == 1) {
				fill('green');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 0) {
				if(weather == 'winter'){
					fill('white');
				}
				else if(weather == 'spring'){
					fill('lightgreen');
				}
				else if(weather == 'summer'){
					fill('pink');
				}
				else if(weather == 'autumn'){
					fill('purple');
				}
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 2) {
				fill('yellow');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 3) {
				fill('orange');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 4) {
				fill('red');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 5) {
				fill(0, 0, 200);
				rect(n * side, m * side, side, side);
			}
		}
	}
}
socket.on("matrix",drawMatrix);