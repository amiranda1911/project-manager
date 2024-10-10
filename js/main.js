let subscribeButton = document.getElementById('subscribe-button')
let email = document.getElementById("subscribe[email]")
let username = document.getElementById("subscribe[name]")


subscribeButton.addEventListener('click', function(e){
    e.preventDefault()
    let emailRegex = /\w+@\w+.\w/
    if(emailRegex.test(email.value)){
        if(username.value != ""){
            if(localStorage.getItem(email.value) === null)
                localStorage.setItem(email.value, username.value)
        }else
            alert('Invalid username!')
    }else
        alert('Invalid email!');

    
})