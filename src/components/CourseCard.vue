<script setup>
import { defineProps } from 'vue';

const props = defineProps(
    {
        courseDate: String,
        courseName : String,
        courseDescription: String
    }
)


</script>
<template>

<div class=" card box">
    <p class="hour">{{ courseDate }}</p>
    <p class="name">{{ courseDate }}</p>
    <p class="description">{{ courseDescription}}</p>
</div>

</template>
<style scoped>
 .card{
    display:flex;
    flex-direction: column;
    border: solid 1px black;
    background-color: blue;
    width: 55vw;
    margin-top: 50px;
    height: 10vw; 
    justify-items: center;
    justify-content: space-between;
    padding: 2%;
     

 }
 p{
    font-size: 2vw;
    width: 100%;
 }

 .hour {
    color:red;
    font-weight:bold; 
    font-size:2vw;
 }
 .name{
    font-weight: bolder;
    color: #e1a8a9;
    font-size: 2vw;
 }
 .description{
    color: #e1a8a9;
    font-size: 2vw;
 }
</style>