<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>Poll Manager</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
                        
            <div>
                <h1>Poll Manager</h1>
            </div>
            <div class="division"></div>

            <ion-segment v-model="selectedTab" value="tab2">
                <ion-segment-button value="tab2">
                    View Polls
                </ion-segment-button>
                <ion-segment-button value="tab1">
                    Create Poll
                </ion-segment-button>
            </ion-segment>

            <!-- Render content based on the selected tab -->
            <div v-if="selectedTab === 'tab1'">
                <PollCreator />
            </div>
            <div v-if="selectedTab === 'tab2'">
                <PollViewer />    
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
    import PollCreator from "@/components/PollCreator.vue";
    import PollViewer from "@/components/PollViewer.vue";
    import { IonSegment, IonSegmentButton } from "@ionic/vue";
    import { IonPage, IonContent, IonHeader, IonMenuButton, IonToolbar, IonTitle, IonButtons } from "@ionic/vue";
    import { ref } from 'vue';

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