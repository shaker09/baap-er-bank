document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    //get user password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    //check email and password
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret12'){
        window.location.href = 'banking.html'
    }
});

