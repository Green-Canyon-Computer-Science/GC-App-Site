<template>
    <div class="div">
        <ion-list lines="inset" class="left">
            <ion-item v-for="poll in polls" :key="poll">
                <PollView @responses="pollid = poll.id" :poll="poll"/>
            </ion-item>
        </ion-list>

        <div style="width: 100%;" v-if="pollid != -1">
            <ion-list lines="none" class="left centercontent">
                <ResponseView :pollid="pollid"/>
            </ion-list>
        </div>        
    </div>

</template>

<script setup>
import { ref } from "vue";
import { IonItem, IonList } from '@ionic/vue';
import PollView from "@/components/PollView.vue";
import ResponseView from "@/components/ResponseView.vue";
const polls = ref([]);
const pollid = ref(-1);

const getPolls = async () => {
  const endpoint = "http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/polls?max=100&offset=0&sortbytime=1";
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
  polls.value = await getPolls();
  console.log(polls.value);
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