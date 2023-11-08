<template>
    <div class="questionContainer">
        <ion-card>
            <ion-card-content>
                <ion-input placeholder="Announcement Title" label="" id="title"></ion-input>
                <ion-input placeholder="Announcement Description" label="" id="desc"></ion-input>
                <br>
                <h1>Send with notification</h1>
                <ion-checkbox label-placement="fixed" class="check" id="allnotif">All</ion-checkbox>
                <ion-checkbox label-placement="fixed" class="check" id="eventsnotif">Events</ion-checkbox>
                <ion-checkbox label-placement="fixed" class="check" id="gamesnotif">Games</ion-checkbox>
                <ion-checkbox label-placement="fixed" class="check" id="schedulenotif">Schedule</ion-checkbox>
            </ion-card-content>
        </ion-card>
        <div id="markdowneditor">
            <v-md-editor v-model="text" height="400px" ></v-md-editor>
        </div>
        <button style="width: 50%; font-size: 30px;" @click="createSendAnnouncement">
            Create Announcement
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const text = ref('');
</script>

<style>
    textarea {
        background-color: white !important;
    }
</style>
<style scoped>
    #markdowneditor {
        width: 80%;
        margin: 10px !important;
    }
    h1, h2 {
        text-align: center;
    }
    .questionContainer, ion-card-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    button {
        width: 50px;
        height: 50px;
        font-size: 50px;
        border-radius: 50px;
    }
    .division {
        position: relative;
        width: 80%;
        height: 3px;
        background-color: white;
        left: 50%;
        transform: translate(-50%);
        margin: 20px;
    }
    ion-input {
        background-color: rgb(62, 62, 62);
        margin-bottom: 6px;
        font-size: 20px;
    }
    ion-card {
        width: 80%;
        padding: 1px;
        margin: 5px;
    }
    #id {
        overflow: scroll;
    }
    ion-item ion-radio {
        font-size: 17px;
    }
    ion-item {
        width: 400px;
    }
    .check {}
</style>