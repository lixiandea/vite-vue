<script setup lang="ts">
defineProps<{ name:string, age: number, desc:string }>()
</script>

<template>
    <div>
        <h1>{{ name }}</h1>
        <p>{{ age }}</p>
        <p>{{ desc }}</p>
    </div>
</template>

<style scoped>

</style>