

console.log('Javascript file on web page')



function submitForm(ev) {
    ev.preventDefault();
    
    var elmInputUsername = document.getElementById('username');
    
    console.log(elmInputUsername.value)

    var username = elmInputUsername.value;
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    axios.post('https://training.pyfullstack.com/api/v1/auth/signup', {
        "username": username,
        "password": password,
        "name": name,
        "email": email
      })
    .then(function (response) {
        // handle success
        console.log(response);
        alert(response.data.message)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

    console.log(name)
    console.log(email)
    console.log(password)
    

}

