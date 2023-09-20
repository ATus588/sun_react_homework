import React, { useState, useEffect } from 'react'
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

const minAPI = 'http://localhost:3000/products?_page=1&_limit=1&_sort=price&_order=asc'
const maxAPI = 'http://localhost:3000/products?_page=1&_limit=1&_sort=price&_order=desc'

function Price() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);

  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(minAPI)
      .then(response => response.json())
      .then(data => setMinPrice(data[0].price))
    fetch(maxAPI)
      .then(response => response.json())
      .then(data => setMaxPrice(data[0].price))
  }, [])

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