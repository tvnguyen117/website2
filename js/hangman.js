* {
    box-sizing: border-box;
}

.home{

    position: fixed;
    top: 10px;
    left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: purple;
    text-decoration: none;
    border-radius: 5px;
}
body {
    background-color: pink;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    margin: 0;
    overflow: hidden;
}

h1 {
    margin: 20px 0 0;
}

.game-container {
    padding: 20px 30px;
    position: relative;
    margin: auto;
    height: 350px;
    width: 450px;
}

.wrong-letters-container {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    text-align: right;
}

.wrong-letters-containers p {
    margin: 0 0 5px;
}

.wrong-letters-container span {
    font-size: 24px;
}

.word {
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.letter {
    font-size: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 20px;
    margin: 0 3px;
    border-bottom: 3px solid dark pink;
}

.figure-container {
    fill: transparent;
    stroke: #ffffff;
    stroke-width: 4px;
    stroke-linecap: round;
}

.figure-part {
    display: none;
}

.popup-container {
    background-color: rgba(0,0,0,0);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    display: none;
    align-items: center;
    justify-content: center;
}

.popup {
    background: #70b1fb;
    border-radius: 5px;
    box-shadow: 0 15px 10px 3px rgba(0,0,0,0.1);
    padding: 20px;
    text-align: center;
}

.popup button {
    cursor: pointer;
    background-color: white;
    color: dark pink;
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 16px;
}

.popup button:active {
    transform: scale(0.98);
}

.notification-container {
    background-color: rgba(0,0,0,0.3);
    padding: 15px 20px;
    border-radius: 10px 10px 0 0;
    position: absolute;
    bottom: -50px;
    transition: transform 0.3s ease-in-out;
}

.notification-container p {
    margin: 0;
}

.notification-container.show {
    transform: translate(-50px);
}
