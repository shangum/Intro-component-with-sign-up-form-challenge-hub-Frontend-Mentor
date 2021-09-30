document.addEventListener("DOMContentLoaded", function(){

    console.log('DOM Load Complete');

    document.getElementById('btnSubmit').addEventListener('click', onClick_btnSubmit);

})


/* Function to validate then submit form */
function onClick_btnSubmit(event)
{    
    event.preventDefault();
    clearInvalidStyles();

    let bFormIsValid = true;    

    let firstName = document.getElementById('tbFirstName').value.trim();
    let lastName = document.getElementById('tbLastName').value.trim();
    let email = document.getElementById('tbEmail').value.trim();
    let password = document.getElementById('tbPassword').value.trim();
    

    if(firstName.length < 1){
        bFormIsValid =  false;
        applyInvalidStyle('tbFirstName');
    }
    if(lastName.length < 1) {
        bFormIsValid =  false;
        applyInvalidStyle('tbLastName');
    }
    if (email.length < 1 || validateEmail(email) == false) {
        bFormIsValid =  false;
        applyInvalidStyle('tbEmail');
    }
    if (password.length < 1 ){
        bFormIsValid =  false;
        applyInvalidStyle('tbPassword');
    }
    
    if(bFormIsValid == false){        
        return;
    }

    alert('Thanks for signing up. A link to your free trial as been sent to your email.');
    
    //Clear Form Once Alert is closed
    document.getElementById('tbFirstName').value = '';
    document.getElementById('tbLastName').value = '';
    document.getElementById('tbEmail').value = '';
    document.getElementById('tbPassword').value = '';
    

}

// commandeered function .. see ReadMe for details
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function applyInvalidStyle(elementId)
{

    let validatorTextId = elementId + '-invalid' ;
    let validatorSymbolId = elementId + '-validator-symbol';    

    document.getElementById(validatorSymbolId).classList.remove('hidden');
    document.getElementById(validatorTextId).classList.remove('hidden');
    document.getElementById(elementId).classList.add('invalid-input');
    document.getElementById(elementId).placeholder = '';
    
    if(elementId.includes('Email')){
        document.getElementById(elementId).placeholder = 'email@example/com';
    }

}

function clearInvalidStyles()
{
    document.getElementById('tbFirstName').classList.remove('invalid-input');
    document.getElementById('tbLastName').classList.remove('invalid-input');
    document.getElementById('tbEmail').classList.remove('invalid-input');
    document.getElementById('tbPassword').classList.remove('invalid-input');

    document.getElementById('tbFirstName-invalid').classList.add('hidden');
    document.getElementById('tbLastName-invalid').classList.add('hidden');
    document.getElementById('tbEmail-invalid').classList.add('hidden');
    document.getElementById('tbPassword-invalid').classList.add('hidden');   
    
    document.getElementById('tbFirstName-validator-symbol').classList.add('hidden');
    document.getElementById('tbLastName-validator-symbol').classList.add('hidden');
    document.getElementById('tbEmail-validator-symbol').classList.add('hidden');
    document.getElementById('tbPassword-validator-symbol').classList.add('hidden');   

    document.getElementById('tbFirstName').placeholder = 'First Name';
    document.getElementById('tbLastName').placeholder = 'Last Name';
    document.getElementById('tbEmail').placeholder = 'Email Address';
    document.getElementById('tbPassword').placeholder = 'Password';    
    
}
