<h1 align="center">AIM-Game</h1>
<h2 align="center">
<img src="./readme_img/header.png">
</h2>

<h3 align="center">
    <a href="https://aimgame8.netlify.app/" target="_blank">Life Demo</a>
</h3>


### Description
___
The game is essentially a test of reflexes and speed. The essence of the game is to hit the circle that appears in different corners of the board.

The game is created with native JS, without any frameworks and libraries. 
<p><img src="https://img.shields.io/github/languages/top/liyakot/AIM-Game.svg"></p>
<!--I've learned myself web development without any courses or training, so if you have any comments, I will be happy to chat with you on social networks (see  my <a href="https://github.com/liyakot">profile</a> :fire:)-->

### How it works
___
There are three screens in the game:
1. Start game
2. Choose a time
3. Game board

Changing screens is done by adding or remove the *up* class to the *screen*:
`.screen.up {
    margin-top: -100vh;
}`

**The game board looks like this:**

<img width="400px" src="/readme_img/game-board.png">
</br>
</br>

**How to make a circle appear of random size in random places on the board:**

<img width="400px" src="/readme_img/function.png">

</br>
</br>

At the end of the game, **the result** is displayed - **the number of hits on circle**, and you can start the game again

<img width="300" src="/readme_img/fihish-game.png">