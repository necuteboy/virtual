let fs=require('fs');
let ram=new Array();
inputData=fs.readFileSync('input.jss').toString();
ram=inputData.split(/\s+/);
let fact=1;
let t=0;
let ind1=0;
let ind2=0;
var readlineSync = require('readline-sync');
for (let i=0; i<ram.length;) {
	if (ram[i]=="input"){
		ram[Number(ram[i+1])]=readlineSync.question();
		i++
	}
	else if (ram[i]=="add"){
		ram[Number(ram[i+3])]=Number(ram[Number(ram[i+1])])+Number(ram[Number(ram[i+2])]);
		i++
	}
	else if (ram[i]=="output"){
		console.log(ram[Number(ram[i+1])]);
		i++
	}
	else if (ram[i]=="dif") {
		ram[Number(ram[i + 3])] = ram[Number(ram[i+1])] - ram[Number(ram[i+2])];
		i++
	}
	else if (ram[i]=="mul") {
		ram[Number(ram[i + 3])] = ram[Number(ram[i+1])] * ram[Number(ram[i+2])];
		i++
	}
	else if (ram[i]=="node"){
		if (ram[Number(ram[i+1])]==0 || ram[Number(ram[i+2])]==0){
			ram[Number(ram[i+3])]=1;
			i++
		}
		else if (ram[Number(ram[i+1])]!=ram[Number(ram[i+2])]) {
			if (ind1==0 && ind2==0) {
				ind1 = Number(ram[Number(ram[i + 1])]);
				ind2 = Number(ram[Number(ram[i + 2])]);
			}
			else {
				ram[Number(ram[i+1])]=Math.abs(ram[Number(ram[i+1])]);
				ram[Number(ram[i+2])]=Math.abs(ram[Number(ram[i+2])]);
				//console.log(ram[Number(ram[i+1])],ram[Number(ram[i+2])]);
				if (ram[Number(ram[i + 1])] > ram[Number(ram[i + 2])]) {
					ram[Number(ram[i + 1])] -= ram[Number(ram[i + 2])];
					if (ram[Number(ram[i + 1])] < 0 || ram[Number(ram[i + 2])] < 0) {
						ram[Number(ram[i + 3])] = 1;
						ram[Number(ram[i + 1])]=ind1;
						ram[Number(ram[i + 2])]=ind2;
						i++
					}
					else {
						i--;
					}
				}
				else {
					ram[Number(ram[i + 2])] -= ram[Number(ram[i + 1])]
					if (ram[Number(ram[i + 1])] < 0 || ram[Number(ram[i + 2])] < 0) {
						ram[Number(ram[i + 3])] = 1;
						ram[Number(ram[i + 1])]=ind1;
						ram[Number(ram[i + 2])]=ind2;
						i++
					}
					else {
						i--;
					}
				}
			}
		}
		else{
			ram[Number(ram[i+3])]=Math.abs(Number(ram[Number(ram[i+2])]));
			ram[Number(ram[i + 1])]=ind1;
			ram[Number(ram[i + 2])]=ind2;
			i++
		}
	}
	else if (ram[i]=="fact") {
		if (ram[Number(ram[i + 1])] < 0) {
			ram[Number(ram[i + 2])]=NaN;
			i++
		} else if (ram[Number(ram[i + 1])] == 0) {
			ram[Number(ram[i + 2])] = 1;
			i++
		} else {
			if (ram[Number(ram[i + 1])] - t != 0) {
				fact *= ram[Number(ram[i + 1])] - t;
				t += 1;
				i--
			} else {
				ram[Number(ram[i + 2])] = fact;
				fact = 1;
				i++
			}
		}
	}
	else{
		i++;
	}
}



