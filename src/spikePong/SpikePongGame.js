import { Stack } from "@mui/material";
import { useRef, useEffect } from "react";
import "./spikePongStyles.css";

const SpikePongGame = () => {
  const canvas = useRef(null);
  const context = useRef(null);
  const gravToggle = useRef(null);

  const gravityIsOn = useRef(null);
  const ball = useRef(null);
  const rightPaddle = useRef(null);
  const leftPaddle = useRef(null);
  const frameCount = useRef(null);
  const frameWhenRightSpikeActivated = useRef(null);
  const frameWhenLeftSpikeActivated = useRef(null);
  const playerOneScore = useRef(null);
  const playerTwoScore = useRef(null);

  function toggleGravity() {
    gravToggle.current.blur();
    gravityIsOn.current = !gravityIsOn.current;
    if (gravityIsOn.current) {
      gravToggle.current.value = "click to turn gravity off";
      console.log(gravToggle.current.value);
    } else {
      gravToggle.current.value = "click to turn gravity on";
    }
  }

  function startGameWithGravity() {
    gravityIsOn.current = true;
    document.getElementById("tutorialScreen").style.display = "none";
    document.getElementById("gameEnvironment").style.display = "inline";
    animate();
  }

  function startGameWithoutGravity() {
    gravityIsOn.current = false;
    document.getElementById("tutorialScreen").style.display = "none";
    document.getElementById("gameEnvironment").style.display = "inline";
    gravToggle.current.style.display = "none";
    animate();
  }

  var Ball = function (xPos, yPos, Dx, Dy, ballRadius) {
    this.x = xPos;
    this.y = yPos;
    this.dx = Dx;
    this.dy = Dy;
    this.radius = ballRadius;
    this.speedBeforeSpike = null;
    this.isSpikingFromLeft = false;
    this.isSpikingFromRight = false;

    this.draw = function () {
      context.current.beginPath();
      context.current.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
      context.current.fillStyle = "white";
      if (this.isSpikingFromLeft || this.isSpikingFromRight) {
        context.current.fillStyle = "orange";
      }
      context.current.fill();
    };

    this.updatePosition = function () {
      context.current.fillStyle = "black";
      context.current.fillRect(
        0,
        0,
        canvas.current.width,
        canvas.current.height
      );
      this.x += this.dx;

      this.y += this.dy;
      if (gravityIsOn.current) {
        this.dy += 0.5;
      }

      this.draw();
    };

    this.spike = function () {
      this.speedBeforeSpike = this.dx;
      this.dx *= 2;
    };
  };

  var Paddle = function (xPos, yPos, paddleWidth, paddleHeight) {
    this.x = xPos;
    this.y = yPos;
    this.dy = 0;
    this.dx = 0;

    this.width = paddleWidth;
    this.height = paddleHeight;
    this.draw = function () {
      context.current.beginPath();
      context.current.fillStyle = "red";
      context.current.fillRect(this.x, this.y, this.width, this.height);
    };

    this.updatePosition = function () {
      if (this.y <= 0) {
        this.dy = 0;
        this.y += 1;
      }
      if (this.y + this.height >= canvas.current.height) {
        this.dy = 0;
        this.y -= 1;
      }
      this.y += this.dy;
      this.x += this.dx;
      this.draw();
    };
  };

  useEffect(() => {
    context.current = canvas.current.getContext("2d");

    ball.current = new Ball(
      canvas.current.width / 2,
      canvas.current.height / 2,
      0,
      0,
      10
    );
    rightPaddle.current = new Paddle(
      canvas.current.width - 10,
      canvas.current.height / 2 - 40,
      10,
      80
    );
    leftPaddle.current = new Paddle(0, canvas.current.height / 2 - 40, 10, 80);
    frameCount.current = 0;
    frameWhenRightSpikeActivated.current = -200;
    frameWhenLeftSpikeActivated.current = -200;
    playerOneScore.current = 0;
    playerTwoScore.current = 0;

    document.addEventListener("keydown", function (e) {
      console.log(e.which);
      switch (e.which) {
        //include the method for starting the game with the space bar here
        case 32:
          if (ball.current.dx == 0) {
            if (gravityIsOn.current) {
              var x = Math.random();
              if (x >= 0.5) {
                ball.current.dx = 5;
              } else {
                ball.current.dx = -5;
              }
            } else {
              var x = Math.random();
              var y = Math.random();
              if (x >= 0.5) {
                ball.current.dx = 5;
                if (y >= 0.5) {
                  ball.current.dy = 5;
                } else {
                  ball.current.dy = -5;
                }
              } else {
                ball.current.dx = -5;
                if (y >= 0.5) {
                  ball.current.dy = 5;
                } else {
                  ball.current.dy = -5;
                }
              }
            }
            break;
          } else {
            break;
          }

        case 38: //Up key
          rightPaddle.current.dy = -10;
          break;
        case 40: //Down key
          rightPaddle.current.dy = 10;
          break;
        case 37:
          //SPIKE THE BALL
          if (
            frameCount.current >= frameWhenRightSpikeActivated.current + 200 &&
            !ball.current.isSpikingFromLeft
          ) {
            frameWhenRightSpikeActivated.current = frameCount.current;
          }
          break;
        case 87: //W key
          leftPaddle.current.dy = -10;
          break;
        case 83: //S key
          leftPaddle.current.dy = 10;
          break;
        case 68:
          if (
            frameCount.current >= frameWhenLeftSpikeActivated.current + 200 &&
            ball.current.isSpikingFromRight == false
          ) {
            frameWhenLeftSpikeActivated.current = frameCount.current;
          }
        default:
          break;
      }
    });
    document.addEventListener("keyup", function (e) {
      switch (e.which) {
        case 38: //Up key
          rightPaddle.current.dy = 0;
          break;
        case 40: //Down key
          rightPaddle.current.dy = 0;
          break;
        case 87: //W key
          leftPaddle.current.dy = 0;
          break;
        case 83: //S key
          leftPaddle.current.dy = 0;
          break;
        default:
          break;
      }
    });
  }, []);

  function animate() {
    frameCount.current++;
    if (playerOneScore.current == 11) {
      context.current.fillText(playerOneScore.current, 30, 60);
      var x = window.confirm("Player one wins! Press ok to play again");
      if (x == true) {
        resetGame();
      }
    }
    if (playerTwoScore.current == 11) {
      context.current.fillText(
        playerTwoScore.current,
        canvas.current.width - 77,
        60
      );
      var x = window.confirm("player two wins! Press ok to play again");
      if (x == true) {
        resetGame();
      }
    }
    requestAnimationFrame(animate);

    //if we hit the right paddle
    if (hitRightPaddle() && !rightPaddleIsSpiking()) {
      //if we're returning a spike from the left
      if (ball.current.isSpikingFromLeft) {
        ball.current.dx = -ball.current.speedBeforeSpike;
        ball.current.isSpikingFromLeft = false;
      }

      ball.current.x -= 5;
      ball.current.dx *= -1;
      ball.current.dx--;
    }
    //if we are currently spiking the paddle
    if (rightPaddleIsSpiking()) {
      if (hitRightPaddle()) {
        ball.current.spike();
        ball.current.x -= 5;
        ball.current.dx *= -1;
        ball.current.dx--;
        ball.current.isSpikingFromRight = true;
      }
      rightPaddle.current.dx = -5;
    } else if (
      frameCount.current <=
      frameWhenRightSpikeActivated.current + 20
    ) {
      rightPaddle.current.dx = 5;
    } else {
      rightPaddle.current.dx = 0;
    }

    //if we hit the left paddle
    if (hitLeftPaddle() && !leftPaddleIsSpiking()) {
      //if we're returning a psike from the right
      if (ball.current.isSpikingFromRight) {
        ball.current.dx = -ball.current.speedBeforeSpike;
        ball.current.isSpikingFromRight = false;
      }

      ball.current.x += 5;
      ball.current.dx *= -1;
      ball.current.dx++;
    }

    //if we are currently spiking the paddle
    if (leftPaddleIsSpiking()) {
      if (hitLeftPaddle()) {
        //ADD AN ADDITIONAL TEST HERE FOR THE POWER SPIKE
        ball.current.spike();
        ball.current.x += 5;
        ball.current.dx *= -1;
        ball.current.dx++;
        ball.current.isSpikingFromLeft = true;
      }
      leftPaddle.current.dx = 5;
    } else if (frameCount.current <= frameWhenLeftSpikeActivated.current + 20) {
      leftPaddle.current.dx = -5;
    } else {
      leftPaddle.current.dx = 0;
    }

    //test if the ball is past the edge of the screen
    if (isPastEdgeOfScreen()) {
      if (ball.current.x + ball.current.radius >= canvas.current.width) {
        playerOneScore.current++;
      } else {
        playerTwoScore.current++;
      }
      ball.current.x = canvas.current.width / 2;
      ball.current.y = canvas.current.height / 2;
      ball.current.dx = 0;
      ball.current.dy = 0;
      ball.current.isSpikingFromLeft = false;
      ball.current.isSpikingFromRight = false;
    }

    ball.current.updatePosition();
    rightPaddle.current.updatePosition();
    leftPaddle.current.updatePosition();

    context.current.fillStyle = "white";
    context.current.font = "50px Impact";
    context.current.fillText(playerOneScore.current, 30, 60);

    if (playerTwoScore.current < 10) {
      context.current.fillText(
        playerTwoScore.current,
        canvas.current.width - 55,
        60
      );
    } else {
      context.current.fillText(
        playerTwoScore.current,
        canvas.current.width - 77,
        60
      );
    }

    if (
      ball.current.y + ball.current.radius >= canvas.current.height ||
      ball.current.y - ball.current.radius <= 0
    ) {
      //magic line of code to make the ball get to the same height every time(ONLY USED IN GRAVITY PONG)
      if (gravityIsOn.current) {
        ball.current.dy -= 0.5;
      }

      ball.current.dy *= -1;
    }
  }

  function resetGame() {
    ball.current.x = canvas.current.width / 2;
    ball.current.y = canvas.current.height / 2;
    ball.current.dx = 0;
    ball.current.dy = 0;
    ball.current.isSpikingFromLeft = false;
    ball.current.isSpikingFromRight = false;
    playerOneScore.current = 0;
    playerTwoScore.current = 0;
  }

  function hitLeftPaddle() {
    //if the y position of the ball is correct
    if (
      ball.current.y <= leftPaddle.current.y + leftPaddle.current.height &&
      ball.current.y >= leftPaddle.current.y
    ) {
      //if the ball position is past the edge of the paddle AND it wasnt past the edge of the paddle in the previous frame
      if (
        ball.current.x - ball.current.radius <=
          leftPaddle.current.x + leftPaddle.current.width &&
        ball.current.x - ball.current.radius + Math.abs(ball.current.dx) >=
          leftPaddle.current.x +
            leftPaddle.current.width -
            Math.abs(leftPaddle.current.dx)
      ) {
        return true;
      }
    }

    return false;
  }

  function hitRightPaddle() {
    if (
      ball.current.y <= rightPaddle.current.y + rightPaddle.current.height &&
      ball.current.y >= rightPaddle.current.y
    ) {
      if (
        ball.current.x + ball.current.radius >= rightPaddle.current.x &&
        ball.current.x + ball.current.radius - Math.abs(ball.current.dx) <=
          rightPaddle.current.x +
            rightPaddle.current.width +
            Math.abs(rightPaddle.current.dx)
      ) {
        return true;
      }
    }

    return false;
  }

  function isPastEdgeOfScreen() {
    if (
      ball.current.x + ball.current.radius >=
        canvas.current.width + 3 * Math.abs(ball.current.dx) ||
      ball.current.x - ball.current.radius <= -3 * Math.abs(ball.current.dx)
    ) {
      return true;
    }
    return false;
  }

  function leftPaddleIsSpiking() {
    if (frameCount.current <= frameWhenLeftSpikeActivated.current + 10) {
      return true;
    }
    return false;
  }

  function rightPaddleIsSpiking() {
    if (frameCount.current <= frameWhenRightSpikeActivated.current + 10) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div id="tutorialScreen">
        <p className="tutorialText"> Welcome to Spike Pong</p>
        <p className="tutorialText" style={{ fontSize: "30px" }}>
          How to Play{" "}
        </p>
        <p className="tutorialText" style={{ fontSize: "25px" }}>
          Player 1: Move the paddle with{" "}
          <span className="key" style={{ margin: "0px 5px 0px 0px" }}>
            W
          </span>
          (up) and{" "}
          <span
            className="key"
            style={{ padding: "5px 13px 5px 13px", margin: "0px 5px 0px 0px" }}
          >
            S
          </span>
          (down) keys. Press{" "}
          <span className="key" style={{ padding: "5px 12px 5px 12px" }}>
            D
          </span>{" "}
          to spike the ball.{" "}
        </p>
        <p className="tutorialText" style={{ fontSize: "25px" }}>
          Player 2: Move the paddle with{" "}
          <span className="key" style={{ padding: "2px 13px 10px 13px" }}>
            {"\u2191"}
          </span>{" "}
          and
          <span
            className="key"
            style={{ padding: "2px 13px 10px 13px", margin: "0px 0px 0px 5px" }}
          >
            {"\u2193"}
          </span>{" "}
          arrow keys. Press{" "}
          <span className="key" style={{ padding: "3px 8px 8px 8px" }}>
            {"\u2190"}
          </span>{" "}
          to spike the ball.
        </p>
        <p className="tutorialText" style={{ fontSize: "25px" }}>
          Rules: Players can only spike once every 5 seconds. Spikes can't be
          returned by another spike. The first player to reach 11 points wins
          the game.{" "}
        </p>
        <Stack
          direction="row"
          justifyContent="center"
          style={{ margin: "0 auto" }}
        >
          <button
            className="clickToPlay"
            style={{ position: "relative" }}
            onClick={startGameWithoutGravity}
          >
            PLAY WITHOUT GRAVITY
          </button>
          <button
            className="clickToPlay"
            style={{ position: "relative" }}
            onClick={startGameWithGravity}
          >
            PLAY WITH GRAVITY
          </button>
        </Stack>
      </div>

      <div id="gameEnvironment">
        <h1 id="player1">PLAYER ONE</h1>
        <h1 id="player2">PLAYER TWO</h1>
        <form>
          <input
            id="gravityToggle"
            ref={gravToggle}
            type="button"
            value="click to turn gravity off"
            onClick={toggleGravity}
          />
        </form>
        <canvas
          id="canvas"
          ref={canvas}
          width="1000"
          height="600"
          style={{ margin: "28.5px 0px 0px 183px" }}
        ></canvas>
      </div>
    </div>
  );
};

export default SpikePongGame;
