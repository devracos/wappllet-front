import React from 'react'
import styleL from './card-summary.module.scss'

const CardSummary = ({savingPercentage, totalSavings, saved}:{savingPercentage:string, totalSavings:string, saved:string}) => {
	return (
		<div className={styleL.container_card_summary}>
			<h2 className={`h1 ${styleL.savingAmount}`}>{savingPercentage}</h2>
			<h2 className={`t3 ${styleL.saved}`}>aumento del ahorro total</h2>
			<div className={styleL.divider}></div>
			<p className={`h1 ${styleL.savingAmount}`}>{totalSavings}</p>
			<p className={`t3 ${styleL.saved}`}>{saved}</p>			
		</div>
	)
}

export default CardSummary