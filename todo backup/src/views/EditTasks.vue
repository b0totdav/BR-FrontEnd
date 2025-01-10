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
    <button @click="editTask">Mentés</button>
  </div>
</template>

<script setup>
import { usetaskStore } from '@/stores/tasks';

const taskStore=usetaskStore()

const task = taskStore.task;

function editTask() {
  task.name = document.getElementById('nameInput').value;
  task.description = document.getElementById('descriptionInput').value;
  task.deadline = document.getElementById('deadlineInput').value;
  taskStore.updateTask(task);

  // Reset the form
  document.getElementById('nameInput').value = '';
  document.getElementById('descriptionInput').value = '';
  document.getElementById('deadlineInput').value = '';
  // Close the modal
  document.getElementById('editTaskModal').style.display = 'none';
  // Refresh the task list
  taskStore.fetchTasks();
  // Notify the user
  alert('Feladat sikeresen módosítva!');

  
}
</script>