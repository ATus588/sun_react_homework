import React from 'react'
import Count from './Count'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Star({ rating }) {
  return (
    <div className="star__container">
      <FontAwesomeIcon icon={faStar} style={{color: 'var(--gold_yellow)'}}/>
      <FontAwesomeIcon icon={faStar} style={{ color: `${rating < 2 ? 'var(--light_grey)':'var(--gold_yellow)'}` }} />
      <FontAwesomeIcon icon={faStar} style={{ color: `${rating < 3 ? 'var(--light_grey)' : 'var(--gold_yellow)'}` }} />
      <FontAwesomeIcon icon={faStar} style={{ color: `${rating < 4 ? 'var(--light_grey)' : 'var(--gold_yellow)'}` }} />
      <FontAwesomeIcon icon={faStar} style={{ color: `${rating < 5 ? 'var(--light_grey)' : 'var(--gold_yellow)'}` }} />
    </div>
  )
}

function Ratings() {
  return (
    <div className='filter__section__container'>
      <div className="filter__section__title">Ratings</div>
      <ul className='list-unstyled p-0'>
        <li className='flex__align__middle mb-3'><Star rating={4} /><Count count={555} /></li>
        <li className='flex__align__middle mb-3'><Star rating={3} /><Count count={555} /></li>
        <li className='flex__align__middle mb-3'><Star rating={2} /><Count count={555} /></li>
        <li className='flex__align__middle mb-3'><Star rating={1} /><Count count={555} /></li>
      </ul>
    </div>
  )
}

export default Ratings