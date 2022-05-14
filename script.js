// Get data
const nameInput = document.gueryselector("#name");
const email = document.gueryselector("#email");
const message = document.gueryselector("#message");
const success = document.gueryselector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerTex = "Name connot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailsValid(email.value)){
        errorNodes[1].innerTex = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

//clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

}

// check if email is valid
function emailsValid(email){
    let pattern = /\s+@\s+\.\s+/;
    return pattern.test(email);
}