<script setup>
import { ref } from "vue"

import Cards from "./components/CourseCard.vue"
const currentDate = new Date().toDateString();

let blueCard = ref({

  courseDate: "5845nzjn5",
  courseName: "somethingwww",
  courseDescription: "somtheing wwwwelse"
});

</script>


<template>
  <body>

    <header>
      <h1>Wellcome To Opportunity</h1>
      <h2>{{ currentDate }}</h2>
    </header>
    <main>
      <Cards v-bind="blueCard" />
    </main>


    <footer>

    </footer>
  </body>
</template>

<style scoped>
h2{
  color: darkgray;
}
</style>
