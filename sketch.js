
let upperDisplay = document.querySelector('#upper');





let lowerDisplay = document.querySelector('#lower');

//lowerDisplay.textContent="45678";

let calc = document.querySelector("#calc");
for (i = 0; i < 5; i++) {
    let row = document.createElement('div');
    row.classList.add('rows');
    row.setAttribute('id', 'row' + i);
    calc.appendChild(row);
}
let rows = document.querySelectorAll('.rows');
let arrOfChars = ["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];
let cou = 0;
for (let j = 0; j < arrOfChars.length; j++) {
    if (j != 0 && j % 4 == 0) {
        cou += 1;
    }
    let curRow = document.querySelector('#row' + cou);

    let button = document.createElement('button');
    button.setAttribute('id', 'num' + arrOfChars[j]);
    button.setAttribute('data-value', arrOfChars[j]);
    button.textContent = arrOfChars[j];
    button.addEventListener('click', beginCalc);
    curRow.appendChild(button);
    console.log(cou)

}

function beginCalc(event) {
    let txt = event.target.getAttribute("data-value");
    input(txt);

}

function input(val) {
    if (Number(val)) {
        console.log(val);
        console.log(upperDisplay.textContent)
        console.log( upperDisplay.textContent == null);
        if (isNaN(Number(lowerDisplay.textContent))) {
            upperDisplay.textContent = lowerDisplay.textContent;
            lowerDisplay.textContent = "";
        }
        lowerDisplay.textContent += val;
    } else if (val == "AC") {
        lowerDisplay.textContent = "0";
        upperDisplay.textContent = "";
    } else if (val == "DEL") {
        lowerDisplay.textContent= lowerDisplay.textContent.slice(0,lowerDisplay.length - 1);
    } else {
        if (upperDisplay.textContent == "") {
            lowerDisplay.textContent += val;
        } else {
           let result = operate(upperDisplay.textContent, lowerDisplay.textContent);
           upperDisplay.textContent += lowerDisplay.textContent;
           lowerDisplay.textContent = result + val;
        }
    }
}

function operate(numTxt1, numTxt2){
    let opr = numTxt1.slice(numTxt1.length-1);
    numTxt1 = parseFloat(numTxt1);
    numTxt2 = parseFloat(numTxt2);
console.log(opr);
   let operators ={
        "+" : function (a, b){
          return a + b;
        },
        "-" : function (a, b){
          return a - b;
        },
        "*" : function (a, b){
          return a * b;
        },
        "/" : function (a, b){
          return a / b;
        },
         
     }
  return  operators[opr](numTxt1, numTxt2).toString();
}