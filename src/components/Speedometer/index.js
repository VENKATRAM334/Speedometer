import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickApplyAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickApplyBrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="speedometer-image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              onClick={this.onClickApplyAccelerateButton}
              className="button accelerate-button"
              type="button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onClickApplyBrakeButton}
              className="button apply-brake-button"
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
