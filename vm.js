let fs=require('fs');
let ram=new Array();
inputData=fs.readFileSync('fact.jss').toString();
ram=inputData.split(/\s+/);
let zr;
var readlineSync = require('readline-sync');
function  goto(name){
	let t=0
	while(ram[t]!=name){
		t++
	}
	return t;
}
function godown(name,n){
	let t=n+1;
	while(ram[t]!=name){
		t++
	}
	return t;
}
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
	else if (ram[i]=="compare"){
		if (ram[Number(ram[i+1])]-ram[Number(ram[i+2])]<0){
			zr=-1;
		}
		else if (ram[Number(ram[i+1])]-ram[Number(ram[i+2])]>0){
			zr=0;
		}
		else {
			zr=1;
		}
		i+=3;
	}
	else if (ram[i]=="point"){
		i+=2;
	}
	else if (ram[i]=="je"){
		if (zr==1) {
			i = Number(godown(ram[i + 1], i + 1))
		}
		else{
			i+=2;
		}
	}
	else if (ram[i]=="jl"){
		if (zr==-1){
			i = Number(godown(ram[i + 1], i + 1))
		}
		else{
			i+=2;
		}
	}
	else if (ram[i]=="jm"){
		if (zr==0){
			i = Number(godown(ram[i + 1], i + 1))
		}
		else{
			i+=2;
		}
	}
	else if (ram[i]=="move"){
		i=Number(goto(ram[i+1]));
	}
	else if (ram[i]=="new"){
		ram[Number(ram[i+1])]=ram[i+2];
		i++
	}
	else if (ram[i]=="set"){
		ram[Number(ram[i+1])]=ram[Number(ram[i+2])];
		i++
	}
	else{
		i++;
	}
}



