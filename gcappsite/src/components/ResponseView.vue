<template>
    <h1>
        Responses
    </h1>
    <div v-if="pollid != -1">
    </div>
    <ion-item class="centercontent" >
        <ion-button  :href="'http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/pollsresponsescsv?pollid=' + pollid" :download="'poll_' + pollid + '.csv'" >Download CSV</ion-button>
    </ion-item>

</template>

<script setup>
    import { ref } from "vue";
    import { IonButton, IonItem } from '@ionic/vue';
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