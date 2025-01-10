<template>
  <div class="container">
    <div id="name">
      <label for="name">Név:</label>
      <input type="text" name="name" id="nameInput">
    </div>
    <div id="desc">
      <label for="description">Leírás:</label>
      <textarea name="description" id="descriptionInput" cols="30" rows="10"></textarea>
    </div>
    <div id="dead">
      <label for="deadline">Határidő:</label>
      <input type="date" name="deadline" id="deadlineInput">
    </div>
    <button @click="addTask">Mentés</button>
  </div>
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
div{
  margin: 10px;
}
label{
  margin-right: 10px;
}
</style>