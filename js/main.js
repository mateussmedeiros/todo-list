// Criar estrutura da página
function montarPagina() {
    // Selecionar div base da aplicação
    var app = document.getElementById('app');
    
    // Input inserir tarefa
    var iptToDo = document.createElement('input');
    iptToDo.setAttribute('type','text');
    iptToDo.setAttribute('id','todo');
    
    // Botão inserir tarefa
    var btnToDo = document.createElement('button');
    btnToDo.setAttribute('onclick','novoItem()');
    btnToDo.innerHTML = 'Add';
    
    // Lista de tarefas
    var list = document.createElement('ul');
    list.setAttribute('id', 'list');
    
    // Inserir o input, botão e lista dentro da div
    app.appendChild(iptToDo);
    app.appendChild(btnToDo);
    app.appendChild(list);
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
        li.appendChild(document.createTextNode(item));
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
    // Pega o elemento li e remove
    this.parentElement.remove();    
}