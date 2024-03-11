import {useState} from 'react';
import * as  React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MySlider from './slider'

const RGBAToHexA = (red,green,blue,alpha) => {
  red = red.toString(16);
  green = green.toString(16);
  blue = blue.toString(16);
  alpha = Math.round(alpha * 255).toString(16);

  if (red.length == 1)
    red = "0" + red;
  if (green.length == 1)
    green = "0" + green;
  if (blue.length == 1)
    blue = "0" + blue;
  if (alpha.length == 1)
    alpha = "0" + alpha;

  return "#" + red + green + blue + alpha;
}

export default function MyContainer() {
  const [rgb, setColor] = useState({"red": 0, "green":0, "blue":0, "alpha":0})
  const handleColors = (e) => {
    if(e.target.name === "red") {
      setColor({...rgb}, rgb.red=e.target.value)
    }
    else if (e.target.name === "green") {
      setColor({...rgb}, rgb.green=e.target.value)
    }else if (e.target.name === "blue") {
      setColor({...rgb}, rgb.blue=e.target.value)
    }else if (e.target.name === "alpha") {
      setColor({...rgb}, rgb.alpha=e.target.value)
    }
    let {red, green, blue, alpha} = rgb
    let hex = RGBAToHexA(red, green, blue, alpha)
  }



  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' ,width: '100vw'}} >
            <div id="box"></div>
            <MySlider name={"red"} max={256} min={0} step={1} handle={handleColors}/>
            <MySlider name={"green"} max={256} min={0} step={1} handle={handleColors}/>
            <MySlider name={"blue"} max={256} min={0} step={1} handle={handleColors}/>
            <MySlider name={"alpha"} max={1.0} min={0} step={0.1} handle={handleColors}/>
        </Box>
      </Container>
    </React.Fragment>
  );
}