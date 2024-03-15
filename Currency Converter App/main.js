const appForm = document.querySelector('#form');
const inputAmount = document.getElementById('input-amount');
const resultCard = document.querySelector('.result-card');
const errorMsg = document.querySelector('.error-msg');
const currencyFrom = document.querySelector('#c_from');
const currencyTo = document.querySelector('#c_to');
const userAmount = document.querySelector('.user-amount')
const usercCode = document.querySelector('.c-code');
const convertedcCode = document.querySelector('.cc-code');
const convertAmount = document.querySelector('.converted-amount');
const loader = document.querySelector('.circle-loader');

appForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    loader.style.display = 'block'; // Show loader
    await getconvertAmount();
    loader.style.display = 'none';
});

const getconvertAmount = async ()=> {
    if(inputAmount.value === ''){
        inputAmount.classList.add('error');
        errorMsg.style.display = 'block';
    }

    else if(inputAmount.value !== ''){
        inputAmount.classList.remove('error');
        errorMsg.style.display = 'none';

        // API Details 

        const apiKey = 'cur_live_fNlcK8VdQbtcvMfgO2c2i5CcQEFxMsYbdXbChJPl';
        const apiURL = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${currencyFrom.value}`;

        try{
            const response = await fetch(apiURL);
            const currencyData = await response.json();
            for(let key of Object.keys(currencyData["data"])){
                if(currencyData.data[key].code === currencyTo.value){

                    // console.log(currencyData.data[key].code," = ",currencyData.data[key].value);
                    // console.log("Converted Value: ",currencyData.data[key].code," = ",currencyData.data[key].value*parseFloat(inputAmount.value));
                    
                    // Updating input-amount & currency_code based on user input
                    resultCard.style.display = 'block';
                    userAmount.innerHTML = inputAmount.value + " ";
                    usercCode.innerHTML = currencyFrom.value;
                    convertedcCode.innerHTML = currencyTo.value;
                    convertAmount.innerHTML = currencyData.data[key].value*parseFloat(inputAmount.value) + " ";
                }
                
            }
        }
        catch{
            console.log("Error: Fetching API")
        }
    }
    else{
        console.log("Error")
    }
}