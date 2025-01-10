import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usetaskStore = defineStore('task', () => {  
  const tasks = ref([
      {
      id: 1,
      nev: 'Title 1',
      leiras : 'Desc 1',
      isFinished : false,
      deadline : '2025-01-15',
      },
      {
        id: 2,
        nev: 'Title 2',
        leiras : 'Desc 2',
        isFinished : false,
        deadline : '2025-01-20',
      },
      {
        id: 3,
        nev: 'Title 3',
        leiras : 'Desc 3',
        isFinished : false,
        deadline : '2025-09-11',
      },
      {
        id: 4,
        nev: 'Title 4',
        leiras : 'Desc 4',
        isFinished : false,
        deadline : '2025-03-16',
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
function editTask(id, name, description, deadline){
  let tmp = tasks.value.find( (t) => t.id == id )
  tmp.nev = name
  tmp.leiras = description
  tmp.deadline = deadline
  console.log(tasks.value)


}

return { tasks, teljesitve, addTask, editTask }
})
