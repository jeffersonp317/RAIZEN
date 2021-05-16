
/*-----------------------------------------------Página do Login Raizen------------------------------------------*/

//Elemento do DOM:
const $enviar = document.querySelector("botao_login")
/*---------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------Função de validação da tela de login------------------------------------*/
function validar() {
    
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let erro_email = document.getElementById('Erroemail')
    let erro_senha = document.getElementById('Errosenha')
    
    const home_raizen = onclick="window.location.href=home raizen.html"

    if (email.value || senha.value == "") {
        document.getElementById('email').style.border = '1px solid #FF0055'
        document.getElementById('senha').style.border = '1px solid #FF0055'
        erro_email.style.display = 'block'
        erro_senha.style.display = 'block'
        
        return false
    } else {
        $enviar = home_raizen
    }
    return true
}

