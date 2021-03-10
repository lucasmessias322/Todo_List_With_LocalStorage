const inputNovaTarefa = document.querySelector("#inputNovaTarefa")
const listaTarefas = document.querySelector('#listaTarefas')
let elements = []
window.onload = () =>{
    if(JSON.parse(localStorage.getItem("todo-elemento")) !== null){
       elements = JSON.parse(localStorage.getItem("todo-elemento"))
       console.log(elements);
       display()
    }
}

function addItem(){
    
    
    if(inputNovaTarefa.value.trim() != ""){
        elements.push(inputNovaTarefa.value.trim())
        if(localStorage.getItem("todo-elemento") == null){
            localStorage.setItem("todo-elemento",JSON.stringify(elements))
        }else{
            localStorage.setItem("todo-elemento",JSON.stringify(elements))
        }
    }
    console.log(localStorage.getItem("todo-elemento") );
    display()
}

function display(){
    listaTarefas.innerHTML = ""

    for(let i = 0; i < elements.length; i++ ){
        const Item = `<li id="${i}">
                        <span class="textTarefa" >${elements[i]}</span>       
                    <div>
                        <button class="btnAcao"  onClick="deletar(${i})">
                                <i class="fa fa-trash"></i>
                        </button>
                        </div>
                    </li>
                    `
        listaTarefas.innerHTML += Item
    }
}

function deletar(index){
    elements.splice(index, 1)
    display()
    console.log(elements);

    if(localStorage.getItem("todo-elemento") == null){
        localStorage.setItem("todo-elemento",JSON.stringify(elements))
    }else{
        localStorage.setItem("todo-elemento",JSON.stringify(elements))
    }
}
