document.addEventListener('DOMContentLoaded', function() {
  console.log('Calc script loaded');

  //Globals
  // var screen;
  var firstNum = null;
  var secondNum = null;
  var operator = null;
  var result = null;

  // Set the results box to zero like a real calc

  // Setup listeners on the buttons
  var calcButtons = document.querySelectorAll('.calcBtn');
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function(event){
      event.preventDefault();
      console.log('Button Pressed: ', event.target.innerHTML);
      // console.log(event);
      // console.log(event.target.dataset.type);


      // If the button pressed is a number...
      if(event.target.dataset.type === 'num') {

        if(firstNum === undefined) {
          // Then set firstnumber..
          firstNum = event.target.innerHTML;
          // console.log('should happen only once');

        } else if(!!firstNum === true && !!operator === false){
          // If the button pressed is a number and a number exists concat onto it
          firstNum = firstNum + event.target.innerHTML;

        } else if(!!firstNum === true && !!operator === true && secondNum === undefined){
          // Then set secondNum..
          secondNum = event.target.innerHTML;

        } else if(!!secondNum === true) {
          // If the button pressed is a number and a number exists concat onto it
          secondNum = secondNum + event.target.innerHTML;
        } else {
          // never runs
        }
      }

      // If button pressed is an operator ( +, -, x, / )...
      if(event.target.dataset.type === 'operator' ) {
        operator = event.target.innerHTML;
      }

      // If button pressed is equals...
      if(event.target.dataset.type === 'equals' ) {
        console.log(operator);
        //If an operator has been set do the math
        if(!!operator === true) {
          switch(operator) {
            case '+':
              console.log('Adding...');
              result = parseFloat(firstNum) + parseFloat(secondNum);
              break;
            case '-':
              console.log('Subtracting...');
              result = parseFloat(firstNum) - parseFloat(secondNum);
              break;
            case 'x':
              console.log('Multiplying...');
              result = parseFloat(firstNum) * parseFloat(secondNum);
              break;
            case '÷':
              console.log('Dividing...');
              result = parseFloat(firstNum) / parseFloat(secondNum);
              break;
          }
          console.log('Answer:', result);
        }
      }

      // If Cancel is pressed then ...
      if(event.target.dataset.type === 'cancel' ) {
        result = null;
        console.log('Reset Pressesd');
      }

      // If Save is Pressed then...
      if(event.target.dataset.type === 'cancel' ) {
      }


      console.log('firstnumber: ', firstNum);
      console.log('operator', operator);
      console.log('secondNum', secondNum);

    });
  }
});