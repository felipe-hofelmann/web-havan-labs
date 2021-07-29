//Primeiro exercício

var idade = parseInt(prompt('Digite sua idade: '), 10);

function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout (function(){
            if(idade >= 18){
                resolve()
            } else {
                reject()
            }
        }, 2000 )
    })
}

checaIdade(idade)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });

//Segundo e Terceiro exercício

var  btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

function renderRepositories(repositories) {
    listElement.innerHTML = "";
    
    for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement('li');

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
    }
}

function renderLoading(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Erro!!! Esse Usuario não existe.');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepositories() {
    var user = inputElement.value;

    if (!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
        renderRepositories(response.data);
        console.log(response);
    })
    .catch(function () {
        renderError();
    });

    
}

btnElement.onclick = listRepositories;