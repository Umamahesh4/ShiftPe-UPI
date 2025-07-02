const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const recharge = document.getElementById('recharge');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const rechargeValue = recharge.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
        username.style.color = 'red';
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (rechargeValue === '') {
        setError(recharge, 'Please enter a valid amount');
    } else {
        setSuccess(recharge);
        // Redirect to another page if all validations pass
        if (
            username.parentElement.classList.contains('success') &&
            email.parentElement.classList.contains('success') &&
            recharge.parentElement.classList.contains('success')
        ) {

            var url = 'https://shiftpeuidproject1styearbydmuc.on.drv.tw/ShiftPe%20UID%20Project%201st%20Year/conform%20message/conform%20message.html';
            openLinkInSamePage(url);
            function openLinkInSamePage(url) {
                window.location.href = url;}
            







        }
    }
};
