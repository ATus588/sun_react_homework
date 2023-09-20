import React from 'react'

function Controller() {
    return (
        <>
            <div className='controller__container py-4 mb-4'>
                <select id="orderBy">
                    <option value="1">Sort by featured</option>
                    <option value="2">Price ascending</option>
                    <option value="3">Price descending</option>
                </select>
                <select id="showPerPage">
                    <option value="6">6 hits per page</option>
                    <option value="12">12 hits per page</option>
                    <option value="18">18 hits per page</option>
                </select>
            </div>
        </>
    )
}

export default Controller