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
                        <h2>Usage Over Time</h2>
                        <div class="bg">
                            <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
                        </div>
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
    });
}

onMounted(async () => {
    chartData.value = await setChartData();
    chartOptions.value = setChartOptions();
    console.log("Chartdata set: " + chartData.value);


});

const chartData = ref();
const chartOptions = ref();

function convertTimestampToTime(timestamp) {
    // Create a new Date object using the timestamp
    const date = new Date(timestamp);

    // Extract hours, minutes, and seconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Pad each time component to ensure they are always two digits
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    // Format the time in 'HH:MM:SS' format
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

const setChartData = async () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const endpoint = "/usage24";
    let cpuList = [];
    let memList = [];
    let timeList = [];

    try {
        const result = (await (await fetch(endpoint, {method: "GET"})).json());

        for (let i = 0; i < result.length; i++) {
            cpuList.push(result[i].cpu * 100);
            memList.push(((result[i].totalmem - result[i].freemem) / result[i].totalmem) * 100);
            timeList.push(convertTimestampToTime(result[i].timestamp) + " " + Intl.DateTimeFormat().resolvedOptions().timeZone);
        }

    } catch (e) {
        console.log(e);
    }
    
    console.log(cpuList);
    console.log(memList);
    console.log(timeList);

    return {
        labels: timeList,
        datasets: [
            {
                label: 'CPU Usage',
                data: cpuList,
            },
            {
                label: 'Memory Usage',
                data: memList,
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
                    color: textColorSecondary,
                    display: false
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                min: 0, // set the minimum value of the y-axis
                max: 100, // set the maximum value of the y-axis
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