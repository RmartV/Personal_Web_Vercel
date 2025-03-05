<template>
    <div class="body">
    <div class="nav">
      <RouterLink to="/">About me</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
        <RouterLink to="/IT-Experience">IT Experience</RouterLink>
        <RouterLink to="/hobby">Hobbies & Interest</RouterLink>
        <RouterLink to="/goal">Goals In Life</RouterLink>
        <RouterLink to="/gallery" class="current" style="color: black;">Picture Gallery</RouterLink>
        <RouterLink to="/comments">Comments</RouterLink>
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
<style>
template {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}


.slider {
  position: relative;
  width: 1000px;
  height: 473px;;
  margin: 100px auto;
  background-color: #102C46;
  box-shadow: 5px 10px #001424;
  overflow: hidden;
}

.slider-controls {
  position: absolute;
  bottom: 15px;
  left: 50%;
  width: 1000px;
  text-align: center;
  transform: translatex(-50%);
  z-index: 1000;

  list-style: none;
  text-align: center;
}

.slider input[type="radio"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-controls label {
  display: inline-block;
  border: none;
  height: 20px;
  width: 40px;
  border-radius: 5px; 
  cursor: pointer;
  background-color: #535353;
  transition: background-color 0.2s linear, transform 0.3s ease; 
}

.slider-controls label:hover {
  transform: scale(1.2); 
  background-color: #414141; 
}


#btn-1:checked ~ .slider-controls label[for="btn-1"],
#btn-2:checked ~ .slider-controls label[for="btn-2"],
#btn-3:checked ~ .slider-controls label[for="btn-3"] {
  background-color: #254892;
}


.slides {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #102C46;
  box-shadow: 5px 10px #001424;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 100%;
  height: 100%;

  opacity: 0;
  transform: translatex(-100%);
  transition: transform 250ms linear;
}

.slide-title {
  margin: 20px;
  font-size: 36px;
  color: white;
}

.slide-text {
  margin: 0 20px;
  vertical-align: middle;
  color: white;
}

.slide-link {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  border-radius: 3px;
  text-decoration: none;
  background-color: #ff4081;
}

.slide-image img {
  max-width: 100%;
  margin: 0 0;
  padding: 0 0;
  box-shadow: 9px 0px 8px 0px rgba(0, 0, 0, 0.43); 
}

/* Slide animations */
#btn-1:checked ~ .slides .slide:nth-child(1) {
  transform: translatex(0);
  opacity: 1;
}

#btn-2:checked ~ .slides .slide:nth-child(2) {
  transform: translatex(0);
  opacity: 1;
}

#btn-3:checked ~ .slides .slide:nth-child(3) {
  transform: translatex(0);
  opacity: 1;
}

#btn-1:not(:checked) ~ .slides .slide:nth-child(1) {
  animation-name: swap-out;
  animation-duration: 300ms;
  animation-timing-function: linear;
}

#btn-2:not(:checked) ~ .slides .slide:nth-child(2) {
  animation-name: swap-out;
  animation-duration: 300ms;
  animation-timing-function: linear;
}

#btn-3:not(:checked) ~ .slides .slide:nth-child(3) {
  animation-name: swap-out;
  animation-duration: 300ms;
  animation-timing-function: linear;
}

@keyframes swap-out {
  0% {
    transform: translatex(0);
    opacity: 1;
  }

  50% {
    transform: translatex(50%);
    opacity: 0;
  }

  100% {
    transform: translatex(100%);
  }
}
.body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(#00539F, #001E39);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column; 
}


.nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap; 
  background-image: linear-gradient(0.25turn, #001E39, #001F3D, #325D86);
  width: 1600px; 
  height: 55px;
  margin: 45px auto; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav a {
  color: #f2f2f2;
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;
  transition: background-color 0.3s, color 0.3s;
}


.nav a:hover {
  background-color: #ddd;
  color: black;
}

.nav a.active {
  background-color: #04AA6D;
  color: white;
}
.current{
  background-color: #87a9c7;
}


.image-container {
  width: 200px;
  height: 200px; 
  overflow: hidden; 
  position: relative;
}

.image-container img {
  width: 100%; 
  height: auto; 
  position: absolute;
  align-items: end;
  top: 55px;
  left: 60px;
}

footer{
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
}


@media (max-width: 1600px) {
  .nav {
      width: 90%; 
  }
}

@media (max-width: 768px) {
  .nav a {
      font-size: 14px; 
      padding: 10px 12px; 
  }
}

@media (max-width: 576px) {
  .nav {
      width: 100%; 
      margin: 20px auto;
  }

  .nav a {
      font-size: 12px;
      padding: 8px 10px;
  }

  .item3 p {
      font-size: 14px;
  }
}
</style>