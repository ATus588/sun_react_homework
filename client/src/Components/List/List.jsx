import React from 'react'
import Product from './Product'
import Controller from './Controller'
import Pagination from './Pagination'

function List({prods}) {
    return (
        <div className="col-12 col-md-9">
            <Controller />
            <div className="row p-0 m-0">
                {prods && prods.map(
                    (prod, index) => <Product prod={prod} key={index} />
                )}
            </div>
            <Pagination />
        </div>
    )
}

export default List