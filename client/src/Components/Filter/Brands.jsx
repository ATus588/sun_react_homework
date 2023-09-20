import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import Count from './Count';

function BrandCheckbox() {
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <li className='brand__card'>
      <label className="brand__checkbox" style={{ fontWeight: `${checked ? 'bold' : 'normal'}` }}>
        Brand name<Count count={555} />
        <input type="checkbox" name='brand' checked={checked} onChange={onChange} />
        <span className="brand__checkmark">
        </span>
      </label>
    </li>
  )
}


function Brands() {
  return (
    <div className='filter__section__container'>
      <div className="filter__section__title">Brand</div>
      <div className="brand__search__container">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder='Search for brands...' />
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul className='list-unstyled p-0'>
        <BrandCheckbox />
        <BrandCheckbox />
      </ul>
    </div>
  )
}

export default Brands