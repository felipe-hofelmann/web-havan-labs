window.onload = function () 
{ 
    console.log("Pagina carregada!") 
}

function alerta()
{
    alert('Alertado');
}

function soma(n1,n2)
{
    let soma = n1+n2;
    console.log(soma);

}

function criaLink(){
    
    let link = document.getElementById("link");
    link.innerHTML = "<a>Link Criado</a>";
}

function mudaCor()

{   let link = document.getElementById('link');
    link.style.backgroundColor = "#0f0";
}

function addBorda()
{
    let link = document.getElementById('link');
    link.style.border = "1px solid black";
}