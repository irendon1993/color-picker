import React, { Component } from 'react'

// PROBLEM
// EXAMPLE
//  hsl(50,8%,20%)
// DATA
//
//
// ALGORITHM

class App extends Component {
  // Initialize the state to a random color when the page is loaded.
  state = {
    hueSliderValue: 25,
    saturationSliderValue: 25,
    lightSliderValue: 25,
  }

  updateHueSlider = event => {
    this.setState({
      hueSliderValue: event.target.value,
    })
  }

  updateSaturationSlider = event => {
    this.setState({
      saturationSliderValue: event.target.value,
    })
  }

  updateLightSlider = event => {
    this.setState({
      lightSliderValue: event.target.value,
    })
  }

  handleClick = () => {
    this.setState({
      hueSliderValue: Math.floor(Math.random() * 360),
      saturationSliderValue: Math.floor(Math.random() * 100),
      lightSliderValue: Math.floor(Math.random() * 100),
    })
  }

  render() {
    // Represent the three values, hue, saturation, and lightness in your state.
    const currentColor = `hsl(${this.state.hueSliderValue},${this.state.saturationSliderValue}%,${this.state.lightSliderValue}%)`
    return (
      <>
        <main>
          <div>
            <figure style={{ backgroundColor: currentColor }}></figure>
            <p>{currentColor}</p>
          </div>
          <div>
            {/* // Add a button that picks a new random color. */}
            <button onClick={this.handleClick}> Random color </button>
          </div>
          <div>
            <div>
              <h1>Change the colors</h1>
              <div>
                <input
                  type="range"
                  max="360"
                  onChange={this.updateHueSlider}
                  value={this.state.hueSliderValue}
                />
              </div>
              <div>
                <h3>Your Current Selection on the Slider</h3>
                <p>{this.state.hueSliderValue}</p>
              </div>
            </div>
            <div>
              <h1>Change the colors</h1>
              <div>
                <input
                  type="range"
                  max="100"
                  onChange={this.updateSaturationSlider}
                  value={this.state.saturationSliderValue}
                />
              </div>
              <div>
                <h3>Your Current Selection on the Slider</h3>
                <p>{this.state.saturationSliderValue}</p>
              </div>
            </div>
            <div>
              <h1>Change the colors</h1>
              <div>
                <input
                  type="range"
                  max="100"
                  onChange={this.updateLightSlider}
                  value={this.state.lightSliderValue}
                />
              </div>
              <div>
                <h3>Your Current Selection on the Slider</h3>
                <p>{this.state.lightSliderValue}</p>
              </div>
            </div>
            ​
          </div>
        </main>
      </>
    )
  }
}
export default App
