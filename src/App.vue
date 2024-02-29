<script setup>
import { ref } from "vue"
import Cards from "./components/CourseCard.vue"
const sheet_id = import.meta.env.VITE_GOOGLE_SHEET_ID;
const api_token = import.meta.env.VITE_GOOGLE_API_KEY;

const currentDate = new Date().toDateString();


let allData = ref([]); 



// for (const property in allData) {
//   console.log(`${property}: ${allData[property]}`);


async function fetchData() {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values:batchGet?ranges=A2%3AE100&valueRenderOption=FORMATTED_VALUE&key=${api_token}`);
  const data = await res.json()
  allData.value= data.valueRanges[0].values
  console.log(allData)

  
}

fetchData();

// let cardNumber =[]; 

//  for(let i =0;  i< allData.lenght; i++ ){
//     cardNumber.push(allData[i])
   
//  }
//  console.log(cardNumber)





</script>


<template>
  <body>

    <header>
      <h1>Wellcome To Opportunity</h1>
      <h2>{{ currentDate }}</h2>
    </header>
    <main>
    
       
      <Cards v-for="(item, index) in allData" :key=index   :courseDate ="item[1]" :courseName="item[2]" :course-description="item[3]" :course-highlights="item[4]"  />

   
    </main>
   
  
  


    <footer>

    </footer>
  </body>
</template>

<style scoped>
h1{
  font-size: 5vw;
}
h2{
  color: darkgray;
  font-size: 4vw;

}
</style>
