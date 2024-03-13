'use strict';

//Generating Random Number

function rand_num(){
    const number = Math.trunc(Math.random() * 20)+1;
    console.log(number);
    return number;
}
var Random_number = rand_num();

const user_input = document.querySelector('#user_number');
const message = document.querySelector('.message');
const secret_number = document.querySelector('.secret_number');
const current_score = document.querySelector('.current_score');

// initial score

let score = 20;
let high_score = 0;

// Storing the value of user input and adding click-event 
document.querySelector('.check').addEventListener('click', function(){
    //changeing type into number
    var guess_number = Number(user_input.value);

    //message on No-Input from user
    if(!guess_number){
        message.textContent = "🚫 Number Not Found";
    }
    //message on Correct Input from user and some CSS changes
    else if(guess_number === Random_number){
        message.textContent = "🎉 Correct Number";
        document.querySelector('body').style.backgroundColor = '#3fb400';
        secret_number.style.width = '40%';
        secret_number.textContent = Random_number;

        if(score>high_score){
            high_score = score;
            document.querySelector('.high_score').textContent = high_score;
        }
    }

    //message on greater Input from user
    else if(guess_number > Random_number){

        if(score>1){
            message.textContent = "⚡Too High";
            score--;
            current_score.textContent = score;
        }

        else{
            message.textContent = "🥲 Game Over";
        }

    }

    //message on Lower Input from user
    else if(guess_number < Random_number){

        if(score>1){
            message.textContent = "👇 Too Low";
            score--;
            current_score.textContent = score;
        }
        else{
            message.textContent = "🥲 Game Over";
        }

    }

})

// click event to reset all the values

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    current_score.textContent = score;
    Random_number = rand_num();
    message.textContent = "Start Guessing...";
    document.querySelector('body').style.backgroundColor = '#202020';
    secret_number.style.width = '20%';
    secret_number.textContent = "?";
    user_input.value = null;


})
