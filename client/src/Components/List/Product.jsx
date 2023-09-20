import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollar } from '@fortawesome/free-solid-svg-icons'

function Product({prod}) {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 product__card'>
            <div className="product__card__img">
                <img src={`/src/images/Products/${prod.id}.jpg`} alt="" />
            </div>
            <h4 className='text-uppercase'>{prod.category.name}</h4>
            <div className='product__name'>{prod.name}</div>
            <p>{prod.des}</p>
            <div className='product__price'>
                <FontAwesomeIcon icon={faDollar} style={{ color: "var(--gold_yellow)", }} /> {prod.price}
                <span>
                    <FontAwesomeIcon icon={faStar} style={{ color: "var(--gold_yellow)", }} />{prod.rating}
                </span>
            </div>
        </div>
    )
}

export default Product