// let char="X";
// let turn=1;
// let area=[
// ["*", "*", "*"],
// ["*", "*", "*"],
// ["*", "*", "*"]];
// document.querySelector("button").onclick = function(){
	// let row=document.querySelector(".row").value-1;
	// let column=document.querySelector(".column").value-1;
	// if (area[row][column] !="X" && area[row][column] !="O") { ЧТОБЫ НЕ ЖУЛЬНИЧАТЬ
	// let rows=document.querySelectorAll("tr");
	// let cells=rows[row].querySelectorAll("td");
// let cell=cells[column];
// cell.innerHTML=char;
// turn+=1;
// if (char=="X") {
	// cell.style.backgroundColor="red";
	// cell.style.color="white";}
// else if (char=="O") {
	// cell.style.backgroundColor="green";
	// cell.style.color="white";
// }
// area[row][column]=char;
	// console.log(area);

// if (checkwinner()=="X") {alert("КРЕСТИКИ ПОБЕДИЛИ");
// newGame();}
// if (checkwinner()=="O") {alert("НОЛИКИ ПОБЕДИЛИ");
// newGame();}
// if (checkwinner()== false && turn == 10) {alert("НИЧЬЯ");
//newGame();}
//changeChar();
// if (turn % 2 ==1) {
	// char="X";
// }
// else {
	// char="O"}

// document.querySelector("span").innerHTML=char;
/*document.querySelector(".row").value="";
document.querySelector(".column").value="";
// }
}

function newGame(){
	let rows=document.querySelectorAll("tr");
	for (let i = 0; i < rows.length; i++) {
		let row=rows[i];
		let cells=row.querySelectorAll("td");
		for (let j = 0; j < cells.length; j++) {
			cells[j].style.backgroundColor="white";
			cells[j].innerHTML="";
			area[i][j]="";
		console.log(i,j);
		}
	}
	turn=1;
	char="X";
	document.querySelector(".row").value="";
	document.querySelector(".column").value="";
	document.querySelector("span").innerHTML=char;
};
function changeChar(){
	if (turn % 2==1) {
		char="X"
	}
	else {char="O";}
	document.querySelector("span").innerHTML=char;
}*/
let area=[
["*", "*", "*"],
["*", "*", "*"],
["*", "*", "*"]];
let char="X";
let turn=1;
document.querySelector("table").onclick=function(){
	let cell=event.target;
	let column=cell.cellIndex;
	let row=cell.parentElement.rowIndex;
	area[row][column]=char;
	console.log(area);
	cell.innerHTML=char;
turn=turn+1;
changeChar();
if (checkwinner()=="X") {alert("КРЕСТЕКИ ПОБЕДИЛИ");
newGame();
}
else if(checkwinner()=="O"){alert ("НОЛИКИ ПОБЕДИЛИ");
newGame();
}
};
 function changeChar(){
 if (turn % 2 ==1) {
	 char="X";
}
 else {
	 char="O"}

 document.querySelector("span").innerHTML=char;
//document.querySelector(".row").value="";
//document.querySelector(".column").value="";
// }
}
function newGame(){
	let rows=document.querySelectorAll("tr");
	for (let i = 0; i < rows.length; i++) {
		let row=rows[i];
		let cells=row.querySelectorAll("td");
		for (let j = 0; j < cells.length; j++) {
			cells[j].style.backgroundColor="white";
			cells[j].innerHTML="";
			area[i][j]="";
		console.log(i,j);
		}
	}
	turn=1;
	char="X";
	document.querySelector(".row").value="";
	document.querySelector(".column").value="";
	document.querySelector("span").innerHTML=char;
};
function checkwinner(){

		if (area[0][0]=="X" && area[0][1]=="X" && area[0][2]=="X") {
			return "X"
		}
			if (area[1][0]=="X" && area[1][1]=="X" && area[1][2]=="X") {
				return "X"
			}
				if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {

 return "X";

 }

 if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {

 return "X";

}
if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {

 return "X"; 

 }

 if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {

 return "X";

 }
 if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {

 return "X";

 }

 if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {

 return "X";

 } 

 if (area[0][0] == "O" && area[0][1] == "O" && area[0][2] == "O") { 

 return "O";

 }
 if (area[1][0] == "O" && area[1][1] == "O" && area[1][2] == "O") {

 return "O";

 }

 if (area[2][0] == "O" && area[2][1] == "O" && area[2][2] == "O") {

 return "O";

 }

 if (area[0][0] == "O" && area[1][0] == "O" && area[2][0] == "O") {

 return "O";

 }
 if (area[0][1] == "O" && area[1][1] == "O" && area[2][1] == "O") {

 return "O"; 

 }

 if (area[0][2] == "O" && area[1][2] == "O" && aOea[2][2] == "O") {

 return "O";

 }

 if (area[0][0] == "O" && area[1][1] == "O" && area[2][2] == "O") {

 return "O";

 }

 if (area[0][2] == "O" && area[1][1] == "O" && area[2][0] == "O") { 

 return "O";

 }

 return false;

};
