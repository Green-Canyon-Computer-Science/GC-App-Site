<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>Scheduler</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
                        
            <div>
                <h1>Scheduler</h1>
            </div>
            <div class="division"></div>

            <ion-segment v-model="selectedTab" value="tab2">
                <ion-segment-button value="tab2">
                    View Scheduled Actions
                </ion-segment-button>
            </ion-segment>
            <div v-if="selectedTab === 'tab2'">
                <ion-card v-for="schedule in scheduled">
                    <ion-card-header>       
                        <ion-card-title>{{ schedule.body.title }}</ion-card-title>
                        <ion-card-subtitle>{{ schedule.url.split("/")[schedule.url.split("/").length-1] }}</ion-card-subtitle>
                    </ion-card-header>

                    <ion-card-content>
                        <input type="datetime-local" :ref="schedule.uuid" step="1" v-if="schedule" :value="formatTimestamp(schedule.time * 1)">
                        <br>
                        <ion-button @click="sendNewSchedule(schedule.uuid, new Date($refs[schedule.uuid][0].value).getTime())">Save</ion-button>
                        <ion-button @click="deleteSchedule(schedule.uuid)" color="danger">Delete</ion-button>
                        <!--             method: 'POST',
                            body: {
                                uuid: schedule.uuid
                                time
                            } -->
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
    import AnnouncementCreator from "@/components/Announcements/AnnouncementCreator.vue";
    import AnnouncementViewer from "@/components/Announcements/AnnouncementViewer.vue";
    import { IonSegment, IonSegmentButton } from "@ionic/vue";
    import { IonPage, IonContent, IonHeader, toastController, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonToolbar, IonTitle, IonButtons } from "@ionic/vue";
    import { ref } from 'vue';

    const scheduled = ref([]);
    const dateTime = ref(0);
    const showToast = async (message) => {
      const toast = await toastController.create({
        message: message,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    };

    const getscheduled = async () => {
        const endpoint = "/scheduled";
        try {
            const result = (await (await fetch(endpoint, { method: "GET" })).json());
            console.log(result);
            return result;
        } catch (e) {
            console.error(e);
        }
        return [];
    }
    async function aquire() {
        scheduled.value = await getscheduled();
        console.log(scheduled.value);
    }
    aquire();

    function formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    function sendNewSchedule(uuid, time) {
        fetch('/changeschedule', {
            method: 'POST',
            body: JSON.stringify({
                uuid: uuid,
                time: time
            })
        }).then(() => {
            showToast("Saved")
        })
        aquire()
    }
    function deleteSchedule(uuid) {
        fetch('/deleteschedule', {
            method: 'POST',
            body: JSON.stringify({
                uuid: uuid,
            })
        }).then(() => {
            showToast("Deleted")
        });
        aquire()
    }

    const selectedTab = ref('tab2'); // Set the default selected tab
</script>

<style scoped>
    .division {
        position: relative;
        width: 80%;
        height: 3px;
        background-color: white;
        left: 50%;
        transform: translate(-50%);        
    }
    h1, h2 {
        text-align: center;
    }
</style>