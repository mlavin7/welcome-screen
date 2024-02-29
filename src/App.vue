<script setup>
import { ref } from "vue"

import Cards from "./components/CourseCard.vue"
const currentDate = new Date().toDateString();

let courseDate = ref("23.02.2024");
let courseName = ref("a name");
let courseDescription = ref("a descriptoion");


</script>


<template>
  <body>

    <header>
      <h1>Wellcome To Opportunity</h1>
      <h2>{{ currentDate }}</h2>
    </header>
    <main>
      <Cards :course-date="courseDate" :course-name="courseName" :course-description="courseDescription" />
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
