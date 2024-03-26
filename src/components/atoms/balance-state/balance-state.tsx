import React from 'react'
import styleL from './balance-state.module.scss'

const BalanceState = ({state}:{state:string}) => {


    return (
        <div className={`${styleL.placeholder}`}>
            <p className='hl2'>Estado</p>
            <p className='hl2'>{state}</p>
        </div>
    )
}

export default BalanceState