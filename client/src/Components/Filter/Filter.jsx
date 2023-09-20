import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Category from './Category'
import Brands from './Brands'
import Price from './Price'
import FreeShip from './FreeShip'
import Ratings from './Ratings'

function Filter() {
  return (
    <div className="col-md-3">
      <div className='filter__controller py-4 mb-4'>
        <h1>Filters</h1>
        <div>
          <FontAwesomeIcon icon={faRotateRight} />Clear filters
        </div>
      </div>
      <Category />
      <Brands />
      <Price />
      <FreeShip />
      <Ratings />
    </div>
  )
}

export default Filter