const cardnumber = document.querySelector('.para-1');

const cardDate = document.querySelector('.card-date');

const cardCvc = document.querySelector('.card-cvc');

const cardname = document.querySelector('.card-name');

document.addEventListener("DOMContentLoaded", function() {
    const formDataJSON = localStorage.getItem('formData');

    if(formDataJSON) {
        const formData = JSON.parse(formDataJSON);

        const { name, card, year, month, cvc } = formData;
        cardDate.innerText = `${month}/${year}`;
        cardCvc.innerText = cvc;
        cardname.innerText = name;
        const spacePositions = [4, 8, 12];
        cardnumber.textContent = formatNumber(card, spacePositions);
        
    }

    localStorage.removeItem('formData');
});

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