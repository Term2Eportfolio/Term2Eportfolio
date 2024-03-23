function Login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (password=="hello"){
        if (window.confirm('Login Successful, Welcome '  + username)){
            window.open("index.html");};
        }
        else{
            alert('Wrong Username/Password, Please Try Again')}
    }