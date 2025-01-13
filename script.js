const button = document.getElementById('button');


button.addEventListener('click', function add(){ //Ou ()=>{}
    let input = document.getElementById('tarefa')
    let tarefa = input.value.trim() //trim() tira os espaços em branco
    input.value = "";

    if(tarefa == ""){
        let mensagem = document.getElementById('mensagem')
        mensagem.textContent = "Escreva uma tarefa válida";
        mensagem.style.color = "red";
    } else {
        let mensagem = document.getElementById('mensagem')
        mensagem.textContent = "Tarefa adicionada com sucesso";
        mensagem.style.color = "green";


        let item = document.createElement('li') //Criar o elemento li
        let lista = document.getElementById('listaTarefas')
        lista.appendChild(item); //Add element no pai lista == ul
        item.innerHTML = tarefa.toUpperCase()



        const excluir = document.createElement('button')
        item.appendChild(excluir);
        excluir.classList.add("btn"); //Criando a class para manipular no css



        excluir.addEventListener('click', function excluir(){
            item.remove()
            mensagem = "Tarefa removida com sucesso"
            p.innerHTML = mensagem;
        })
        
    }

})

