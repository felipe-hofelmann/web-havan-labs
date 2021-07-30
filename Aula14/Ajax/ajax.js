function carregaFormulario(){
    const request = new XMLHttpRequest;
    request.onload = function(){
        document.getElementsByClassName("conteudo")[0].innerHTML = request.responseText;
    }
    request.open("GET",'formulario.html');
    request.send();
}

function carregaLista(){
    const request = new XMLHttpRequest;
    request.onload = function(){
        document.getElementsByClassName("conteudo")[0].innerHTML = request.responseText;
    }
    request.open("GET",'listagem.html');
    request.send();
}

function home(){
    let conteudo = '<img class="logo-conteudo"src="logo-beer.png" alt="Logo">' 
                 + '<h1>Bem vindo a OpenBeer</h1>';
    document.getElementsByClassName("conteudo")[0].innerHTML = conteudo
}
window.onload = function(){
    home();
}

/********************************* Cadastro *********************************/

function cadastra(){

}