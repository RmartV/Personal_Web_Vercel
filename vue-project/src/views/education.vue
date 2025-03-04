<template>
        <div class="body">
    <div class="nav">
        <a href="index.html">About me</a>
        <a class="current" href="index_edu.html" style="color: black;">Education</a>
        <a href="index_ITex.html">IT Experience</a>
        <a href="index_hob.html">Hobbies & Interest</a>
        <a href="index_goal.html">Goals In Life</a>
        <a href="index_gall.html">Picture Gallery</a>
    </div>

    <div class="grid-container">
        <div class="item3">
            <div class="flex-container">
                <div>
                    <h1>Education backgound</h1>
                    <ui>
                        <li>Elementary Education: Academia De San Isidro</li>
                        <li>Highschool Education: Sto. Nino Catholic School</li>
                        <li>Senior High School Education: Asia Pacific College</li>
                        <li>College Education: Asia Pacific College</li>
                        </ui>
 
                </div>
            </div>
        </div>
    </div>
    <footer>
      <div class="image-container">
      <img src="../images/rm.gif">
    </div></footer>
</div>
</template>
<script></script>
<style>.body {
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
  
  .flex-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #102C46;
    box-shadow: 5px 10px #001424;
    width: 1000px;
    height: 473px;
    max-width: 90%; 
  }
  
  .flex-container ul, li{
    color: white;
    margin: 20px;
  }

  .flex-container h1{
    color: white;
    margin: 20px;
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
  
  .item3 {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    
  }
  
  .item3 p {
    padding: 20px;
    color: aliceblue;
    font-size: 23px;
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
  
    .flex-container {
        flex-direction: column; 
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