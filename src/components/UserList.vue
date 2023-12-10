<script setup lang="ts">
import ListItem from './ListItem.vue'
defineProps<{
    userInfoes: {
        name: string;
        age: number;
        desc: string;
    }[]
}>()
</script>


<template>
    <div>
        <div v-for="userInfo in userInfoes">
            <ListItem :name="userInfo.name" :age="userInfo.age" :desc="userInfo.desc"></ListItem>
        </div>
    </div>
</template>