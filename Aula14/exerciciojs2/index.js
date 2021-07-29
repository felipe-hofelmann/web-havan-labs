var produtos = [
    {"id":1,"nome":"camiseta", "descricao":"algodão"},
    {"id":2,"nome":"camiseta", "descricao":"malha"}
];
var id =3; 
function salvar(){
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    produto = {"id":id, "nome":nome, "descricao":descricao};
    produtos.push(produto);
    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = ""
    id ++;
    carregarTabela();
}
function carregarTabela(){
    let tabela = document.getElementById("tbprodutos");
    let body = tabela.getElementsByTagName("tbody")[0];

    body.innerHTML = "";

    produtos.forEach(b => {
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
    produtos.forEach(b =>
    {
        if(id === b.id)
        {
            document.getElementById("nome").value = b.nome;
            document.getElementById("descricao").value = b.descricao;
        }
    });
}

function deletar(id)
{
    produtos.splice(produtos.findIndex(produto => produto.id == id),1);
    carregarTabela();

}

window.onload = function(){
carregarTabela();
}