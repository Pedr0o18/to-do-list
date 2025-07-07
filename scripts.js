/* Lista de afazeres dinâmica */

const inputArea = document.querySelector("#task")
const btnSave = document.querySelector("#btnSave")
const btnDelete = document.querySelector("#btnDelete")
const fullList = document.querySelector("#list")

// Função para criar e adicionar os elementos <li>

const createTask = () => {

    // Botão de Delete universal
    const btnDel = document.createElement("button")
    btnDel.setAttribute("id", "btnDelete")
    btnDel.innerHTML = "Excluir"

    let taskTxt = inputArea.value // texto da task

    let taskLi = document.createElement("li") // elemento <li>
    taskLi.setAttribute("class", "task")

    let taskP = document.createElement("p") // elemento <p>
    taskP.innerHTML = taskTxt

    taskLi.appendChild(taskP)
    taskLi.appendChild(btnDel)

    taskLi.addEventListener("click", (evt) => {
        taskLi.classList.toggle("marked")
    })

    fullList.appendChild(taskLi)

    taskLi.lastElementChild.addEventListener("click", () => { // Função para remover
        fullList.removeChild(taskLi)
    })
    
    inputArea.value = ""
}

btnSave.addEventListener("click", createTask)
