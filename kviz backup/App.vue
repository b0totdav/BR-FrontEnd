<template>
  <header>
    <h1>Kvíz alkalmazás</h1>
  </header>
  <main>
    <form action="#">
      <table>
        <tr>
          <td colspan="2"><legend>Igaz vagy hamis? Fukusima ma lakható város az atombaleset után</legend></td>
        </tr>
        <tr>
          <td><label for="igaz">Igaz</label></td>
          <td><input type="radio" name="ih" value="true" id="igaz"></td>
        </tr>
        <tr>
          <td><label for="hamis">Hamis</label></td>
          <td><input type="radio" name="ih" value="false" id="hamis"></td>
        </tr>
        <tr>
          <td> <legend>Melyik játéknak kéne lennie a Game of the Yearnek? (Csak 5 jó válasz van)</legend></td>
          <td> <select name="goty" id="goty">
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
          <td> <input type="text" id="szoveg"></td>
        </tr>
        <tr>
          <td colspan="2"><legend>Az alábbi állítások közül melyek a hamisak?</legend></td>
        </tr>
        <tr>
          <td><label for="v1">1. kérdéshez kellett háttértudás</label></td>
          <td> <input type="checkbox" name="hamise" value="true" id="v1"></td>
        </tr>
        <tr>
          <td><label for="v2">DLC vagy Remake nem nyerhet GOTY díjat</label></td>
          <td><input type="checkbox" name="hamise" value="hamis" id="v2"></td>
        </tr>
        <tr>
          <td><label for="v3">2-nél több nem van</label></td>
          <td><input type="checkbox" name="hamise" value="hamis" id="v3"></td>
        </tr>
        <tr>
          <td><label for="v4">2. és 3. kérdés teljesen szubjektív volt</label></td>
          <td><input type="checkbox" name="hamise" id="true"></td>
        </tr>
        <tr>
          <td colspan="2"><button>Beküldés</button></td>
        </tr>
      </table>
    </form>
  </main>
</template>

<script setup>

</script>
<style scoped>
td{
  text-align: center;
  min-width: fit-content;
}
</style>
