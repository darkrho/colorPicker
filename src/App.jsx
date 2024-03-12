import './App.css'
import * as React from 'react';
import Slider from '@mui/material/Slider';
import {Component} from 'react'

// style={{backgroundColor:`rgb(${this.props.color.red}, ${this.props.color.blue}, ${this.props.color.green})`}}
class Foo extends Component {

}
class App extends Component {

  state = {
    red: 0,
    blue: 0,
    green: 0,
  }

  onHandle = (e) => {
    if (e.target.name === 'red'){
      this.setState({"red": e.target.value})
    }else if (e.target.name === "blue"){
      this.setState({"blue": e.target.value})
    }else if (e.target.name === "green"){
      this.setState({"green": e.target.value})
    }
    console.log(this.state)
  }

  render () {
    return(
      <>
        <div className="box" style={{backgroundColor:`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}></div>
        <SliderElement onHandle={this.onHandle}/>
      </>
      
    )
  }
}


class SliderElement extends Component {
  constructor(props) {
    super(props)
    this.onHandle = props.onHandle

  }


  render() {
    return (
      <div>
        
        <Slider
          name="red"
          size="small"
          defaultValue={0}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={0}
          max={256}
          step={1}
          onChange={this.onHandle}
        />
        <Slider
        name="green"
        size="small"
        defaultValue={0}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={0}
        max={256}
        step={1}
        onChange={this.onHandle}
      />
      <Slider
        name="blue"
        size="small"
        defaultValue={0}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={0}
        max={256}
        step={1}
        onChange={this.onHandle}
      />
      </div>
      
    )
    }
  
}

export default App
