<template>
    <div class="body">
    <div class="nav">
        <a href="index.html">About me</a>
        <a href="index_edu.html">Education</a>
        <a href="index_ITex.html">IT Experience</a>
        <a href="index_hob.html">Hobbies & Interest</a>
        <a href="index_goal.html">Goals In Life</a>
        <a class="current" href="index_gall.html" style="color: black;">Picture Gallery</a>
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
              <img src="../images/iteach.jpg" alt="stuff" width="1500" height="473">
            </p>
          </li>
          <li class="slide">
            <p class="slide-image">
              <img src="../images/apcdun.jpg" alt="stuff" width="1500" height="473">
            </p>
          </li>
          <li class="slide">
            <p class="slide-image">
              <img src="../images/trackit.jpg" alt="stuff" width="800" height="473">
            </p>
          </li>
        </ul>
      </div>
    </div>
</template>
<script></script>
<style></style>