

console.log('Javascript file on web page')



function submitForm(ev) {
    ev.preventDefault();
    
    var elmInputUsername = document.getElementById('username');
    
    console.log(elmInputUsername.value)
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(name)
    console.log(email)
    console.log(password)
    

}

