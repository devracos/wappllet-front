import React from 'react'
import styleL from './balance-placeholder.module.scss'

type TypePlaceholder='green'|'purple'|'normal'



const BalancePlaceholder = ({amount,type='normal'}:{amount:string,type?:TypePlaceholder}) => {

    let styles_placeholder = styleL.placeholder_normal;
    if(type==='purple')styles_placeholder=styleL.placeholder_purple;
    else if (type==='green')styles_placeholder=styleL.placeholder_green;

    return (
        <div className={`${styleL.placeholder} ${styles_placeholder}`}>
            <p className='hl2'>{amount}</p>
        </div>
    )
}

export default BalancePlaceholder