<template>
  <div class="education">
    <header class="header form-group">
      <br>
      <br>
      <h1>Shayma Adnan</h1>
    </header>
    <main>
     <div class="row vertical-lined">
        <div class="col-6">
          <h5 class="lt">Personal Information</h5>
          <br><br>

          <table class="form-group">
            <tr>
              <th>Full Name</th>
              <td>Shayma Adnan Abdurrahman</td>
            </tr>
            <br>
            <tr>
              <th>Date Of Birth</th>
              <td>11/3/1996</td>
            </tr>
            <br>
            <tr>
              <th>Place of Birth</th>
              <td>Erbil</td>
            </tr>
            <br>
          </table>
          <h5 class="lt">Contact Information</h5>
          <br><br>
          <table class="form-group">
            <tr>
              <th>Address</th>
              <td>Daratw/Erbil</td>
            </tr>
            <br>
            <tr>
              <th>Phone</th>
              <td>0750 3967002</td>
            </tr>
            <br>
            <tr>
              <th>E-Mail</th>
              <td>shayma.adnan44@gmail.com</td>
            </tr>
          </table>
          <h5 class="lt">Education</h5>
          <br><br>
          <table class="form-group">
            <tr>
              <th>2014-2018</th>
              <td>Salahaddin University Collage of
                <br>Science Computer Departments ( IT )
              </td>
            </tr>
            <br>
          </table>
          <h5 class="lt">Seminars and Courses</h5>
          <br><br>
          <table class="form-group">
            <tr>
              <th>2017</th>
              <td>Write Cv and find good job</td>
            </tr>
            <br>
            <tr>
              <th>2017</th>
              <td>Delta Korek - company</td>
            </tr>
            <br>
            <tr>
              <th>2017</th>
              <td>Online Cisco Networking Academy Course</td>
            </tr>
            <br>
          </table>
        </div>
        <div class="col-6">
          <h5 class="lt">Foreign Languages</h5>
          <br><br>
          <table class="form-group">
            <tr>
              <th>Kurdish</th>
              <td>Excellent</td>
            </tr>
            <br>
            <tr>
              <th>English</th>
              <td>Very Good</td>
            </tr>
            <br>
            <tr>
              <th>Turkish</th>
              <td>Very Good</td>
            </tr>
            <br>
            <tr>
              <th>Arabic</th>
              <td>Not bad</td>
            </tr>
          </table>
          <h5 class="lt">Skills</h5>
          <br><br>
          <table class="form-group">
              <tr>
                <tr id="headComputer"> <th>Computer</th></tr>
              <td>
                    1-Microsoft office (Excel, word, power point, access).
                <br>2- Database Management (SQL Server, My SQL, Access).
                <br>3- Multimedia
                <br>A. Adobe Photoshop.
                <br>B. Adobe illustrator.
                <br>C. Adobe audition.
                <br>D. Adobe Flash
                <br>E. blender.
                <br>4- Network Management (Cisco packet tracer).
                <br>5- Computer Language Programming (C++).
                <br>6- Web Programming and Design (HTML, Java Script, CSS ).
                <br>7- Visual C#
                <br>8- Visual Basic
                <br>9- Visual Wpf
                <br>
              </td> 
          </table>

           <h5 class="lt">Summary</h5>
          <br><br>
          <table class="form-group">
              <tr>
                 <th> Additional Information</th><br>
                 <td>Bachelor in computer science of University of Salahaddin. <br>
                 -Get two-month summer training in network department for managing ,
                 <br>adminstraiting and Maintenance server and network<br> 
                 at Delta korek company and success by degree (very good )
</td>

              </tr>
          </table>
        </div>
    </div>
    </main>
  
  </div>
</template>

<script>
export default {};
</script>


<style>
.education{
  margin: 10px;
}

.header {
  background-color: rgb(57, 171, 216);
  height: 150px;
  color: white;
  padding: 10px;
  text-align: left;
  justify-content: space-around;
  width:200vh;
}
.lt {
  text-align: left;
  padding: 5px;
  color: rgb(55, 152, 190);
  margin: 3px;
}
td {
  padding-left: 60px;
}
th {
  padding-left: 10px;
}
.rg {
  text-align: right;
  padding: 5px;
  color: rgb(55, 152, 190);
  margin: 3px;
}
#headComputer{
    float: left;
}
.vertical-lined > div:not(:first-child) {
  border-left-color: rgb(55, 152, 190);
  border-left-width: 5px;
  border-left-style: solid;
}
.row{
  width:200vh;
}
</style>


