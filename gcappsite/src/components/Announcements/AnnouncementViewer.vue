<template>
    <div class="div">
        <ion-list lines="inset" class="left">
            <ion-item v-for="announcement in announcements" :key="announcement">
                <AnnouncementView @responses="announcementid = announcement.id" :announcement="announcement"/>
            </ion-item>
        </ion-list>       
    </div>

</template>

<script setup>
import { ref } from "vue";
import { IonItem, IonList } from '@ionic/vue';
import AnnouncementView from "@/components/Announcements/AnnouncementView.vue";
const announcements = ref([]);
const announcementid = ref(-1);

const getannouncements = async () => {
  const endpoint = "http://ec2-13-52-163-253.us-west-1.compute.amazonaws.com/api/announcements?max=100&offset=0&sortbytime=1";
  try {
    const result = (await (await fetch(endpoint, { method: "GET" })).json()).data;
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
  }
  return [];
}
(async () => {
  announcements.value = await getannouncements();
  console.log(announcements.value);
})();
</script>

<style scoped>
    ion-list {
        margin: 20px;
    }
    h1 {
        text-align: center;
        width: 100%;
    }
    .left {
        position: relative;
        width: 100%;
    }
    .div {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding-right: 50px;
        padding-left: 50px;
    }
    .centercontent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>