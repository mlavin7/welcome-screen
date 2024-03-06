<script setup>
import { defineProps } from 'vue';

const props = defineProps(
   {
      courseDate: String,
      courseName: String,
      courseDescription: String,
      courseHighlights: String,
   }
)

// eslint-disable-next-line no-undef
let todayDate = new Date()
//console.log(todayDate)

let eventDate = new Date(props.courseDate)
//console.groupCollapsed(eventDate)

let timeDiference =  eventDate- todayDate
//console.log( timeDiference)

let dayRamianing = Math.ceil(timeDiference / 1000 /60 /60 /24)
console.log(dayRamianing)
</script>
<template>
   <h1 v-if = "courseDateString ">{{ courseDateString}}</h1>
   <div>
      <span v-if="(courseHighlights !== 'default' || dayRamianing <1)" class=" card  green">
         <p class="hour">{{ courseDate }}</p>
         <p class="name">{{ courseName }}</p>
         <p class="description">{{ courseDescription }}</p>
      </span>

      <span v-else class=" card  blue">
         <p class="hour">{{ courseDate }}</p>
         <p class="name">{{ courseName }}</p>
         <p class="description">{{ courseDescription }}</p>
      </span>

   </div>
</template>
<style scoped>
.card {
   display: flex;
   flex-direction: column;
   border: solid 1px black;
   width: 55vw;
   margin-top: 5%;
   height: 10vw;
   justify-items: center;
   justify-content: space-between;
   padding: 2%;
}

p {
   font-size: 2vw;
   width: 100%;
}

.hour {
   color: red;
   font-weight: bolder;
   font-size: 2vw;
}

.name {
   font-weight: bolder;
   color: #e1a8a9;
   font-size: 2vw;
}

.description {
   color: #e1a8a9;
   font-size: 2vw;
}

.green {
   background-color: green;
}

.blue {
   background-color: blue;
}
</style>