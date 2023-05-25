
// Validaciones por javascript, responsive, enviar el email por java usando la pagina de la clase de yt.


const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#referencia')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:armarquez78@gmail.com?subject=nombre ${form.get('first_lastname')}  &body=correo ${form.get('email')} telefono ${form.get('tel')} comentario ${form.get('comment')}`)
    $buttonMailto.click()
}







