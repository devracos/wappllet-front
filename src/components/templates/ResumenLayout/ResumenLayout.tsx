import React from 'react'
import styles from './ResumenLayout.module.scss';
import Tag from '@/components/atoms/tag/Tag';

const ResumenLayout = () => {
	return (
		<>
			<div className={styles.resumen_container}>
				<div className={styles.res_cont_1}>
					<p className={styles.p_style}>Saldo inicial Noviembre</p>
					<Tag text={'$580.000'} />
				</div>
				
			</div>
		</>
	)
}

export default ResumenLayout