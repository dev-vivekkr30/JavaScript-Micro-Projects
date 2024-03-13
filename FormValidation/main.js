const form = document.getElementById("form");
const username = document.getElementById("userName");
const name = document.getElementById("fullName");
const email = document.getElementById("emailID");
const password = document.getElementById("passWord");
const cpassword = document.getElementById("cPassword");
const submit = document.getElementById("submitBtn");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    validateInputs();
});

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const nameValue = name.value.trim();
    const emialValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // Name Validation
    if(nameValue === ''){
        setError(name, 'Full name is required');
    }
    else{
        setSuccess(name);
    }
    // Username Validation
    if(usernameValue === ''){
        setError(username, 'Username is required');
    }
    else{
        setSuccess(username);
    }
    // Email Validation
    if(emialValue === ''){
        setError(email,'Email is required')
    }
    else if(!isValidEmail(emialValue)){
        setError(email,'Please provide a valid email')
    }
    else{
        setSuccess(email)
    }
    // Password Validation
    if(passwordValue === ''){
        setError(password, 'Password required');
    }
    else if(passwordValue.length<=8){
        setError(password, 'Password must be in 8 character.')
    }
    else{
        setSuccess(password)
    }
    // Confirm Password Validation
    if(cpasswordValue === ''){
        setError(cpassword,'Password required');
    }
    else if(cpasswordValue !== passwordValue){
        setError(cpassword, ' Password must be same');
    }
    else if(cpasswordValue.length<=8){
        setError(cpassword, 'Password must be in 8 character.')
    }
    else{
        setSuccess(cpassword)
    }
    
}

function isValidEmail(e){
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(e);
}

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-msg');
    errorDisplay.innerText = message;
    element.classList.add('error');
    element.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-msg');
    errorDisplay.innerText = '';
    element.classList.add('success');
    element.classList.remove('error');
}