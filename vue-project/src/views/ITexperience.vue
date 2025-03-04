<template>
      <div class="body">
    <div class="nav">
        <a href="index.html">About me</a>
        <a href="index_edu.html">Education</a>
        <a class="current" href="index_ITex.html" style="color: black;">IT Experience</a>
        <a href="index_hob.html">Hobbies & Interest</a>
        <a href="index_goal.html">Goals In Life</a>
        <a href="index_gall.html">Picture Gallery</a>
        
    </div>

            <div class="slider">
                <input type="radio" name="toggle" id="btn-1" checked>
                <input type="radio" name="toggle" id="btn-2">
                <input type="radio" name="toggle" id="btn-3">
                <div class="slider-controls">
                  <label for="btn-1"></label>
                  <label for="btn-2"></label>
                  <label for="btn-3"></label>
              </div>

              
                <ul class="slides">
                  <li class="slide">
                    <p class="slide-image">
                      <img src="../images/iteach.JPG" alt="stuff" width="1500" height="473">
                    </p>
                    <div class="slide-content">
                      <h2 class="slide-title">Iteach</h2>
                      <p class="slide-text">This is one of my major IT work experience since this include backend and frontend programming. What I contributed to this project is that I was the one who design the database using mysql. I also desing the main UI of the website.</p>
                    </div>
                    
                  </li>
                  <li class="slide">
                    <p class="slide-image">
                      <img src="../images/apcdun.jpg" alt="stuff" width="1500" height="473">
                    </p>
                    <div class="slide-content">
                      <h2 class="slide-title">APC Dungeon</h2>
                      <p class="slide-text">This is a gamified education quiz where student can have a rpg like experience quiz. This our final project for our senior high bootcamp. I construct the site using language such as python and java. This site also includes database since it saves score and account details of a user.</p>
                    </div>
                  </li>
                  <li class="slide">
                    <p class="slide-image">
                      <img src="../images/trackit.jpg" alt="stuff" width="800" height="473">
                    </p>
                    <div class="slide-content">
                      <h2 class="slide-title">TrackIT</h2>
                      <p class="slide-text">This is a mobile app that track your budget. I was incharge in making the UI and functionality of the app</p>

                    </div>

                  </li>
                </ul>
              </div>
              

    <footer>
        <div class="image-container">
            <img src="../images/rm.gif">
        </div>
    </footer>
  </div>
</template>
<script></script>
<style></style>