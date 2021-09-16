const chechBtn = document.getElementById('checkBtn')
const outputBox = document.getElementById('output')

const calculateSum = (dob) => {
    dob = dob.replaceAll('-', '');
    let sum = 0;

    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }

    return sum;
}

const compareValues = (sum, luckyNumber) => {
    if (sum % luckyNumber === 0) {
        outputBox.style.color = 'black'
        outputBox.innerText = 'Your birthday is lucky.'
    }
    else {
        outputBox.style.color = 'black'
        outputBox.innerText = 'your birthday is not so lucky.'
    }
}

const checkBirthdayLucky = () => {
    const dob = document.getElementById('dob').value
    const luckyNumber = document.getElementById('luckyNumber').value

    const sum = calculateSum(dob);

    if (sum && dob) {
        compareValues(sum, luckyNumber);
    }
    else {
        outputBox.style.color = 'red'
        outputBox.innerText = 'Fields can not be blank.'
    }

}

chechBtn.addEventListener('click', checkBirthdayLucky)