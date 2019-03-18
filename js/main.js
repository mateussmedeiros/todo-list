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
    btnToDo.innerHTML = 'Add';
    
    // Inserir o input e botão dentro da div
    app.appendChild(iptToDo);
    app.appendChild(btnToDo);
}