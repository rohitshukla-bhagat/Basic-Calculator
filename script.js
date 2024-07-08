// Inisialize variables
let string = "";
let presskey = "";
let button = document.querySelectorAll('.btn');
let scrn = document.querySelector('input');
// Function for update the screen of calculator
function updatescreen(e){
    scrn.value = e ;
}
// Keyboard key fucntionality logic
addEventListener('keydown' , function(e){
    presskey = e.key;
    if(!isNaN(presskey) || ['+' , '-' , '*' , '/' , '%' , '.'].includes(presskey)){
        string = string + presskey ;
        updatescreen(string);
    }else if(presskey == 'Backspace'){
        string = string.slice(0 , -1);
        updatescreen(string);
    }else if((presskey == 'Delete')|| (presskey == 'Escape')){
        string = "";
        updatescreen(string);
    }else if((presskey == 'Enter')){
        e.preventDefault();
        string = eval(string);
        updatescreen(string);
    }
});
// Calculator buttons fucntionality logic
button.forEach((button)=>{
    button.addEventListener('click' , (ele) => {
        if(ele.target.innerText == '='){
            string = eval(string);
            updatescreen(string);
        }else if(ele.target.innerText == 'C'){
            string = "";
            updatescreen(string);
        }else if(ele.target.innerText == '«'){
            string = string.slice(0 , -1);
            updatescreen(string);
        }else{
            string = string + ele.target.innerText;
            updatescreen(string);
        }
    });
});
