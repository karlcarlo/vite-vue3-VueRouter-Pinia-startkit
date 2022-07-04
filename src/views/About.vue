<script setup>
import useStore from '../store/comm'

const commStore = useStore()

function clickHandler() {
    commStore.inc()
}
</script>

<template>
    <div>
        About Page - <button @click="clickHandler">增加count</button>
    </div>
</template>