const name = document.getElementById('name');

const card = document.getElementById('card-number');

const year = document.getElementById('date-year');

const month = document.getElementById('date-month');

const cvc = document.getElementById('cvc');

const form = document.getElementById('form');

const cardnumber = document.querySelector('.para-1');

const cardDate = document.querySelector('.card-date');

const cardCvc = document.querySelector('.card-cvc');

const cardname = document.querySelector('.card-name');

const completed = document.getElementById('completed');

const completedBtn = document.querySelector('.completed-btn');

const submit = document.getElementById('submit');

form.addEventListener("submit", function (e){

    validateInput();

    if(isFormValid() == true){
        form.submit();
    }else{
        e.preventDefault();
    }
});

function isFormValid(){
    const container = document.querySelector('.input-container');

    const container_2 = document.querySelector('.year-input');  

    const container_3 = document.querySelector('.month-input');

    const container_4 = document.querySelector('.cvc-2');
    let result = true;

    if(container.classList.contains('error')){
        result = false;
    }
    if(container_2.classList.contains('error')){
        result = false;
    }
    if(container_3.classList.contains('error')){
        result = false;
    }
    if(container_4.classList.contains('error')){
        result = false;
    }
    return result;
}

function validateInput(){
    const nameValue = name.value.trim();

    const cardValue = card.value.trim();

    const yearValue = year.value.trim();

    const monthValue = month.value.trim();

    const cvcValue = cvc.value.trim();

    cardDate.innerText = `${monthValue}/${yearValue} `

    cardCvc.innerText =  cvcValue;

    cardname.innerText = nameValue;

    const spacePositions = [4, 8,12];

    cardnumber.textContent = formatNumber(cardValue, spacePositions);

    if(nameValue === ''){
        errorMessage_1(name,"Can't be blank");
    }else{
        successMessage_1(name);
    }
    
    if(cardValue === ''){
        errorMessage_1(card,"Can't be blank");
    }else if(!validateCardNumber(cardValue)){
        errorMessage_1(card,"Wrong format");
    }else{
        successMessage_1(card);
    }

    if(cvcValue === ''){
        errorMessage(cvc,"Can't be blank");
    }else{
        successMessage(cvc);
    }


    if (yearValue === '' && monthValue === '') {
        errorMessage_2(year, "Can't be blank");
        errorMessage_2(month, "Can't be blank");
    } else if (yearValue !== '' && monthValue === '') {
        successMessage_2(year);
        errorMessage_2(month, "Can't be blank");
    } else if (yearValue === '' && monthValue !== '') {
        successMessage_2(month);
        errorMessage_2(year, "Can't be blank");
    } else {
        successMessage_2(year);
        successMessage_2(month);
    }  
    
};
function errorMessage_1(element,message){
    const inputContainer = element.parentElement;

    const errorDispaly = inputContainer.querySelector('.error-1');

    errorDispaly.innerText = message;

    errorDispaly.style.visibility = 'visible';

    inputContainer.classList.add('error');

    inputContainer.classList.remove('success');
}

function errorMessage(element,message){
    const inputContainer = element.parentElement.parentElement;

    const errorDispaly = inputContainer.querySelector('.error-1');

    errorDispaly.innerText = message;

    errorDispaly.style.visibility = 'visible';

    inputContainer.classList.add('error');

    inputContainer.classList.remove('success');
}

function successMessage_1(element){
    const inputContainer = element.parentElement;

    const errorDispaly = inputContainer.querySelector('.error-1');

    errorDispaly.style.visibility = 'hidden';

    inputContainer.classList.add('success');

    inputContainer.classList.remove('error');
}
function successMessage(element){
    const inputContainer = element.parentElement.parentElement;

    const errorDispaly = inputContainer.querySelector('.error-1');

    errorDispaly.style.visibility = 'hidden';

    inputContainer.classList.add('success');

    inputContainer.classList.remove('error');
}

function errorMessage_2(element,message){
    const inputContainer = element.parentElement.parentElement.parentElement;

    const inputContainer_1 = element.parentElement;

    const errorDispaly = inputContainer.querySelector('.error-1');

    errorDispaly.innerText = message;

    errorDispaly.style.visibility = 'visible';

    inputContainer_1.classList.add('error');

    inputContainer_1.classList.remove('success');
}

function successMessage_2(element){
    const inputContainer = element.parentElement.parentElement.parentElement;

    const inputContainer_1 = element.parentElement;

    const errorDispaly = inputContainer.querySelector('.error-1');

    errorDispaly.style.visibility = 'hidden';

    inputContainer_1.classList.add('success');

    inputContainer_1.classList.remove('error');
}

function validateCardNumber(number){
    const re = /(\d{16})/g;
    return re.test(number);
}

function formatNumber(cardValue, spacePositions) {
    let formattedNumber = '';
    for (let i = 0; i < cardValue.length; i++) {
        if (spacePositions.includes(i)) {
            formattedNumber += ' ';
        }
        formattedNumber += cardValue[i];
    }
    return formattedNumber;
}