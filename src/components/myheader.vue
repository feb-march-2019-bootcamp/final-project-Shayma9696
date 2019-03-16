<template>
  <div class="headerr" id="header">
   <div class="head">
      <div class="intt">
           <h1>Welcome</h1>
        <br>
        <br>
        <br>
        <p id="intoP">
            Having a personal website is an advantage in itself. It helps you reach several personal goals at a time,
          <br>being the top notch destination for everyone, who wants to find out more about your occupation, hobby,
          <br>professional, personal details, life facts and other information you will upload to the Internet.
        </p>
        <br><br>
        <button class="detail" @click="red()"></button>
        <button class="detail" @click="yellow()"></button>
        <button class="detail" @click="pink()"></button>
        <button class="detail" @click="blue()"></button>
        <button class="detail" @click="green()"></button>
        <button class="detail" @click="gray()"></button>
        <button class="detail" @click="purple()"></button>
      </div>
      </div>

 
</div>
  
</template>

<script>
import Vue from "vue";
export default {
  el: "headerr",
  methods: {
    red() {
      document.body.querySelector(".intt").style.background = "rgb(151, 51, 26)";
      document.body.querySelector(".intt").style.borderColor = "rgb(151, 51, 26)";
      document.body.querySelector(".intt").style.color = "white";
    },
    yellow() {
      document.body.querySelector(".intt").style.background = "rgba(234,342,20,0.9)";
      document.body.querySelector(".intt").style.borderColor = "rgba(234,342,20,0.9)";
      document.body.querySelector(".intt").style.color = "black";
    },
     green() {
      document.body.querySelector(".intt").style.background = "rgb(102, 192, 143)";
      document.body.querySelector(".intt").style.borderColor = "rgb(102, 192, 143)";
      document.body.querySelector(".intt").style.color = "black";
    },
     blue() {
      document.body.querySelector(".intt").style.background = "rgb(86, 165, 230)";
        document.body.querySelector(".intt").style.borderColor = "rgb(86, 165, 230)";
       
      document.body.querySelector(".intt").style.color = "black";
    },
     pink() {
      document.body.querySelector(".intt").style.background = "rgb(250, 148, 236)";
        document.body.querySelector(".intt").style.borderColor = "rgb(250, 148, 236)";
      document.body.querySelector(".intt").style.color = "black";
    },
     gray() {
      document.body.querySelector(".intt").style.background = "rgb(116, 122, 122)";
        document.body.querySelector(".intt").style.borderColor = "rgb(116, 122, 122)";
      document.body.querySelector(".intt").style.color = "black";
    },

 purple() {
      document.body.querySelector(".intt").style.background = "rgb(100, 31, 71)";
        document.body.querySelector(".intt").style.borderColor = "rgb(100, 31, 71)";
      document.body.querySelector(".intt").style.color = "black";
    },
  }
};
</script>


<style>
.detail {
  background:rgb(74, 150, 175);
  border:3px solid rgb(180, 177, 177);
  border-radius: 100%;
  width: 25px;
  height: 25px;
  line-height: 100px;
  margin: 0 35px 45px 35px;
  
}

.intt {
  top: 0;
  background-color: lightblue;
  border:2px solid lightblue;
  border-radius: 3px;
  min-height: 90vh;
  padding-top: 40vh;
  width: 255%;
  

   
}
.head{
  margin: 30px;
  width: 500px;
  height: 300px;
}

p{
  font-size: 22px;
}
</style>



