<script setup>
import useStore from "../store/comm"

const commStore = useStore()
</script>

<template>
    <div>
        Home Page - {{ commStore.count }}
    </div>
</template>