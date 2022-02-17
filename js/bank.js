const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clotheInput = document.getElementById('clothes');
const counting = document.getElementById('counting');
const expenseText = document.getElementById('expenses');
const balance = document.getElementById('balance');

// Saving and Remaining Amount
const save = document.getElementById('save');
const saveButton = document.getElementById('save-btn');
const saving = document.getElementById('saving');
const remaining = document.getElementById('remaining');

// get percentage
function percentage(num, per) {
    return (num / 100) * per;
}

// Get Input value as a number
function getInputField(number) {
    const amount = number.value;

    if (amount >= 0) {
        const fieldName = parseInt(amount);

        return fieldName;
    } else {
        alert('valid number');
    }
    // number.value = '';

}

// Get Total Expenses and Balance
counting.addEventListener('click', function () {
    const income = getInputField(incomeInput);
    const food = getInputField(foodInput);
    const rent = getInputField(rentInput);
    const clothe = getInputField(clotheInput);
    const expense = food + rent + clothe;

    if (income >= expense) {
        const netBalance = income - expense;
        expenseText.innerHTML = expense;
        balance.innerHTML = netBalance;

        const remainingAmountText = parseInt(remaining.innerText);
        remaining.innerText = netBalance;

    } else {
        alert('Positive number');
    }
});

