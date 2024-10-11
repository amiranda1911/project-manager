let subscribeButton = document.getElementById("subscribe-button")
let email = document.getElementById("subscribe[email]")
let username = document.getElementById("subscribe[name]")

let loginButton = document.getElementById("login-button")
let emailLogin = document.getElementById("login[email]")
let password = document.getElementById("login[password]")

if(subscribeButton !== null)
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


loginButton.addEventListener('click', function(e){
    e.preventDefault()
    console.log("login")
    let emailRegex = /\w+@\w+.\w/
    if(emailRegex.test(emailLogin.value)){
        if(password.value != "")
            window.location.href = '/kanban.html'; 
        else
            alert('Invalid password!')
    }else
        alert('Invalid email!');    
})