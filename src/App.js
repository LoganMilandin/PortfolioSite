import { useRef, useEffect } from 'react';
import './App.css';
import './spikePongStyles.css';


function App() {
  const canvas = useRef(null);
  const context = useRef(null);
  
  const gravToggle = useRef(null);
  const gravityIsOn = useRef(null);
  const ball = useRef(null);

  useEffect(() => {

  }, []);

  function toggleGravity() {
    gravityIsOn.current = !gravityIsOn.current;
    if (gravityIsOn.current) {
      gravToggle.current.value = "click to turn gravity off";
      console.log(gravToggle.current.value);
    }
    else {
      gravToggle.current.value = "click to turn gravity on";
    }
    
  }

  function startGameWithGravity() {
    gravityIsOn.current = true;
    document.getElementById("tutorialScreen").style.display = "none";
    document.getElementById("gameEnvironment").style.display = "inline";
    setupGame();
  }

  function startGameWithoutGravity() {
    gravityIsOn.current = false;
    document.getElementById('tutorialScreen').style.display = "none";
    document.getElementById("gameEnvironment").style.display = "inline";
    gravToggle.current.style.display = "none";
    setupGame();
  }

  function setupGame() {
    context.current = canvas.current.getContext('2d');
    ball.current = new Ball(canvas.current.width / 2, canvas.current.height / 2, 0, 0, 10);
    ball.current.updatePosition();
  }

  var Ball = function(xPos, yPos, Dx, Dy, ballRadius) {
    this.x = xPos;
    this.y = yPos;
    this.dx = Dx;
    this.dy = Dy;
    this.radius = ballRadius;
    this.speedBeforeSpike = null;
    this.isSpikingFromLeft = false;
    this.isSpikingFromRight = false;

    this.draw = function() {
      context.current.beginPath();
      context.current.arc(this.x, this.y, this.radius, 0, 2 *Math.PI, true);
      context.current.fillStyle = 'white';
      if (this.isSpikingFromLeft || this.isSpikingFromRight) {
        context.current.fillStyle = 'orange';
      }
      context.current.fill();
    }
    this.updatePosition = function() {
      context.current.fillStyle = 'black';
      context.current.fillRect(0, 0, canvas.current.width, canvas.current.height);
      this.x += this.dx;
      
      //god tier line of code right here
      this.y += this.dy;
      if (gravityIsOn) {
        this.dy += .5;
      }
      
      
      
      this.draw();
    }
    
    this.spike = function() {
      this.speedBeforeSpike = this.dx;
      this.dx *= 2;
    }
    
  }

  return (
    <div>
      <div id = "tutorialScreen">
        <p class = "tutorialText"> Welcome to Spike Pong</p>
        <p class = "tutorialText" style = {{fontSize: "30px", margin: "0px 0px 0px 295px"}}>How to Play </p>
        <p class = "tutorialText" style = {{fontSize: "25px", margin: "20px 0px 30px 20px"}}>Player 1: Move the paddle with <span class = "key" style = {{margin: "0px 5px 0px 0px"}}>W</span>
        (up) and <span class = "key" style = {{padding: "5px 13px 5px 13px", margin: "0px 5px 0px 0px"}}>S</span>(down) keys. Press <span class = "key" style = {{padding: "5px 12px 5px 12px"}}>D</span> to spike the ball. </p>
        <p class = "tutorialText" style = {{fontSize: "25px", margin: "20px 0px 0px 20px"}}>Player 2: Move the paddle with <span class = "key" style = {{padding: "2px 13px 10px 13px"}}>{'\u2191'}</span> and
        <span class = "key" style = {{padding: "2px 13px 10px 13px", margin: "0px 0px 0px 5px"}}>{'\u2193'}</span> arrow keys. 
        Press <span class = "key" style = {{padding: "3px 8px 8px 8px"}}>{'\u2190'}</span> to spike the ball.</p>
        <p class = "tutorialText" style = {{fontSize: "25px", margin: "20px 0px 0px 20px"}}>Rules: Players can only spike once every 5 seconds. Spikes can't be returned by another spike. The first player to reach 11 points wins the game. </p>
        <form>
          <input class = "clickToPlay" type = "button" value = "PLAY WITHOUT GRAVITY" onClick = {startGameWithoutGravity}/>
          <input class = "clickToPlay" type = "button" value = "PLAY WITH GRAVITY" style = {{margin: "40px 0px 0px 450px"}} onClick = {startGameWithGravity}/>
        </form>
      </div>

      <div id = "gameEnvironment"> 
        <h1 id = "player1">PLAYER ONE</h1>
        <h1 id = "player2">PLAYER TWO</h1>
        <form>
          <input id = "gravityToggle" ref = {gravToggle} type = "button" value = "click to turn gravity off" onClick = {toggleGravity} />
        </form>
        <canvas id = "canvas" ref ={canvas} width = "1000" height = "600" style = {{margin: "28.5px 0px 0px 183px"}}></canvas>
	    </div>
    </div>
  );
}

export default App;
