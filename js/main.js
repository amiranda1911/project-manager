let subscribeButton = document.getElementById("subscribe-button")
let email = document.getElementById("subscribe[email]")
let username = document.getElementById("subscribe[name]")

let loginButton = document.getElementById("login-button")
let emailLogin = document.getElementById("login[email]")
let password = document.getElementById("login[password]")

let mainMenu = document.getElementById("main-menu")
let responsiveMenuButton = document.getElementById("responsive-menu")

function createModal(message){
    let modalBackground = document.createElement('div')
    let modalBox = document.createElement('div')
    modalBackground.classList.add('modal-background') 
    modalBox.classList.add('modal-box')
    modalBox.innerHTML = message
    modalBackground.appendChild(modalBox)
    let footer = document.getElementById('main-footer');
    footer.appendChild(modalBackground)
    setTimeout(function(){
        document.querySelector('.modal-background').remove()
    }, 2000)
}


if(subscribeButton !== null)
    subscribeButton.addEventListener('click', function(e){
        e.preventDefault()
        let emailRegex = /\w+@\w+.\w/
        if(emailRegex.test(email.value)){
            if(username.value != ""){
                if(localStorage.getItem(email.value) === null){
                    localStorage.setItem(email.value, username.value)
                    createModal('Sucessful subscribe!')
                }
            }else
                createModal('Invalid username!')
        }else
            createModal('Invalid email!');    
    })

if(loginButton !== null)
    loginButton.addEventListener('click', function(e){
        e.preventDefault()
        console.log("login")
        let emailRegex = /\w+@\w+.\w/
        if(emailRegex.test(emailLogin.value)){
            if(password.value != "")
                window.location.href = '/kanban.html'; 
            else
                createModal('Invalid password!')
        }else
            createModal('Invalid email!');    
})


if(mainMenu !== null)
    mainMenu.addEventListener('click', function(e){
        e.preventDefault()
        mainMenu.classList.toggle('show')
    })

if(responsiveMenuButton !== null)
    responsiveMenuButton.addEventListener('click', function(e){
        e.preventDefault()
        mainMenu.classList.toggle('show')
    })


function stopPropagation(e){
    e.stopPropagation()
}