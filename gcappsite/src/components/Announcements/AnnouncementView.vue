<template>
    <div class="full">
        <div>
            <h2>
            {{ props.announcement.title }}
            </h2>
            <h6 style="color: gray">
                {{ props.announcement.descr }}
            </h6>
            <div class="buttons full">
                <ion-item>
                    <ion-button color="danger" @click="conf(props.announcement.title, props.announcement.id)">Delete</ion-button>
                </ion-item>

            </div>
        </div>

        <div>
            <img :src="props.announcement.imglink" alt="" style="max-width: 150px; border-radius: 2px;">
        </div>

    </div>

</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardContent, IonCardSubtitle, IonInfiniteScrollContent, IonInfiniteScroll} from '@ionic/vue';
import { IonItem } from '@ionic/vue';
const props = defineProps(['announcement'])
const emit = defineEmits(['responses']);

function response() {
    emit('responses');
}

function conf(title, id) {
    if (confirm('Are you sure you want to delete announcement ' + title  + '?')) {
        deleteannouncement(id);
    
    }
}

function deleteannouncement(id) {
    const endpoint = "https://greencanyonapp.com/api/announcements";
    fetch(endpoint, { method: "DELETE", body: JSON.stringify({
        key: localStorage.getItem("key"),
        id: id
    }),     headers: {
        'Content-Type': 'application/json'
    },}).then(() => {
        location.reload();
    });
}

</script>

<style scoped>
    .buttons {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0 !important;
    }
    .buttons button {
        margin: 0;
        
    }
    button {
        width: 90px;
        height: 30px;
    }
    .full {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>