import React, {useState, useEffect} from 'react'
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

const ratingsAPI = 'http://localhost:3000/ratings'

function Ratings() {
  const [ratings, setRatings] = useState()

  useEffect(() => {
    fetch(ratingsAPI)
      .then(response => response.json())
      .then(data => setRatings(data))
  }, [])

  return (
    <div className='filter__section__container'>
      <div className="filter__section__title">Ratings</div>
      <ul className='list-unstyled p-0'>
        {ratings && ratings.map(
          (rating, index) => <li key={index} className='flex__align__middle mb-3'><Star rating={rating.star} /><Count count={rating.count} /></li>
          )}
      </ul>
    </div>
  )
}

export default Ratings