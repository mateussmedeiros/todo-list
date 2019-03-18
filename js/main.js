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
    
    // Pegar valor inserido
    var item = document.getElementById('todo').value;
    
    // Adicionar valor na lista
    li.appendChild(document.createTextNode(item));
    list.appendChild(li);
    
    // Reseta valor do input
    document.getElementById('todo').value = "";
}