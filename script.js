

var fizze = document.getElementById('dumbname');


fizzBuzz();

function fizzBuzz(){
    for(i = 1; i < 101; i++){
        if(i % 15 === 0){
            add('FizzBuzz',fizze,'fizzbuzz');
        }
        else if(i % 3 === 0){
            add('Fizz',fizze,'fizz');
        }
        else if(i % 5 === 0){
            add('Buzz',fizze,'buzz');
        }
        else{
            add(i,fizze,'number');
        }
    }
}

function add(val,list, class1){
    var newNumber = document.createElement("div");
    newNumber.innerText = val;
    newNumber.classList.add(class1);
    list.appendChild(newNumber); 
}