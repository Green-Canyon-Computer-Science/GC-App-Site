<template>
    <div id="page">

        <div class="questionContainer">
                <h2> Create Poll </h2>
                <ion-card>
                    <ion-card-content>
                        <ion-input placeholder="Poll Title" label="" id="title"></ion-input>
                        <ion-input placeholder="Poll Description" label="" id="desc"></ion-input>
                        <ion-input placeholder="Image Link" label="" id="imglink" v-model="imageLink"></ion-input>
                        <img :src="imageLink" alt="" style="border: 1px solid white; max-height: 165px;">
                        <br>
                        <ion-input placeholder="Button Text" label="" id="button" value="Take Poll"></ion-input>
                        <br>
                        <h1>Send with notification</h1>
                        <ion-checkbox label-placement="fixed" class="check" id="allnotif">All</ion-checkbox>
                        <ion-checkbox label-placement="fixed" class="check" id="eventsnotif">Events</ion-checkbox>
                        <ion-checkbox label-placement="fixed" class="check" id="gamesnotif">Games</ion-checkbox>
                        <ion-checkbox label-placement="fixed" class="check" id="schedulenotif">Schedule</ion-checkbox>
                    </ion-card-content>
                </ion-card>
                
                <ion-card v-for="pollQuestion in pollData" :key="pollQuestion" class="question">
                    <ion-card-header>
                        <button @click="removeQuestion(pollQuestion)">
                            X
                        </button>
                    </ion-card-header>
                    <ion-card-content ref="poll">
                        <div>
                            <button @click="moveElement(pollData, pollData.indexOf(pollQuestion), 'up')">↑</button>
                            <button @click="moveElement(pollData, pollData.indexOf(pollQuestion), 'down')">↓</button>
                        </div>
                        <br>
                        <br>
                        <h1>
                            Question {{ pollData.indexOf(pollQuestion) + 1}}
                        </h1>

                        <ion-input placeholder="Question Title" :value="pollQuestion.title"></ion-input>
                        <ion-checkbox v-if="pollQuestion.type != 'text'" class="required">Requires Response</ion-checkbox>
                        <br>
                        <ion-item>
                            <ion-label>Question Type</ion-label>
                            <select v-model="pollQuestion.type" placeholder="Question Type">
                                <option value="text">Text</option>
                                <option value="radio">Radio</option>
                                <option value="checkbox">Checkbox</option>
                                <option value="short">Short Response</option>
                                <option value="long">Long Response</option>
                            </select>
                        </ion-item>
                        <div v-if="pollQuestion.type == 'radio' || pollQuestion.type == 'checkbox'" style="background-color: white; width: 80%; height: 3px;"></div>
                        <div v-for="option in pollQuestion.options" :key="option">
                            <span style="display: flex; flex-direction: row;">
                                <ion-input placeholder="Option" :value="option.title"></ion-input> 

                                <button @click="removeOption(pollQuestion, option)" style="width: 25; height: 25px; font-size: 20px;">
                                    X
                                </button>
                            </span>
                        </div>

                        <button v-if="pollQuestion.type == 'radio' || pollQuestion.type == 'checkbox'" style="width: 20%; font-size: 20px;" @click="addNewOption(pollQuestion)">
                            New Choice
                        </button>
                    
                </ion-card-content>
            </ion-card>
            <button @click="addNewQuestion">
                +
            </button>
            <br><br><br><br>
            <button style="width: 20%; font-size: 30px; margin-bottom: 15px;" @click="createSendPoll">
                Create Poll
            </button>
        </div>        
    </div>


</template>

<script setup>
    import { ref } from "vue";
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonRadioGroup, IonRadio, IonItem, IonCheckbox } from '@ionic/vue';
    const imageLink = ref('');
    const questionTypes = ref({});
    const pollData = ref([]);

    function addNewQuestion() {
        pollData.value.push({
            title: "",
            options: [
            
            ],
        });
    
    }

    function removeQuestion(question) {
        const index = pollData.value.indexOf(question);
        pollData.value.splice(index, 1);

    }

    function addNewOption(pollQuestion) {
        pollQuestion.options.push({'title':''});
    }
    function removeOption(pollQuestion, option) {
        pollQuestion.options.splice(pollQuestion.options.indexOf(option), 1);
    }

    function createSendPoll() {


        // const pollContainer = this.$refs.poll;
        const title = document.querySelectorAll("#title")[0].value
        const desc = document.querySelectorAll("#desc")[0].value
        const button = document.querySelectorAll("#button")[0].value
        if (!confirm('Are you sure you want to create poll ' + title  + '?')) {
            return;
        }
        const questions = document.querySelectorAll(".question");
        const poll = [];
        questions.forEach((el) => {
            const question = el.querySelectorAll("ion-input")[0].value;
            const type = el.querySelectorAll("select")[0].value;
            let required;
            if (el.querySelectorAll(".required").length > 0) {
                required = el.querySelectorAll(".required")[0].checked;
            } else {
                required = false;
            }
            
            const options = [].slice.call((el.querySelectorAll("ion-input"))).splice(1);
            const optionsArray = [];
            options.forEach((el) => {
                optionsArray.push(el.value);
            });
            poll.push({
                title: question,
                type: type,
                choices: optionsArray,
                required: required
            });
        });




        console.log("Creating " + title + " with description " + desc + " and button " + button);
        console.log(JSON.stringify(poll));

        const endpoint = "https://greencanyonapp.com/api/polls";
        fetch(endpoint, { method: "POST", body: JSON.stringify({
            "timestamp": (new Date().getTime()/1000),
            "title": title,
            "desc": desc,
            "button": button,
            "disabled": false,
            "polldata": JSON.stringify({poll: poll}),
            "image": imageLink.value,
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

            fetch("https://greencanyonapp.com/api/notification", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "topic" : recipient,
                    "title" : "New poll!",
                    "body" : "New poll '" + title + "'",
                    "key": localStorage.getItem("key")
                })
                
            })

        }
    }

    function moveElement(arr, index, direction) {
        if (index >= 0 && index < arr.length) {
            if (direction === "up" && index > 0) {
            const elementToMove = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = elementToMove;
            } else if (direction === "down" && index < arr.length - 1) {
            const elementToMove = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = elementToMove;
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