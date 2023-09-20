import React, { useState } from 'react'
import '../../Css/customCheckbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Count from './Count'

function SubCategory() {
  const [checked, setChecked] = useState(false);

  return (
    <li className='category__card'>
      <label className="category__radio">
        <input type="checkbox" name='subCategory' checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <span className="category__checkmark">
          {checked ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
          Sub Category name
          <Count count={5} />
        </span>
      </label>
    </li>
  )
}

function CategoryCheckbox() {
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <li className='category__card'>
      <label className="category__radio">
        <input type="checkbox" name='category' checked={checked} onChange={onChange} />
        <span className="category__checkmark">
          {checked ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
          Category name
          <Count count={555} />
        </span>
      </label>
      <ul className='list-unstyled p-1'>
        {checked && <SubCategory />}
      </ul>
    </li>
  )
}

function Category() {
  return (
    <div className='filter__section__container'>
      <div className="filter__section__title">Category</div>
      <ul className='list-unstyled p-0'>
        <CategoryCheckbox />
        <CategoryCheckbox />
      </ul>
    </div>
  )
}

export default Category