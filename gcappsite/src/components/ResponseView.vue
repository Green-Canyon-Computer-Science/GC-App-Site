<template>
    <h1>
        Responses
    </h1>
    <div v-if="pollid != -1">
    </div>
    <ion-item class="centercontent" >
        <ion-button @click="downloadCSV(pollid)">Download CSV</ion-button>
    </ion-item>

</template>

<script setup>
    import { ref } from "vue";
    import { IonButton, IonItem } from '@ionic/vue';
    const props = defineProps(['pollid']);

    async function downloadCSV(pollid) {
        try {
        const url = `https://greencanyonapp.com/api/pollsresponsescsv?pollid=${pollid}`;
        const response = await fetch(url, {
          headers: {
            // Add your custom headers here
            'key': localStorage.getItem("key")
          }
        });

        if (!response.ok) throw new Error('Network response was not ok.');

        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', `poll_${pollid}.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        console.error('Error downloading the file:', error);
      } 
    }
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