import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Pagination() {
    const curPage = 1;
    const totalPage = 10;
    return (
        <div className='flex__justify__center flex__align__middle pagination__container'>
            <FontAwesomeIcon icon={faChevronLeft} className={curPage == 1 ? 'pagination__disable' : ''}/>
            {curPage == 1 && (
                <ul>
                    <li style={{backgroundColor: 'var(--gold_yellow)', backgroundImage: 'linear-gradient(rgba(255, 255, 255, .34), rgba(255, 255, 255, 0))'}}>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            )}
            {curPage == 2 && (
                <ul>
                    <li>1</li>
                    <li style={{backgroundColor: 'var(--gold_yellow)', backgroundImage: 'linear-gradient(rgba(255, 255, 255, .34), rgba(255, 255, 255, 0));'}}>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            )}
            {curPage > 1 && curPage < (totalPage - 1)  && (
                <ul>
                    <li>{curPage - 2}</li>
                    <li>{curPage - 1}</li>
                    <li style={{backgroundColor: 'var(--gold_yellow)', backgroundImage: 'linear-gradient(rgba(255, 255, 255, .34), rgba(255, 255, 255, 0));'}}>{curPage}</li>
                    <li>{curPage + 1}</li>
                    <li>{curPage + 2}</li>
                </ul>
            )}
            {curPage == (totalPage - 1) && (
                <ul>
                    <li>{curPage - 3}</li>
                    <li>{curPage - 2}</li>
                    <li>{curPage - 1}</li>
                    <li style={{backgroundColor: 'var(--gold_yellow)', backgroundImage: 'linear-gradient(rgba(255, 255, 255, .34), rgba(255, 255, 255, 0));'}}>{curPage}</li>
                    <li>{curPage + 1}</li>
                </ul>
            )}
            {curPage == totalPage && (
                <ul>
                    <li>{curPage - 4}</li>
                    <li>{curPage - 3}</li>
                    <li>{curPage - 2}</li>
                    <li>{curPage - 1}</li>
                    <li style={{backgroundColor: 'var(--gold_yellow)', backgroundImage: 'linear-gradient(rgba(255, 255, 255, .34), rgba(255, 255, 255, 0));'}}>{curPage}</li>
                </ul>
            )}
            <FontAwesomeIcon icon={faChevronRight} className={curPage == totalPage ? 'paginaion__disable' : ''} />
        </div>
    )
}

export default Pagination
