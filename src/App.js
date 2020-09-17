import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends React.Component{
         state = {
        minutes: 0,
        seconds: 30,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    

    render() {
        const { minutes, seconds } = this.state
        function alertFunc() {
         alert("Game Over!");
	 }
        return (
            <div className='App'>
		    <div className="container" ><br/><br/>
		    <p>Press F5 to restart the Game, F11 for fullscreen display ON/OFF</p><br/>
		    </div>
		    { 
		    minutes === 0 && seconds === 0
                    ? alertFunc()
                    : <button><h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1></button>
                   }
		    <canvas id="snakebasak" width="40" height="10" ></canvas>
	    </div>
	  );
        }
}

export default App;
