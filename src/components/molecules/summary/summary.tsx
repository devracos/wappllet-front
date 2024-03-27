import React from 'react';
import styleL from './summary.module.scss';
import CardSummary from '@/components/atoms/card-summary/card-summary';
import BalancePlaceholder from '@/components/atoms/balance-placeholder/balance-placeholder';
import MoreData from '@/components/molecules/more-data/more-data';

const Summary = () => {
	return (
		<div className={styleL.wrapper}>
			<div className={styleL.savings}>
				<p className="t3">
					Saldo inicial <span>noviembre:</span>
				</p>
				<p className={`h3 ${styleL.savings_small_tag}`}>540.000</p>
			</div>
			<CardSummary
				savingPercentage="+35%"
				totalSavings="740.000"
				saved="ahorrado este mes"
			/>
			<div className={styleL.balance}>
				<p className={`h3 ${styleL.balance_amount}`}>Saldo inicial</p>
				<BalancePlaceholder amount="540.000" type="purple" />
				<div className={styleL.divider}></div>
				<p className={`h3 ${styleL.balance_amount}`}>Saldo final</p>
				<BalancePlaceholder amount="740.000" type="green" />
			</div>
			<div className={styleL.more_data}>
				<p className="t1">----------- mas datos -----------</p>
				<MoreData />
			</div>
		</div>
	);
};

export default Summary;
