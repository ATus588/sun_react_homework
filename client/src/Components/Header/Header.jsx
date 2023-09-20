import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'

function Input({x}) {
    return (
        <div className="header__input__container shadow-lg">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "var(--gold_yellow)", }} />
            <input type="text" placeholder='Product, brand, color, ...' className='border-0'/>
            <FontAwesomeIcon icon={faX} style={{visibility: `${x? 'visible' : 'hidden'}`}}/>
        </div>
    )
}

function Header() {
    const [x, setX] = useState(false);

    return (
        <div className='container-fluid header__container'>
            <div className="container-lg flex__column__align__center">
                <div className="header__logo__container">
                    <FontAwesomeIcon icon={faLightbulb} style={{ color: "#ffffff", height: "30px", width: 'auto'}} />
                    <div>algolia</div>
                </div>
                <h1>Stop looking for an item - find it.</h1>
                <Input x={x}></Input>
            </div>
        </div>
    )
}

export default Header