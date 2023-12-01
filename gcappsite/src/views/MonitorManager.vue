<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>Monitor Manager</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
                        
            <div>
                <h1>Monitor Manager</h1>
            </div>
            <div class="division"></div>
            <div class="content-container">
                <div class="content">
                    <div v-if="data != {}">
                        <h2>CPU Usage %</h2>
                        <ProgressBar :value="Math.round(data.cpu * 100)"></ProgressBar>
                        <br>
                        <h2>Memory Usage %</h2>
                        <ProgressBar :value="Math.round((data.totalmem-data.freemem) / data.totalmem * 100)"></ProgressBar>
                        <h6>{{ Math.round((data.totalmem-data.freemem)/1048576) }}mb/{{ Math.round(data.totalmem/1048576) }}mb</h6>
                        <br><br>
                        <!-- <h2>Usage Over Time</h2>
                        <div class="bg">
                            <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                        </div> -->
                    </div>
                    <div v-if="data == {}">
                        <h2>Loading ...</h2>
                    </div>
                </div>
            </div>

        </ion-content>
    </ion-page>
</template>

<script setup>
import NotificationCreator from "@/components/Notifications/NotificationCreator.vue";
import { IonSegment, IonSegmentButton } from "@ionic/vue";
import { IonPage, IonContent, IonHeader, IonMenuButton, IonToolbar, IonTitle, IonButtons } from "@ionic/vue";
import { ref, onMounted } from "vue";
import 'primevue/resources/themes/lara-light-green/theme.css'
import ProgressBar from 'primevue/progressbar';
import Chart from 'primevue/chart';

const getNewUsage = async () => {
    const endpoint = "/usage";
    console.log(endpoint);
    try {
        const result =  (await (await fetch(endpoint, {method: "GET"})).json());
        return result;
    } catch (e) {
        console.log(e);
    }
    return {};

}

const data = ref({});

setInterval(() => {
    getUsage();    
}, 5000);
getUsage();

function getUsage () {
    getNewUsage().then((result) => {
        data.value = result;
        console.log(data.value);
    });
}

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'CPU Usage',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
                label: 'Memory Usage',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}

</script>

<style scoped>
    .division {
        position: relative;
        width: 80%;
        height: 3px;
        background-color: white;
        left: 50%;
        transform: translate(-50%);        
        margin-bottom: 15px;
    }
    h1, h2, h6 {
        text-align: center;
    }

    .content-container {
        display: flex;  
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .content {
        width: 80%;

    }

    .bg {
        padding: 5px;
        background-color: white;
    }
</style>