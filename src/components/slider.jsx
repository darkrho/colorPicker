
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function MySlider({max,min, handle, step, name}) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        name={name}
        size="small"
        defaultValue={0}
        step={step}
        aria-label="Small"
        valueLabelDisplay="auto"
        max={max}
        min={min}
        onChange={handle}
      />
    </Box>
  );
}