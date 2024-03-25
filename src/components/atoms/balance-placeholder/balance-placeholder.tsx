import React from 'react'
import styleL from './balance-placeholder.module.scss'

type TypePlaceholder='green'|'purple'



const BalancePlaceholder = ({amount,type='green'}:{amount:string,type?:TypePlaceholder}) => {

    let styles_placeholder = styleL.placeholder_green;
    if(type==='purple')styles_placeholder=styleL.placeholder_purple;

    return (
        <div className={`${styleL.placeholder} ${styles_placeholder}`}>
            <p className='hl2'>{amount}</p>
        </div>
    )
}

export default BalancePlaceholder