import React, {useState} from 'react'

function FreeShip() {
    const [checked, setChecked] = useState(false);
    const onChange = e => {
        setChecked(e.target.checked)
    }

    return (
        <div className='filter__section__container'>
            <div className="filter__section__title">Free shipping</div>
            <div className="freeship__card">
                <div>Display only items with free shipping</div>
                <label className="freeship__switch">
                    <input type="checkbox" checked={checked} onChange={onChange}/>
                        <span className="freeship__slider"></span>
                </label>
            </div>
        </div>
    )
}

export default FreeShip