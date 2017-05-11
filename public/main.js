document.addEventListener('DOMContentLoaded', function() {
  console.log('Calc script loaded');

  //Globals
  var displayText = "";
  var firstNum = null;
  var secondNum = null;
  var operator = null;
  var result = null;
  // Save slots
  var slot1 = null;
  var slot2 = null;
  var slot3 = null;


  // Functions
  function updateDisplay(input) {
    var textToDisplay = displayText + input;
    document.getElementById('display').innerHTML = textToDisplay;
  }
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

        if(firstNum === null) {
          // Then set firstnumber..
          firstNum = event.target.innerHTML;
          updateDisplay(firstNum);
          // console.log('should happen only once');

        } else if(!!firstNum === true && !!operator === false){
          // If the button pressed is a number and a number exists concat onto it
          firstNum = firstNum + event.target.innerHTML;
          updateDisplay(firstNum);

        } else if(!!firstNum === true && !!operator === true && secondNum === null){
          // Then set secondNum..
          secondNum = event.target.innerHTML;
          updateDisplay(secondNum);

        } else if(!!secondNum === true) {
          // If the button pressed is a number and a number exists concat onto it
          secondNum = secondNum + event.target.innerHTML;
          updateDisplay(secondNum);
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
          updateDisplay(result);
        }
      }

      // If Cancel is pressed then ...
      if(event.target.dataset.type === 'cancel' ) {
        result = null;
        firstNum = null;
        secondNum = null;
        operator = null;
        console.log('Reset Pressesd');
        displayText = '';
        updateDisplay('Result');
      }

      // If Save is Pressed then...
      // Save your current math into Saved Maths. The user will be
      // prompted to submit a name
      if(event.target.dataset.type === 'save' ) {
        // If a slot is empty...
        if(slot1 === null || slot2 === null || slot3 === null) {
          var slotName = prompt('Choose a name for the calculation', 'e.g. First Row');
          var slotTime = moment().format('Do  MMM, h:mm a');

        // Check for a free slot and use that to save the result...
          if(slot1 === null) {
            // Save the info in an object
            slot1 = {
              'name': slotName,
              'time': slotTime,
              'firstNum': firstNum,
              'secondNum': secondNum,
              'operator': operator,
              'result': result
            };
            // Update the view
            document.getElementsByClassName('slot1Name')[0].innerHTML = slotName;
            document.getElementsByClassName('slot1Time')[0].innerHTML = slotTime;

            // Clear the numbers, Reset
            result = null;
            firstNum = null;
            secondNum = null;
            operator = null;
            console.log('All vars reset');

          } else if (slot1 && slot2 === null) {
            slot2 = {
              'name': slotName,
              'time': slotTime,
              'firstNum': firstNum,
              'secondNum': secondNum,
              'operator': operator,
              'result': result
            };

            document.getElementsByClassName('slot2Name')[0].innerHTML = slotName;
            document.getElementsByClassName('slot2Time')[0].innerHTML = slotTime;

            // Clear the numbers, Reset
            result = null;
            firstNum = null;
            secondNum = null;
            operator = null;
            console.log('All vars reset');

          } else if (slot1 && slot2 && slot3 === null) {
            slot3 = {
              'name': slotName,
              'time': slotTime,
              'firstNum': firstNum,
              'secondNum': secondNum,
              'operator': operator,
              'result': result
            };

            document.getElementsByClassName('slot3Name')[0].innerHTML = slotName;
            document.getElementsByClassName('slot3Time')[0].innerHTML = slotTime;

            // Clear the numbers, Reset
            result = null;
            firstNum = null;
            secondNum = null;
            operator = null;
            console.log('All vars reset');
          } else {
            //
          }
        } else {
          // No slots are free prompt to clear one...
          alert('All slots are full, delete one and try again.');
        }
      }

      // If delete button in a slot is clicked...
      if(event.target.dataset.type === 'delete' ) {
        // Remove the info from the var...
        // Remove from the view...
        var slotToDelete = event.target.parentElement.className;

        console.log('Deleting...', event.target.parentElement.className);

        switch(slotToDelete) {
          case 'slot1':
            console.log('deleting slot 1');
            slot1 = null;
            document.getElementsByClassName('slot1Name')[0].innerHTML =  '- empty -';
            document.getElementsByClassName('slot1Time')[0].innerHTML =  '- empty -';
            break;
          case 'slot2':
            console.log('deleting slot 2');
            slot2 = null;
            document.getElementsByClassName('slot2Name')[0].innerHTML =  '- empty -';
            document.getElementsByClassName('slot2Time')[0].innerHTML =  '- empty -';
            break;
          case 'slot3':
            console.log('deleting slot 3');
            slot3 = null;
            document.getElementsByClassName('slot3Name')[0].innerHTML =  '- empty -';
            document.getElementsByClassName('slot3Time')[0].innerHTML =  '- empty -';
            break;
        }
      }

      // Recall a previous result...
      if(event.target.dataset.type === 'slot1' || event.target.dataset.type === 'slot2' || event.target.dataset.type === 'slot3') {

        // var slotSelected = event.target.parentElement.className;
        var slotSelected = event.target.dataset.type;
        console.log('slotSelected', slotSelected);

        // If you select an empty slot
        if(slotSelected === 'slot1' && slot1 === null ||
           slotSelected === 'slot2' && slot2 === null ||
           slotSelected === 'slot3' && slot3 === null ) {
          alert('That slot is empty');
        } else {
          console.log('Recalling: ', event.target.dataset.type);
          switch (slotSelected) {
            case 'slot1':
              firstNum = slot1.firstNum;
              secondNum = slot1.secondNum;
              operator = slot1.operator;
              result = slot1.result;

              break;
            case 'slot2':
              firstNum = slot2.firstNum;
              secondNum = slot2.secondNum;
              operator = slot2.operator;
              result = slot2.result;
              break;
            case 'slot3':
              firstNum = slot3.firstNum;
              secondNum = slot3.secondNum;
              operator = slot3.operator;
              result = slot3.result;
              break;
          }
        }
      }



      // Debug...
      console.log('firstnumber: ', firstNum);
      console.log('operator: ', operator);
      console.log('secondNum: ', secondNum);
      console.log('==================');
      console.log('slot1: ', slot1);
      console.log('slot2: ', slot2);
      console.log('slot3: ', slot3);
      console.log('==================');
    });
  }
});