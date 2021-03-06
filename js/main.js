// Criar estrutura da página
function montarPagina() {
    // Selecionar div base da aplicação
    var app = document.getElementById('app');
    
    // Input inserir tarefa
    var iptToDo = document.createElement('input');
    iptToDo.setAttribute('type','text');
    iptToDo.setAttribute('id','todo');
    iptToDo.setAttribute('placeholder','Adicionar uma nova tarefa');

    // Botão inserir tarefa
    var btnToDo = document.createElement('button');
    btnToDo.setAttribute('onclick','novoItem()');
    btnToDo.setAttribute('id','btn-todo');
    btnToDo.innerHTML = 'Add';
    
    // Lista de tarefas
    var list = document.createElement('ul');
    list.setAttribute('id', 'list');

    // Botão excluir todas tarefas
    var btnRmvAll = document.createElement('button');
    btnRmvAll.setAttribute('onclick','removerTodos()');
    btnRmvAll.setAttribute('id','btn-remove');
    btnRmvAll.innerHTML = 'Limpar Lista';
    
    // Inserir todos elementos dentro da div app
    app.appendChild(iptToDo);
    app.appendChild(btnToDo);
    app.appendChild(list);
    app.appendChild(btnRmvAll);
}

// Adicionar novo item
function novoItem() {
    // Pegar ul e criar li
    var list = document.getElementById('list');
    var li = document.createElement('li');

    // Ícone de exclusão
    var trash = document.createElement('button');
    trash.setAttribute('id', 'trash');
    trash.innerHTML = 'X';
    
    // Pegar valor inserido
    var item = document.getElementById('todo').value;
    
    // Verificar se o campo foi preenchido
    // Se sim, adiciona valor na lista
    // Se não, exibe uma mensagem de erro
    if(item.length >= 1) {
        li.appendChild(document.createTextNode(item)); // Cria um nó de texto ao elemento li
        li.appendChild(trash);
        list.appendChild(li);
    } else {
        alert('O campo não foi preenchido');
    }
    
    // Reseta valor do input
    document.getElementById('todo').value = "";

    // Remover item ao clicar
    trash.onclick = removerItem;
}

// Remover item
function removerItem() {
    // Seleciona o elemento pai (li) do ícone de exclusão
    // Método remove() remove o elemento
    this.parentElement.remove();    
}

// Remover todos
function removerTodos() {
    // Selecionar lista
    var list = document.getElementById('list');
    // Limpa a lista
    list.innerHTML = "";
}