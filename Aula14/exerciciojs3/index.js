var produtos = [];

var id = 1;

function salvar(){
    let existe = false;
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let produtosJson =  localStorage.getItem("produtos");
    let produtosConvertido = JSON.parse(produtosJson);

    if (localStorage.getItem("produtos") != null) {
        id = parseInt(document.getElementById("id").innerText)
    }
    produto = {"id":id, "nome":nome, "descricao":descricao};
    var verifica = produtos.find(produto => produto.id === parseInt(document.getElementById("id").innerText));
    if (verifica) {
                verifica["nome"] = nome;
                verifica["descricao"] = descricao;
                existe = true;
                console.log(JSON.parse(localStorage.getItem("salvaId")));
                mudaId(JSON.parse(localStorage.getItem("salvaId")));
    }
    if(!existe){
        produtos.push(produto);
        id++;
        localStorage.setItem("salvaId", JSON.stringify(id));
        mudaId(JSON.parse(localStorage.getItem("salvaId")));
    }
    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = ""
    localStorage.setItem("produtos", JSON.stringify(produtos));
   
    carregarTabela();
}

function carregarTabela(){

    let produtosJson =  localStorage.getItem("produtos");
    console.log(produtosJson);
    let produtosConvertido = JSON.parse(produtosJson);
    let tabela = document.getElementById("tbprodutos");
    let body = tabela.getElementsByTagName("tbody")[0];
    body.innerHTML = "";
    produtosConvertido.forEach(b => {
        body.innerHTML += `<tr>
            <td>${b["id"]}</td>
            <td>${b["nome"]}</td>
            <td>${b["descricao"]}</td>
            <td class="edit-delit"> 
                <button onclick="editar(${b['id']})" class ="edit">  
                <b>Editar</b> 
                </button>
                <button onclick="deletar(${b['id']})" class="delit">
                <b>Deletar</b> 
                </button>
            </td>
        </tr>`;   
    });

}

function editar(id){
    let produtosJson =  localStorage.getItem("produtos");
    let produtosConvertido = JSON.parse(produtosJson);

    produtosConvertido.forEach(b =>{
        if(id === b.id)
        { 
            document.getElementById("nome").value = b.nome;
            document.getElementById("descricao").value = b.descricao;
            mudaId(id);
        }
    });
}

function deletar(id)
{
    produtos.splice(produtos.findIndex(produto => produto.id == id),1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    carregarTabela();

}

window.onload = function(){
    if (localStorage.getItem("produtos") != null) {
        id = JSON.parse(localStorage.getItem("salvaId"));
        produtos = JSON.parse(localStorage.getItem("produtos"));
        carregarTabela();
        mudaId(id);
    }

};

function mudaId(id){
    var muda = document.getElementById("id");
    muda.innerHTML = id;
}