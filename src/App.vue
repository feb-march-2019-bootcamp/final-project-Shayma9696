<template>
  <div id="app">
    <main>
     <div class="horizantal-container">
      <b-navbar toggleable="lg" type="dark" variant="info" class="nav">
        <b-navbar-nav>
          <router-link to="/" class="nav-link">
            <i class="fa fa-home" aria-hidden="true"></i>
            Home
          </router-link>

          <router-link to="/About" class="nav-link">
            <i class="fa fa-font" aria-hidden="true"></i>
            About
          </router-link>
          <router-link to="/education" class="nav-link">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            Education
          </router-link>
          <router-link to="/project" class="nav-link">
            <i class="fa fa-folder-open" aria-hidden="true"></i>
            My Projects
          </router-link>
          <router-link to="/contact" class="nav-link">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            Contact
          </router-link>
        </b-navbar-nav>
      </b-navbar>
     
    </div>
     <router-view></router-view>
    </main>
   </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from "./components/HelloWorld.vue"
import myheader from "./components/myheader.vue"
import about from "./components/About.vue"
import education from "./components/education.vue"
import project from "./components/project.vue"
import contact from "./components/contact.vue"


export default {
  
  name: "app",
  components: {
    HelloWorld,
    myheader,
    about,
    education ,
    contact,
    project
  },
  methods: {
changeComponent(component) {
this.currentComp === component
}
}
};
</script>



<style>

#app {
 font-family:Cookie,cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.nav-item {
float:right;
list-style-type: none ;
 
}
.footer-social{
 list-style-type: none;
  margin-right: 10px;
  font-size: 24px;
    font-size: 1.33333rem;
    display: inline-block;
}
.btn{
  padding: 5px;
  margin: 10px;
  float: left;
  
  
}
a{
  text-decoration:none;
  Color:Black;
  font-size: 20px;
}
.horizantal-container {
  display: flex;
  flex-direction: column;
}
.nav-link {
  float: left;
  vertical-align: 2px;
}
</style>
