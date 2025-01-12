import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usetaskStore = defineStore('task', () => {  
  const tasks = ref([
      {
      id: 1,
      nev: 'Ima mondása',
      leiras : 'Ima elmondása Szent Leclerc tiszteletére, hogy idén legyen világbajnok',
      isFinished : false,
      deadline : '2025-02-26',
      },
      {
        id: 2,
        nev: 'Megemlékezés',
        leiras : 'Megemlékezés a Malevelon Creecken elesett Helldiverekről',
        isFinished : false,
        deadline : '2025-01-20',
      },
      {
        id: 3,
        nev: 'Motor',
        leiras : '100% legális száguldás a motorral szezonkezdéskor',
        isFinished : false,
        deadline : '2025-03-01',
      },
      {
        id: 4,
        nev: 'Vizsgaremek',
        leiras : 'Vizsgaremek beadása',
        isFinished : false,
        deadline : '2025-04-01',
      },
    ])
 
function teljesitve(id) {
  let tmp = tasks.value.find( (t) => t.id == id )
  tmp.isFinished = true
  console.log(tasks.value)    
}

function addTask(name, description,deadline){
  const newTask = {
    id: tasks.value.length + 1,
    nev: name,
    leiras : description,
    isFinished : false,
    deadline : deadline,
  }
  tasks.value.push(newTask)
  console.log(tasks.value)

}

const taskToEdit = ref({
  id: 0,
  nev: '',
  leiras: ``,
  isFinished: false,
  deadline: ''
})

function findTaskToEdit(id){
  taskToEdit.value = tasks.value.find(task => task.id === id)
}


return { tasks, teljesitve, addTask, taskToEdit, findTaskToEdit  }
})
