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
    <h2>{{ courseDatedate }}</h2>
    <h2>{{ courseName }}</h2>
    <p>{{ courseDescription}}</p>
</div>

</template>
<style>

</style>