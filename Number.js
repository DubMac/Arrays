function performOperations() {
    var arrayInput = document.getElementById('array').value;
    var numberArray = arrayInput.split(',').map(Number);

    var results = [];
    results.push('Length of array: ' + getArrayLength(numberArray));
    results.push('Mean of numbers: ' + getMean(numberArray));
    results.push('Sum of numbers: ' + getSum(numberArray));
    results.push('Smallest number: ' + getSmallestNumber(numberArray));
    results.push('Largest number: ' + getLargestNumber(numberArray));
    results.push('Range of numbers: ' + getRange(numberArray));
    results.push('Even numbers: ' + getEvenNumbers(numberArray));
    results.push('Odd numbers: ' + getOddNumbers(numberArray));

    displayResults(results);
}

function getArrayLength(arr) {
    return arr.length;
}

function getMean(arr) {
    var sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

function getSum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function getSmallestNumber(arr) {
    return Math.min(...arr);
}

function getLargestNumber(arr) {
    return Math.max(...arr);
}

function getRange(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

function displayResults(results) {
    var resultsElement = document.getElementById('results');
    resultsElement.innerHTML = '';
    results.forEach(result => {
        var listItem = document.createElement('li');
        listItem.textContent = result;
        resultsElement.appendChild(listItem);
    });
}
