import React from 'react'
import styles from './more-data.module.scss'
import BalancePlaceholder from '@/components/atoms/balance-placeholder/balance-placeholder'
import BalanceState from '@/components/atoms/balance-state/balance-state'

const MoreData = () => {

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <p className={`h3 ${styles.subheadline}`}>categoria con mayor gasto</p>
                <BalancePlaceholder amount='Comida' />
                <p className={`h3 ${styles.subheadline}`}>mayor ingreso</p>
                <BalancePlaceholder amount='Salario' />
                <p className={`h3 ${styles.subheadline}`}>mayor gasto</p>
                <BalancePlaceholder amount='Chaqueta pb' />
            </div>
            <div className={styles.state}>
                <BalanceState state='😎'/>
            </div>
        </div>
    )
}

export default MoreData