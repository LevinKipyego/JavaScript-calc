
let num1 = parseInt(prompt('Enter the first number:'));
let op = prompt("Enter an operator(/ * + -):");
let num2 = parseInt(prompt('Enter the second number'));
switch(op) {
     case "/":
     alert(num1/num2);
     break;
     case "*":
     alert(num1*num2);
     break;
     case "+":
     alert(num1+num2);
     break;
     case "-":
     alert(num1-num2);
     break;
     default:
     alert('invalid choice')
    }