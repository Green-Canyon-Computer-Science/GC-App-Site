<template>
    <div id="page">

        <div class="questionContainer">
                <h2> Create Poll </h2>
                <ion-card>
                    <ion-card-content>
                        <ion-input placeholder="Poll Title" label="" id="title"></ion-input>
                        <ion-input placeholder="Poll Description" label="" id="desc"></ion-input>
                        <br>
                        <ion-input placeholder="Button Text" label="" id="button"></ion-input>
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
                        <br>
                        <h1>
                            Question {{ pollData.indexOf(pollQuestion) + 1}}
                        </h1>

                        <br>
                        <ion-input placeholder="Question Title" :value="pollQuestion.title"></ion-input>
                        <ion-checkbox class="required">Requires Response</ion-checkbox>
                        <br>
                        <br>
                        <ion-radio-group :value="pollQuestion.type" justify="space-between">
                            <ion-item>
                                <ion-radio value="text" justify="space-between">Text</ion-radio>
                            </ion-item>
                            <ion-item>
                                <ion-radio value="radio" justify="space-between">Radio</ion-radio>
                            </ion-item>
                            <ion-item>
                                <ion-radio value="checkbox" justify="space-between">Checkbox</ion-radio>
                            </ion-item>
                        </ion-radio-group>
                        <br>
                        <br>
                        <div style="background-color: white; width: 80%; height: 3px;"></div>
                        <br><br>
                        <div v-for="option in pollQuestion.options" :key="option">
                            <span style="display: flex; flex-direction: row;">
                                <ion-input placeholder="Option" :value="option.title"></ion-input> 

                                <button @click="removeOption(pollQuestion, option)" style="width: 25; height: 25px; font-size: 20px;">
                                    X
                                </button>
                            </span>
                        </div>

                        <button style="width: 20%; font-size: 20px;" @click="addNewOption(pollQuestion)">
                            New Choice
                        </button>
                    
                </ion-card-content>
            </ion-card>
            <button @click="addNewQuestion">
                +
            </button>
            <br><br><br><br>
            <button style="width: 20%; font-size: 30px;" @click="createSendPoll">
                Create Poll
            </button>
        </div>        
    </div>


</template>

<script setup>
    import { ref } from "vue";
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonRadioGroup, IonRadio, IonItem } from '@ionic/vue';

    const pollData = ref([]);

    function addNewQuestion() {
        pollData.value.push({
            title: "",
            options: [
            
            ]
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
        const button = document.querySelectorAll(".button")[0].value

        const questions = document.querySelectorAll(".question");
        const poll = [];
        questions.forEach((el) => {
            const question = el.querySelectorAll("ion-input")[0].value;
            const type = el.querySelectorAll("ion-radio-group")[0].value;
            const required = el.querySelectorAll("#required")[0].value
            
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

        const endpoint = "http://ec2-18-144-101-122.us-west-1.compute.amazonaws.com/polls";
        fetch(endpoint, { method: "POST", body: JSON.stringify({
            "timestamp": (new Date().getTime()/1000),
            "title": title,
            "desc": desc,
            "button": button,
            "disabled": false,
            "polldata": JSON.stringify({poll: poll}),
            "image": "",
            "key": "w0lfpAck!@#"
        }),     headers: {
            'Content-Type': 'application/json'
        },}).then(() => {
            location.reload();
            alert("Poll created!");
        });
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
</style>