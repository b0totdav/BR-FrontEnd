<template>
  <header>
    <h1>Kvíz alkalmazás</h1>
  </header>
  <main>
      <table>
        <tbody>
        <tr>
          <td colspan="2"><legend>Igaz vagy hamis? Fukusima ma lakható város az atombaleset után</legend></td>
        </tr>
        <tr>
          <td><label for="igaz">Igaz</label></td>
          <td><input type="radio" name="ih" value="true" v-model="ih" id="igaz"></td>
        </tr>
        <tr>
          <td><label for="hamis">Hamis</label></td>
          <td><input type="radio" name="ih" value="false" v-model="ih" id="hamis"></td>
        </tr>
        <tr>
          <td> <legend>Melyik játéknak kéne lennie a Game of the Yearnek? (Csak 5 jó válasz van)</legend></td>
          <td> <select name="goty" v-model="goty" id="goty">
                  <option value="true">Elden Ring Shadow of the Erdtree</option>
                  <option value="true">Helldivers 2</option>
                  <option value="true">Warhammer 40k: Space Marine 2</option>
                  <option value="true">Stellar Blade</option>
                  <option value="true">Silent Hill 2</option>
                  <option value="false">Astrobot</option>
                  <option value="false">Black Myth Wukong</option>
                </select>
          </td>
        </tr>
        <tr>
          <td><legend>Tej vagy müzli először?</legend></td>
          <td> <input type="text" id="szoveg" v-model="milk"></td>
        </tr>
        <tr>
          <td colspan="2"><legend>Az alábbi állítások közül melyek a hamisak?</legend></td>
        </tr>
        <tr>
          <td><label for="v1">1. kérdéshez kellett háttértudás</label></td>
          <td> <input type="checkbox" name="hamise" v-model="checkboxValue[0]"  id="v1"></td>
        </tr>
        <tr>
          <td><label for="v2">DLC vagy Remake nem nyerhet GOTY díjat</label></td>
          <td><input type="checkbox" name="hamise" v-model="checkboxValue[1]"  id="v2"></td>
        </tr>
        <tr>
          <td><label for="v3">2-nél több nem van</label></td>
          <td><input type="checkbox" name="hamise" v-model="checkboxValue[2]"  id="v3"></td>
        </tr>
        <tr>
          <td><label for="v4">2. és 3. kérdés teljesen szubjektív volt</label></td>
          <td><input type="checkbox" name="hamise" v-model="checkboxValue[3]"></td>
        </tr>
        <tr>
          <td colspan="2"><button @click="szamit" class="form-control btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-pontok">Beküldés</button></td>
        </tr>
      </tbody>
      </table>
  </main>
  <Modal :pont="pontok"/>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './components/Modal.vue';
const checkboxValue =ref([false,false,false,false])
const ih = ref()
const goty=ref()
const milk = ref()
const pontok=ref()
let pontszam=0

const szamit=()=>{
  pontok.value=0
  if(ih.value==="true"){
    pontok.value+=1
  }
  if(goty.value==="true"){
    pontok.value+=1
  }
  if(milk.value=="tej"){
    pontok.value+=1
  }
  if(checkboxValue[0].value==true){
    pontszam-=1
  }
  if(checkboxValue[1].value==true){
    pontszam++
  }
  if(checkboxValue[2].value==true){
    pontszam++
  }
  if(checkboxValue[3].value==true){
    pontszam-=1
  }
  if(pontszam>=0){
    pontok.value+=pontszam
  }

}
</script>
<style scoped>
td{
  text-align: center;
  min-width: fit-content;
}
</style>
