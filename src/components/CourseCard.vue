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
    <p class="name">{{ courseName }}</p>
    <p class="description">{{ courseDescription}}</p>
</div>

</template>
<style scoped>
 .card{
    display:flex;
    flex-direction: column;
    border: solid 1px black;
    background-color: blue;
    width: 400px;
    margin-top: 50px;
    height: 100px; 
    justify-items: center;
    padding: 20px;
    gap:5px; 

 }
 p{
    font-size: small;

 }

 .hour {
    color:red;
    font-weight:bold
 }
 .name{
    font-weight: bolder;
    color: #e1a8a9;
 }
 .description{
    color: #e1a8a9
 }
</style>