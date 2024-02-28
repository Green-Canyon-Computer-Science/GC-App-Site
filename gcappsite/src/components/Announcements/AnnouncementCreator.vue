<template>
    <div class="questionContainer">
        <ion-card>
            <ion-card-content>
                <ion-input placeholder="Announcement Title" label="" id="title"></ion-input>
                <ion-input placeholder="Announcement Description" label="" id="desc"></ion-input>
                <ion-input placeholder="Image Link" label="" id="imglink" v-model="imageLink"></ion-input>
                <img :src="imageLink" alt="" style="border: 1px solid white; max-height: 165px;">

                <ion-checkbox label-placement="fixed" class="check" id="schedule" v-model="schedule">Schedule</ion-checkbox>
                <input type="datetime-local" step="1" v-model="dateTime" v-if="schedule">
                <p>{{ new Date(dateTime).getTime() }}</p>                
                <br>
                <h1>Notify</h1>
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
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonDatetime, IonCardContent, IonInput, IonRadioGroup, IonRadio, IonItem, IonCheckbox } from '@ionic/vue';

    const text = ref('');
    const imageLink = ref('');
    const schedule = ref(false);
    const dateTime = ref(0);

    function createSendAnnouncement() {
        // const pollContainer = this.$refs.poll;
        const title = document.querySelectorAll("#title")[0].value;
        const desc = document.querySelectorAll("#desc")[0].value;
        const imglink = document.querySelectorAll("#imglink")[0].value;

        console.log("Creating " + title + " with description " + desc);

        if (!schedule.value) {
            const endpoint = "https://greencanyonapp.com/api/announcements";
            fetch(endpoint, { method: "POST", body: JSON.stringify({
                "timestamp": (new Date().getTime()/1000),
                "title": title,
                "descr": desc,
                "imglink": imglink,
                "article": text.value,
                "key": localStorage.getItem("key")
            }),     headers: {
                'Content-Type': 'application/json'
            },}).then((response) => {
            if (!response.ok) {
                alert("There was an error creating poll. Are you sure you have a key saved?");
                return;
            }
            location.reload();
                alert("Poll created!");
            }).catch(e => {
                alert("An unknown error occurred.");
            });
        } else {
            const endpoint = "https://greencanyonapp.com/api/announcements";
            
            fetch("/scheduleaction", {
                method: "POST",
                body: JSON.stringify({
                    endpoint: "announcements",
                    body: JSON.stringify({
                        "timestamp": (new Date().getTime()/1000),
                        "title": title,
                        "descr": desc,
                        "imglink": imglink,
                        "article": text.value,
                        "key": localStorage.getItem("key")
                    }),
                    time: new Date(dateTime.value).getTime()
                })
            });
        }



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

            if (!schedule.value) {
                fetch("https://greencanyonapp.com/api/notification", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "topic" : recipient,
                        "title" : "New announcement!",
                        "body" : title,
                        "key": localStorage.getItem("key")
                    })
                })
            } else {
                fetch("/scheduleaction", {
                    method: "POST",
                    body: JSON.stringify({
                        endpoint: "notification",
                        body: JSON.stringify({
                            "topic" : recipient,
                            "title" : "New announcement!",
                            "body" : title,
                            "key": localStorage.getItem("key")
                        }),
                        time: new Date(dateTime.value).getTime()
                    })
                });
            }

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