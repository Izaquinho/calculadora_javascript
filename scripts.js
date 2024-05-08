document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        clearHistory();
    }
});

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result;

    if (expression.includes('%')) {

        var expressionWithoutPercent = expression.replace('%', '');
        result = eval(expressionWithoutPercent);

        result = (result / 100);
    } else {

        result = eval(expression);
    }

    document.getElementById('display').value = result;
    addToHistory(expression + ' = ' + result);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function addToHistory(expression) {
    var historyTextarea = document.getElementById('history');
    historyTextarea.value += expression + '\n';
    historyTextarea.scrollTop = historyTextarea.scrollHeight;
}

function clearHistory() {
    document.getElementById('history').value = '';
}

function toggleSign() {
    var display = document.getElementById('display');
    var currentValue = parseFloat(display.value);

    if (!isNaN(currentValue)) {
        display.value = -currentValue;
    }
}
