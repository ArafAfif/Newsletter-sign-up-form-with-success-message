//Calling varrible
const sign_up = document.getElementById('sign_up_form');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const successBox = document.getElementById('success_message');
const closeBtn = document.getElementById('close_btn');
const invalid = document.getElementById('invalid');
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const emai_address = document.getElementById('email_address');

function validEmail(event){
    event.preventDefault();
    let emailValue = email.value;
    //Check email validation
    if(emailValue == null || emailValue == "" || !filter.test(emailValue)){
        invalid.innerText = 'Valid email required';
        email.classList.toggle('error');
    }else{
        show_and_close_success();
    }
}
// Show and Close success messege
function show_and_close_success(){
    sign_up.classList.toggle('main');
    successBox.classList.toggle('dismiss');
    emai_address.innerText = email.value;
}
//email address push into succsess messege
function reload(){
    location.reload();
}
submitBtn.addEventListener('click', validEmail);
closeBtn.addEventListener('click', reload);