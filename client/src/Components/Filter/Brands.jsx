import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import Count from './Count';

const brandAPI = "http://localhost:3000/brands"

function BrandCheckbox({brand}) {
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <li className='brand__card'>
      <label className="brand__checkbox" style={{ fontWeight: `${checked ? 'bold' : 'normal'}` }}>
        {brand.name}
        <Count count={brand.quantity} />
        <input type="checkbox" name='brand' checked={checked} onChange={onChange} />
        <span className="brand__checkmark">
        </span>
      </label>
    </li>
  )
}


function Brands() {

  const [brands, setBrands] = useState()

  useEffect(() => {
    fetch(brandAPI)
      .then(response => response.json())
      .then(data => setBrands(data))
  }, [])

  return (
    <div className='filter__section__container'>
      <div className="filter__section__title">Brand</div>
      <div className="brand__search__container">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder='Search for brands...' />
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul className='list-unstyled p-0'>
        {brands && brands.map(
          (brand, index) => <BrandCheckbox brand={brand} />
        )}
      </ul>
    </div>
  )
}

export default Brands