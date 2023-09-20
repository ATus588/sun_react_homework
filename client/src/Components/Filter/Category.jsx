import React, { useState, useEffect } from 'react'
import '../../Css/customCheckbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Count from './Count'

const categoriesAPI = "http://localhost:3000/categories?_embed=subCategories"

function SubCategory({sub}) {
  const [checked, setChecked] = useState(false);

  return (
    <li className='category__card'>
      <label className="category__radio">
        <input type="checkbox" name='subCategory' checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <span className="category__checkmark">
          {checked ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
          {sub.name}
          <Count count={sub.quantity} />
        </span>
      </label>
    </li>
  )
}

function CategoryCheckbox({category}) {
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
          {category.name}
          <Count count={category.quantity} />
        </span>
      </label>
      <ul className='list-unstyled p-1'>
        {checked && category.subCategories && category.subCategories.map(
          (sub, index) => <SubCategory sub={sub} key={index} />
        )}
      </ul>
    </li>
  )
}

function Category() {
  const [categories, setCategories] = useState()

  useEffect(() => {
    fetch(categoriesAPI)
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className='filter__section__container'>
      <div className="filter__section__title">Category</div>
      <ul className='list-unstyled p-0'>
        {categories && categories.map(
          (category, index) => <CategoryCheckbox category={category} key={index} />
        )}
      </ul>
    </div>
  )
}

export default Category