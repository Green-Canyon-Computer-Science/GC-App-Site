<template>
    <h1>Send Notification</h1>
    <div class="questionContainer">
        <ion-card>
            <ion-card-content>
                <ion-input placeholder="Notification Title" label="" id="title"></ion-input>
                <ion-input placeholder="Notification Body" label="" id="desc"></ion-input>
                <ion-checkbox label-placement="fixed" class="check" id="schedule" v-model="schedule">Schedule</ion-checkbox>
                <input type="datetime-local" step="1" v-model="dateTime" v-if="schedule">
                <p>{{ new Date(dateTime).getTime() }}</p>
                <br>
                <h1>Recipient</h1>
                <ion-checkbox label-placement="fixed" class="check" id="allnotif">All</ion-checkbox>
                <ion-checkbox label-placement="fixed" class="check" id="eventsnotif">Events</ion-checkbox>
                <ion-checkbox label-placement="fixed" class="check" id="gamesnotif">Games</ion-checkbox>
                <ion-checkbox label-placement="fixed" class="check" id="schedulenotif">Schedule</ion-checkbox>
                
                <br>
                <ion-button @click="sendNotification">
                    Send
                </ion-button>
            </ion-card-content>
        </ion-card>
    </div>

</template>

<script setup>
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonRadioGroup, IonRadio, IonItem, IonCheckbox } from '@ionic/vue';
    import { ref } from "vue";
    const schedule = ref(false);
    const dateTime = ref(0);

    const handleDateTimeChange = (event) => {
        const timestamp = new Date(event.target.value).getTime();
        console.log(timestamp); // Use the timestamp as needed
    };

    function sendNotification() {
        const title = document.querySelectorAll("#title")[0].value;
        const body = document.querySelectorAll("#desc")[0].value;

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
                        "title" : title,
                        "body" : body,
                        "key": localStorage.getItem("key")
                    })
                    
                }).then(() => {
                    location.reload();
                        
                });
            } else {
 
                fetch("/scheduleaction", {
                    method: "POST",
                    body: JSON.stringify({
                        endpoint: "notification",
                        body: JSON.stringify({
                            "topic" : recipient,
                            "title" : title,
                            "body" : body,
                            "key": localStorage.getItem("key")
                        }),
                        time: new Date(dateTime.value).getTime()
                    })
                    
                }).then(() => {
                    location.reload();
                        
                });
            }
        }
    }
</script>

<style scoped>
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