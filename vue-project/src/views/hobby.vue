<template>
      <div class="body">
    <div class="nav">
        <RouterLink to="/">About me</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
        <RouterLink to="/IT-Experience">IT Experience</RouterLink>
        <RouterLink to="/hobby">Hobbies & Interest</RouterLink>
        <RouterLink to="/goal">Goals In Life</RouterLink>
        <RouterLink to="/gallery">Picture Gallery</RouterLink>
        
    </div>
    <div class="grid-container">
        <div class="item3">
            <div class="flex-container">
                <div>
                    <h1>Hobbies</h1>
                    <ui>
                        <li>Playing video games</li>
                        <li>Collecting Figurines</li>
                        <li>Reading Manga and Manhwa</li>
                        <li>Watching F1 and movies</li>
                    </ui>
 
                </div>
            </div>

        </div>

    </div>
    <p class="top-games">My top 3 games of 2024</p>

    <div class="container">
        
    
        <div><img src="../images/bmk.jpg"><p class="gameTitle">Black Myth Wukong</p>
          <p class="caption">This game is probably one of the best games I have ever played. The gameplay and combat mechanics are satisfying, and I like how challenging it is, as well as how fulfilling it feels when you beat an enemy. The graphics are also breathtaking.</p></div>
        <div><img src="../images/dd2.jpg"><p class="gameTitle">Dragon's Dogma 2</p>
          <p class="caption">I've been craving this type of RPG since it's a medieval fantasy adventure, and I think there are few options in this genre. I like the mechanics that allow you to try any class, unlike other RPG games that make you stick to one class. I also like how the environment feels alive and not empty at all, even though it has a huge map.</p></div>
        <div><img src="../images/en.jpg"><p class="gameTitle">Enshrouded</p>
          <p class="caption">I've always been a fan of survival games since there's a lot you can do, and you can play with your friends. Enshrouded takes that further, as it's a fantasy-type survival game where you can be a magician, archer, or warrior, depending on the weapon you're holding. Additionally, the building mechanics are what sold me here.</p>
        </div>
      </div>

      <p class="top-games">My top 4 films</p>

    
      <div class="film-container">

        <div><img src="https://a.ltrbxd.com/resized/film-poster/3/8/9/9/9/38999-3-idiots-0-1000-0-1500-crop.jpg?v=890bae83d8"><p class="moveiTitle">3 Idiots</p></div>
        <div><img src="https://a.ltrbxd.com/resized/film-poster/9/5/1/1/3/95113-the-grand-budapest-hotel-0-1000-0-1500-crop.jpg?v=6ac71cf4ba"><p class="moveiTitle">The Grand Budapest Hotel</p></div>
        <div><img src="https://a.ltrbxd.com/resized/film-poster/6/0/0/9/7/4/600974-red-post-on-escher-street-0-1000-0-1500-crop.jpg?v=74936052f1"><p class="moveiTitle">Red Post on Escher Street</p></div>
        <div><img src="https://a.ltrbxd.com/resized/film-poster/7/3/9/4/5/1/739451-flow-2024-0-1000-0-1500-crop.jpg?v=32f49339d9"><p class="moveiTitle">Flow</p></div>
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
    background-image: linear-gradient(#00539F, #001F3D, #001E39);
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;
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
  
  ui{
    font-family: Arial, Helvetica, sans-serif;
    list-style-type: none;
    line-height: 1.0;
    margin: 0;
    padding: 0;
  }

  h1{
    font-weight: bold;
    line-height: 2.0;
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
    background-color: #102C46;
    box-shadow: 5px 10px #001424;
    width: 1000px;
    height: 300px;
    max-width: 90%; 
  }
  
  

  .flex-container ul, li{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin: 20px;
  }

  .flex-container h1{
    font-family: Arial, Helvetica, sans-serif;
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
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    color: aliceblue;
    font-size: 23px;
  }
  .container {
    display: grid;
    width: 1025px;
    grid-template-columns: auto auto auto;
    gap:13px;
    margin: 0 auto; 
  }
  .container > div {
    background-color: #102C46;
    box-shadow: 5px 10px #001424;
    font-size: 30px;
    padding-bottom: 20px;
   
  }
  .container img {
    width: 327px;
    height: auto;
    box-shadow: 0px 6px 15px 0px rgba(0,0,0,0.75);
  }

  .film-container {
    display: grid;
    width: 1000px;
    grid-template-columns: auto auto auto auto;
    gap:13px;
    margin: 0 auto; 
    padding-bottom: 90px;
  }
  .film-container > div {
    background-color: #102C46;
    box-shadow: 5px 10px #001424;
    font-size: 30px;
   
  }
  .film-container img {
    width: 240px;
    height: auto;
    box-shadow: 0px 6px 15px 0px rgba(0,0,0,0.75);
  }

  footer{
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
  }
  
  .top-games {
    width: 1000px;
    margin: 20px auto;
    margin-top: 90px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

  
.gameTitle{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
  color: white;
  margin-top: 20px;
}

.moveiTitle{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  font-size: 16px;
}

.caption{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: white;
  margin: 0 20px;

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
  @media (max-width: 1100px) {
    .container, .top-games {
        width: 90%;
    }
  }</style>