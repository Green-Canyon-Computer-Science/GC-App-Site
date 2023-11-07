<template>
    <h1>
        Responses
    </h1>
    <div v-if="pollid != -1">
        <h1>
            <!-- {{ pollid  }} -->
        </h1>
    </div>

</template>

<script setup>
    const props = defineProps(['pollid']);
</script>

<style scoped>
    div 
    {
        background: var(--background);
    }
    h1 {
        text-align: center;
        width: 100%;
    }
</style>