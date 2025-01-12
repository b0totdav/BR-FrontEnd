<template>
  <table>
    <tr>
      <td><label for="name">Név:</label></td>
      <td><input type="text" name="name" id="nameInput"></td>
    </tr>
    <tr>
      <td> <label for="description">Leírás:</label></td>
      <td><textarea name="description" id="descriptionInput" cols="30" rows="10"></textarea></td>
    </tr>
    <tr>
      <td><label for="deadline">Határidő:</label></td>
      <td><input type="date" name="deadline" id="deadlineInput"></td>
    </tr>
  </table>
  <div></div>
  <button @click="addTask">Mentés</button>
    
</template>

<script setup>
import { usetaskStore } from '@/stores/tasks';

const taskStore = usetaskStore()


const addTask = () => {
  const name = document.getElementById('nameInput').value
  const description = document.getElementById('descriptionInput').value
  const deadline = document.getElementById('deadlineInput').value
  if (!name ||!description ||!deadline) {
    alert('Minden mező kitöltése kötelező!')
    return
  }
  // Validate deadline
  const currentDate = new Date()
  const deadlineDate = new Date(deadline)
  if (deadlineDate <= currentDate) {
    alert('A határidő nem lehet a jelenlegi időpontig')
    return
  }
  const stringDeadline=deadline.toString()

  // Add task to the store
  const task = {
    id: taskStore.tasks.length + 1,
    nev: name,
    leiras: description,
    deadline: stringDeadline,
    isFinished: false,
  }
  taskStore.tasks.push(task)

  // Save tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(taskStore.tasks))

  alert('Feladat sikeresen hozzáadva!')
  
  // Reset form inputs
  document.getElementById('nameInput').value = ''
  document.getElementById('descriptionInput').value = ''
  document.getElementById('deadlineInput').value = ''
}
</script>

<style scoped>
template{
  display: flex;
  flex-wrap: wrap;
}

div{
  margin: 10px;
}
label{
  margin-right: 10px;
}
</style>