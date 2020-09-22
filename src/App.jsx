import React, { Component } from 'react'

// PROBLEM

// Represent the three values, hue, saturation, and lightness in your state.
//
// Add three sliders that update their respective values (hue, saturation, and lightness) in the state when changed.
// Display the color on the screen, in both text (i.e. hsl(50, 8%, 20%)) and the actual color as a background color on an element.
// Initialize the state to a random color when the page is loaded.
// Add a button that picks a new random color.
// In all cases, the sliders should be in the correct positions to represent the current color.
//
//
// EXAMPLE
//  hsl(50,8%,20%)

// The first value hue is given in degrees (around a color wheel),
// the second value is a percentage of saturation (0% being grey, 100% fully saturated),
// and the third value, a percentage of lightness (0% black, 100% white).
//
// DATA
//
//
// ALGORITHM
class HueSlider extends Component {
  state = {
    hueSliderValue: 25,
  }
  updateHueSlider = event => {
    console.log(event.target.value)
    this.setState({
      hueSliderValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Change the colors</h1>
        <div style={{ backgroundColor: `${this.state.color}` }}>
          <input
            type="range"
            max="100"
            onChange={this.updateHueSlider}
            value={this.state.hueSliderValue}
          />
        </div>
        <div>
          <h3>Your Current Selection on the Slider</h3>
          <p>{this.state.hueSliderValue}</p>
        </div>
      </div>
    )
  }
}

class SaturationSlider extends Component {
  state = {
    saturationSliderValue: 25,
  }
  updateSaturationSlider = event => {
    console.log(event.target.value)
    this.setState({
      saturationSliderValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Change the colors</h1>
        <div style={{ backgroundColor: `${this.state.color}` }}>
          <input
            type="range"
            max="1-0"
            onChange={this.updateSaturationSlider}
            value={this.state.saturationSliderValue}
          />
        </div>
        <div>
          <h3>Your Current Selection on the Slider</h3>
          <p>{this.state.saturationSliderValue}</p>
        </div>
      </div>
    )
  }
}

class LightSlider extends Component {
  state = {
    lightSliderValue: 25,
  }
  updateLightSlider = event => {
    console.log(event.target.value)
    this.setState({
      lightSliderValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Change the colors</h1>
        <div style={{ backgroundColor: `${this.state.color}` }}>
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
    )
  }
}

class App extends Component {
  state = {
    // hueSliderValue: 25,
    // saturationSliderValue: 25,
  }
  // updateHueSlider = event => {
  //   console.log(event.target.value)
  //   this.setState({
  //     hueSliderValue: event.target.value,
  //   })

  // updateSaturationSlider = event => {
  //   console.log(event.target.value)
  //   this.setState({
  //     hueSliderValue: event.target.value,
  //   })

  // updateLightSlider = event => {
  //     console.log(event.target.value)
  //     this.setState({
  //       hueSliderValue: event.target.value,
  //     })
  // }
  render() {
    return (
      <>
        <main>
          <HueSlider />
          <SaturationSlider />
          <LightSlider />
          {/* <div style={{ backgroundColor: `${this.state.color}` }}>
            <input
              type="range"
              max="360"
              onChange={this.updateSaturationSlider}
              value={this.state.saturationSliderValue}
            />
          </div>
          <div>
            <h3>Your Current Selection on the Slider</h3>
            <p>{this.state.saturationSliderValue}</p>
          </div>

          <div style={{ backgroundColor: `${this.state.color}` }}>
            <input
              type="range"
              max="360"
              onChange={this.updateLightSlider}
              value={this.state.lightSliderValue}
            />
          </div> */}
          {/* <div>
            <h3>Your Current Selection on the Slider</h3>
            <p>{this.state.lightSliderValue}</p>
          </div> */}
        </main>
      </>
    )
  }
}
export default App
