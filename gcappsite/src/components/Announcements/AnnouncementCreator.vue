<template>
    <div class="questionContainer">
        <ion-card>
            <ion-card-content>
                <ion-input placeholder="Announcement Title" label="" id="title"></ion-input>
                <ion-input placeholder="Announcement Description" label="" id="desc"></ion-input>
                <ion-input placeholder="Image Link" label="" id="imglink" v-model="imageLink"></ion-input>
                <img :src="imageLink" alt="" style="border: 1px solid white; max-height: 165px;">
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
        <button style="width: 50%; font-size: 30px;  margin-bottom: 15px;" @click="createSendAnnouncement">
            Create Announcement
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonRadioGroup, IonRadio, IonItem, IonCheckbox } from '@ionic/vue';

    const text = ref('');
    const imageLink = ref('');

    function createSendAnnouncement() {
        // const pollContainer = this.$refs.poll;
        const title = document.querySelectorAll("#title")[0].value;
        const desc = document.querySelectorAll("#desc")[0].value;
        const imglink = document.querySelectorAll("#imglink")[0].value;

        console.log("Creating " + title + " with description " + desc);

        const endpoint = "http://http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/announcements";
        fetch(endpoint, { method: "POST", body: JSON.stringify({
            "timestamp": (new Date().getTime()/1000),
            "title": title,
            "descr": desc,
            "imglink": imglink,
            "article": text.value,
            "key": "w0lfpAck!@#"
        }),     headers: {
            'Content-Type': 'application/json'
        },}).then(() => {
            location.reload();
            alert("Announcement created!");
        });


        // If notification!
        const allnotif = document.querySelectorAll("#allnotif")[0].checked;
        const gamesnotif = document.querySelectorAll("#gamesnotif")[0].checked;
        const eventsnotif = document.querySelectorAll("#eventsnotif")[0].checked;
        const schedulenotif = document.querySelectorAll("#schedulenotif")[0].checked;

        if (allnotif || gamesnotif || eventsnotif || schedulenotif) {
            let recipient = "";
            if (allnotif) recipient = "all";
            if (gamesnotif) recipient = "game";
            if (eventsnotif) recipient = "event";
            if (schedulenotif) recipient = "schedule";

            console.log("Sending notification to " + recipient);

            fetch("http://http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/notification", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "topic" : recipient,
                    "title" : "New announcement!",
                    "body" : title,
                    "key": "w0lfpAck!@#"
                })
                
            })

        }
    }
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