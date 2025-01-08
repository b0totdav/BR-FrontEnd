import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usemadarStore = defineStore('madar', () => {  
    const madarak = ref([
        {
        id: 1,
        nev: 'Veréb',
        fesztav : 20,
        ragadozo : false,
        ropkepes : true,
        kep: 'https://madarpark.hu/wp-content/uploads/2014/03/Passer_domesticus_male_15-1.jpg'
        },
        {
          id: 2,
        nev: 'Pulyka',
        fesztav : 120,
        ragadozo : false,
        ropkepes : false,
        kep : 'https://www.e-kepeslap.com/kepek/kepeslapok/hatterkepek/allatok-baromfi/kozepes/2524-hazi-pulyka.jpg',
        },
        {
          id: 3,
        nev: 'Sas',
        fesztav : 220,
        ragadozo : true,
        ropkepes : true,
        kep : 'https://www.europamadarai.hu/wp-content/uploads/2022/01/fekete-sas5.jpg'
        },
        {
          id: 4,
        nev: 'Fecske',
        fesztav : 30,
        ragadozo : false,
        ropkepes : true,
        kep : 'https://nlc.p3k.hu/uploads/2020/04/fecsk-768x432.jpg'
        },
        {
          id: 5,
        nev: 'Flamingó',
        fesztav : 140,
        ragadozo : false,
        ropkepes : true,
        kep : 'https://ng.24.hu/uploads/2023/01/Phoenicopterus-chilensis.jpeg'
        },
        {
          id: 6,
        nev: 'Pelikán',
        fesztav : 250,
        ragadozo : true,
        ropkepes : true,
        kep : 'https://madaraink.hu/wp-content/uploads/2023/06/Pelikan2-735x400.jpeg'
        },
        {
          id: 7,
        nev: 'Páva',
        fesztav : 150,
        ragadozo : false,
        ropkepes : false,
        kep : 'https://nlc.p3k.hu/uploads/2020/12/pava-768x432.jpg'
        }
      ])
   
  function szavazok(id) {
    let tmp = madarak.value.find( (m) => m.id == id )
    tmp.szavazat = tmp.szavazat + 1 || 1
    console.log(madarak.value)    
  }

  return { madarak, szavazok }
})