<template>
  <div class="contact">
    <div id="welcome-section" class="int">
      <h1>Welcome to Personal Blogs</h1>
      <p id="intoP">a web developer</p>
    </div>
    <div class="container">
      <form name="contact" class="formContact" @submit.prevent="submit()" action="/" method="POST" data-netlify="true">
        <div class="form-group">
          <label for="name">User Name</label>
          <input type="text" name="name" class="form-control" placeholder="Enter User Name">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" name="age" placeholder="Enter Your age">
        </div>
        <div class="form-group">
          <label for="career">Choose your Career</label>
          
          <select class="form-control" name="career">
            <option>Student</option>
            <option>Teacher</option>
            <option>Employee</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" name="message" rows="10"></textarea>
        </div>
        <fieldset>
          <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </div>
    <div id="welcome-section" class="int">
      <h4>Socail Media we use .....</h4><br><br><br>
      <a href="https://facebook.com" target="_blank" class="det">Facebook</a>
      <a href="https://github.com" target="_blank" class="det">GitHub</a>
      <a href="https://twitter.com" target="_blank" class="det">Twitter</a>
      <a href="mailto:shayma.adnan44@gmail.com" target="_blank" class="det">Send a mail</a>
      <a href="https://instagram.com" target="_blank" class="det">instagram</a>
    </div>
  </div>
</template>




<script>
import Axios from "axios";

export default {
  data: () => ({
    name: "",
    email: "",
    age: "",
    career: "",
    message: ""
  }),

  methods: {
    encode(data) {
      return Object.keys(data)

        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )

        .join("&");
    },

    submit() {
      Axios.post(
        "/",

        {
          "form-name": "contact",

          name: this.name,

          message: this.message
        }
      )

        .then(() => {
          alert("success");
        })

        .catch(e => {
          console.log(e);

          alert("fail");
        });
    }
  }
};
</script>

<style>
.int {
  top: 0;
  background-color: lightblue;
  min-height: 90vh;
  padding-top: 40vh;
  width: 255%;
}
.contact {
  margin: 30px;
  width: 500px;
  height: 300vh;
}
.formContact{
  width:1000px;
  padding-left: 100px;
}
.container {
  text-align: center;
  padding-right: 100px;
}
.det{
  background:rgb(74, 150, 175);
  color: #154646;
  border:3px solid rgb(180, 177, 177);
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  line-height: 100px;
  margin: 0 35px 45px 35px;
  text-decoration: none;
  text-align: center;
}
</style>
