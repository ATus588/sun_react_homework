import React, { useState } from 'react'
import Slider from '@mui/material/Slider';

const style = {
  padding: '30px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: '0 3px 1px rgba(0,0,0,0.1)'
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'bold',
    top: 0,
    backgroundColor: 'unset',
    '&:before': {
      display: 'none',
    },
    '& *': {
      color: 'black',
      background: 'transparent',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: 'var(--gold_yellow)'
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: 'var(--controller_grey)'
  }
}

function valueLabel(value) {
  return <div><span style={{ color: 'var(--gold_yellow)' }}>$</span> {value}</div>
}

function Price() {
  const minPrice = 1
  const maxPrice = 500

  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='filter__section__container'>
      <div className="filter__section__title">Price</div>
      <div className="price__slider__container">
        <Slider
          sx={style}
          defaultValue={[minPrice, maxPrice]}
          valueLabelDisplay="on"
          valueLabelFormat={valueLabel}
          onChange={handleChange}
          min={minPrice}
          max={maxPrice}
        />
      </div>
    </div>
  )
}

export default Price