import React from 'react'
import styleL from './summary.module.scss'
import CardSummary from '@/components/atoms/card-summary/card-summary'

const Summary = () => {
	return (
		<div className={styleL.wrapper}>
			<div className={styleL.container_summary}>
				<p className='t3'>Saldo inicial <span>noviembre:</span></p>
				<p className={`h3 ${styleL.container_summary_small_tag}`}>540.000</p>
			</div>
			<CardSummary />
		</div>
	)
}

export default Summary