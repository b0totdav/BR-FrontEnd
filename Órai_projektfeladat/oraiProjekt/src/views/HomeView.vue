<template>
<div class="container">
    <table id="tabla">
        <tr>
        <th></th>
        <th>Hétfő</th>
        <th>Kedd</th>
        <th>Szerda</th>
        <th>Csütörtök</th>
        <th>Péntek</th>
        </tr>
        <tr>
            <td>8:00</td>
            <td id="h8"></td>
            <td id="k8"></td>
            <td id="s8"></td>
            <td id="c8"></td>
            <td id="p8"></td>
        </tr>
        <tr>
            <td>9:00</td>
            <td id="h9"></td>
            <td id="k9"></td>
            <td id="s9"></td>
            <td id="c9"></td>
            <td id="p9"></td>
        </tr>
        <tr>
            <td>10:00</td>
            <td id="h10"></td>
            <td id="k10"></td>
            <td id="s10"></td>
            <td id="c10"></td>
            <td id="p10"></td>
        </tr>
        <tr>
            <td>11:00</td>
            <td id="h11"></td>
            <td id="k11"></td>
            <td id="s11"></td>
            <td id="c11"></td>
            <td id="p11"></td>
        </tr>
        <tr>
            <td>12:00</td>
            <td id="h12"></td>
            <td id="k12"></td>
            <td id="s12"></td>
            <td id="c12"></td>
            <td id="p12"></td>
        </tr>
        <tr>
            <td>13:00</td>
            <td id="h13"></td>
            <td id="k13"></td>
            <td id="s13"></td>
            <td id="c13"></td>
            <td id="p13"></td>
        </tr>
        <tr>
            <td>14:00</td>
            <td id="h14"></td>
            <td id="k14"></td>
            <td id="s14"></td>
            <td id="c14"></td>
            <td id="p14"></td>
        </tr>
        <tr>
            <td>15:00</td>
            <td id="h15"></td>
            <td id="k15"></td>
            <td id="s15"></td>
            <td id="c15"></td>
            <td id="p15"></td>
        </tr>
       
    </table>
</div>
</template>
<script setup>
import {useDateStore} from '../stores/dates.js'
import {onMounted} from 'vue'
import jQuery from 'vue'

const table = document.getElementById('tabla')
const dateStore = useDateStore()

onMounted(()=>{
    dateStore.getDates();
})

$('#tabla tr').each(function(){
    $(this).find('td').each(function(){
        dataStore.dates.forEach(date=>{
        if(cell.getAttribute('id')==date.dateId){
            cell.innerText = date.value;
            console.log(cell.innerText)
        }else{
            cell.innerHTML = '<button type="button" @click="reserve()">Foglalás</button>'
            console.log(cell.innerHTML)
        }
    })
    })
})
</script>

<style scoped>
table{
    border: solid 1px black;
    text-align: center;
    justify-self: center;
}
td{
    border: solid 1px black;
    padding: 10px;
    width: 100px;
    border-collapse: collapse;
}
tr:hover{
    background-color: #9ff2fd7c;
}
td:hover{
    background-color: #fcadad7c;
}
</style>