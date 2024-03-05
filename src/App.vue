<script setup>
import { ref } from "vue"
import Cards from "./components/CourseCard.vue"
import Foots from "./components/Footer.vue"

import { onMounted, onBeforeUnmount } from "vue";
const sheet_id = import.meta.env.VITE_GOOGLE_SHEET_ID;
const api_token = import.meta.env.VITE_GOOGLE_API_KEY;
let allData = ref([]); 



const currentDate = new Date().toISOString().substring(0, 10);

const timeInterval = ref("");


onMounted(() => {
  timeInterval.value = setInterval(() => {
    fetchData();
  }, 1000 * 60 * 30); // wait 30mins for next update (1000 * 60 * 30)
});
onBeforeUnmount(() => {
  clearInterval(timeInterval.value); // clear the interval when the component is destroyed
});



// function cdate(currentDate, courseDate) {
//     if (currentDate === courseDate) {
//         highlightDate = true;
//     } else {
//         highlightDate = false;
//     }
// }

// cdate()

// for (const property in allData) {
//   console.log(`${property}: ${allData[property]}`);


async function fetchData() {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values:batchGet?ranges=A2%3AE100&valueRenderOption=FORMATTED_VALUE&key=${api_token}`);
  const data = await res.json()
  allData.value= data.valueRanges[0].values
  console.log(allData)

  
}

fetchData();




function sortedAsc ()  {allData.value.sort(
  (objA, objB) => new Date(objA.courseDate) - new Date(objB.courseDate),
);
}
sortedAsc();
console.log(sortedAsc())



</script>


<template>
  <!-- <header></header>
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> -->
  
 <body>

    <header>
      <h1>Wellcome To Opportunity</h1>
      <h2>{{ currentDate }}</h2>
    </header>
    <main>
    
       
      <Cards v-for="(item, index) in allData" :key=index   :courseDate ="item[1]" :courseName="item[2]" :course-description="item[3]" :course-highlights="item[4]"  />
      <Foots />
    
    </main>
   
  
  


    

    
  </body>
  <footer>
    <ul>
    <li><img src="./assets/logos/STZH_SEB_Logo.png" alt=""></li>
    <li><img src="./assets/logos/Opportunity.png" alt=""></li>
    <li><img src="./assets/logos/SAG_Logo_De.png" alt=""></li>
 </ul>
  </footer>
</template>

<style scoped>
h1{
  font-size: 4.5vw;
}
h2{
  color: darkgray;
  font-size: 4vw;

}

ul{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%; 
    position: fixed;
    Width: 100%;
    bottom: 0;
    z-index: 10;
}

</style>
