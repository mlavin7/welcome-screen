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


</script>
<template>
   <h1>{{ courseDateString}}</h1>
   <div>
      <span v-if="(courseHighlights !== 'default' )
      // || new date().toISOString().substring(0, 10) == item[1].toISOString()
       " 
      class=" card  green">
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
   margin-top: 50px;
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
   font-weight: bold;
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