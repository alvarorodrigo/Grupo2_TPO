

const username = document.getElementById("username")
const tel = document.getElementById("telefono")
const city = document.getElementById("ciudad")
const email = document.getElementById("email")
const comment = document.getElementById("comments")
const myForm = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#referencia')

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings= ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(username.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if(tel.value.length < 10){
        warnings += 'El telefono no es valido <br>'
        entrar = true
    }
    if(city.value.length < 4){
        warnings += 'La ciudad no es valida <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(comment.value.length < 10){
        warnings += 'Tu consulta no es valida <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        
    }if(entrar)

        $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event){
        event.preventDefault()
        const form = new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:armarquez78@gmail.com?subject=nombre ${form.get('username')}  &body=correo ${form.get('email')} telefono ${form.get('tel')} comentario ${form.get('comment')} ciudad ${form.get('city')}`)
        $buttonMailto.click()
        myForm.reset()
    } 
    
    
    

    
    
})

