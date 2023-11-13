<template>
    <div class="full">
        <h2>
            {{ props.poll.title }}
        </h2>
        <h6 style="color: gray">
            {{ props.poll.desc }}
        </h6>
        <div class="buttons full">
            <ion-item>
                <ion-button @click="response">Responses</ion-button>
            </ion-item>
            <ion-item>
                <ion-button @click="disablePoll(props.poll)"> {{ (props.poll.disabled=="false"?'Disable':'Enable') }} </ion-button>
            </ion-item>
            <ion-item>
                <ion-button color="danger" @click="conf(props.poll.title, props.poll.id)">Delete</ion-button>
            </ion-item>
        </div>

    </div>

</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardContent, IonCardSubtitle, IonInfiniteScrollContent, IonInfiniteScroll} from '@ionic/vue';
import { IonItem } from '@ionic/vue';
const props = defineProps(['poll'])
const emit = defineEmits(['responses']);

function response() {
    emit('responses');
}

function conf(title, id) {
    if (confirm('Are you sure you want to delete poll ' + title  + '?')) {
        deletePoll(id);
    
    }
}

function disablePoll(poll) {
    console.log(poll.disabled);
    const endpoint = "http://ec2-18-144-101-122.us-west-1.compute.amazonaws.com/pollsdisable";
    fetch(endpoint, { method: "POST", body: JSON.stringify({
        key: "w0lfpAck!@#",
        id: poll.id,
        disabled: !(poll.disabled=="true")
    }),     headers: {
        'Content-Type': 'application/json'
    },}).then(() => {
        location.reload();
    });
}

function deletePoll(id) {
    const endpoint = "http://ec2-18-144-101-122.us-west-1.compute.amazonaws.com/polls";
    fetch(endpoint, { method: "DELETE", body: JSON.stringify({
        key: "w0lfpAck!@#",
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
    }
</style>