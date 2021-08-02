function carregaFormulario(){
    const request = new XMLHttpRequest;
    request.onload = function(){
        document.getElementsByClassName("conteudo")[0].innerHTML = request.responseText;
        if (JSON.parse(localStorage.getItem("idEditar")) != null) {
            mudaId(JSON.parse(localStorage.getItem("idEditar")));
        }else{
            if(JSON.parse(localStorage.getItem("salvaId")) != null){
                mudaId(JSON.parse(localStorage.getItem("salvaId")));
            }else{
                mudaId(1);
            }
        }
    }
    request.open("GET",'formulario.html');
    request.send();
    
}

function carregaLista(){
    const request = new XMLHttpRequest;
    request.onload = function(){
        document.getElementsByClassName("conteudo")[0].innerHTML = request.responseText;
        if (localStorage.getItem("cervejas") != null) {
            carregarTabela();
        }else{
        
        }
        localStorage.setItem("idEditar",JSON.stringify(null));
    }
    request.open("GET",'listagem.html');
    request.send();

}

function home(){
    let conteudo = '<img class="logo-conteudo"src="logo-beer.png" alt="Logo">' 
                 + '<h1>Bem vindo a OpenBeer</h1>';
    document.getElementsByClassName("conteudo")[0].innerHTML = conteudo
    localStorage.setItem("idEditar",JSON.stringify(null));
}
window.onload = function(){
    home();
    if (localStorage.getItem("cervejas") != null) {
        id = JSON.parse(localStorage.getItem("salvaId"));
        cervejas = JSON.parse(localStorage.getItem("cervejas"));  
        idEditar = JSON.parse(localStorage.getItem("idEditar")); 
    }
    localStorage.setItem("idEditar",JSON.stringify(null));
  
}

/********************************* Cadastro *********************************/
var cervejas = [];

var id = 1;

function salvar(){
    let existe = false;
    let nome = document.getElementById("nome").value;
    let valor = document.getElementById("valor").value;
    let cervejasJson =  localStorage.getItem("cervejas");
    let cervejasConvertida = JSON.parse(cervejasJson);

    if (localStorage.getItem("cervejas") != null) {
        id = parseInt(document.getElementById("id").innerText)
    }
    cerveja = {"id":id, "nome":nome, "valor":valor};
    var verifica = cervejas.find(cerveja => cerveja.id === parseInt(document.getElementById("id").innerText));
    if (verifica) {
                verifica["nome"] = nome;
                verifica["valor"] = valor;
                existe = true;
                mudaId(JSON.parse(localStorage.getItem("salvaId")));
    }
    if(!existe){
        cervejas.push(cerveja);
        id++;
        localStorage.setItem("salvaId", JSON.stringify(id));
        mudaId(JSON.parse(localStorage.getItem("salvaId")));
    }
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = ""
    localStorage.setItem("cervejas", JSON.stringify(cervejas));
    localStorage.setItem("idEditar",JSON.stringify(null));
   
}

function carregarTabela(){

    if (localStorage.getItem("cervejas") != null) {
        let cervejasJson =  localStorage.getItem("cervejas");
        console.log(cervejasJson);
        let cervejasConvertida = JSON.parse(cervejasJson);
        let tabela = document.getElementById("tbcervejas");
        let body = document.getElementById("tbbody");
        body.innerHTML = " ";
        cervejasConvertida.forEach(b => {
            body.innerHTML += `<tr>
                <td>${b["id"]}</td>
                <td>${b["nome"]}</td>
                <td>${b["valor"]}</td>
                <td class="edit-delit"> 
                    <button onclick="mandaEditar(${b['id']})" class ="edit">  
                    <b>Editar</b> 
                    </button>
                    <button onclick="deletar(${b['id']})" class="delit">
                    <b>Deletar</b> 
                    </button>
                </td>
            </tr>`;   
        });
    }

}
function mandaEditar(id){
    let idEditar = JSON.parse(localStorage.getItem("idEditar"));
    localStorage.setItem("idEditar",JSON.stringify(id));
    carregaFormulario();
}
function editar(id){
    let cervejasJson =  localStorage.getItem("cervejas");
    let cervejasConvertida = JSON.parse(cervejasJson);

    cervejasConvertida.forEach(b =>{
        if(id === b.id)
        { 
            mudaId(id);
            document.getElementById("nome").value = b.nome;
            document.getElementById("valor").value = b.valor;
        }
    });
}

function deletar(id)
{
    cervejas.splice(cervejas.findIndex(cerveja => cerveja.id == id),1);
    localStorage.setItem("cervejas", JSON.stringify(cervejas));
    carregarTabela();

}

function mudaId(id){
    var altera = document.getElementById('id');
    altera.innerHTML = id;
}