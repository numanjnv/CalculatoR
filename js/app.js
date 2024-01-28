document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.addEventListener('click', function (event) {
      const clickedButton = event.target.innerText;

      if (!isNaN(clickedButton) || clickedButton === '.') {
        currentInput += clickedButton;
      } else if (clickedButton === 'C') {
        currentInput = '';
        operator = '';
        previousInput = '';
      } else if (clickedButton === '=') {
        currentInput = evaluate();
        operator = '';
        previousInput = '';
      } else {
        if (operator && previousInput && currentInput) {
          currentInput = evaluate();
          previousInput = currentInput;
        } else {
          previousInput = currentInput;
        }

        operator = clickedButton;
        currentInput = '';
      }

      display.innerText = currentInput || '0';
    });

    function evaluate() {
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);

      switch (operator) {
        case '+':
          return (num1 + num2).toString();
        case '-':
          return (num1 - num2).toString();
        case '*':
          return (num1 * num2).toString();
        case '/':
          return (num1 / num2).toString();
        default:
          return currentInput;
      }
    }
  });