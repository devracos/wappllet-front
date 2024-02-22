import React from 'react'
import styles from '@/styles/pages/index.module.scss';

const PageLayout = ({children}) => {
	return (
		<>
		<div className={styles.nav}>
			<p>Transacciones</p>	
			<p>Menu</p>
		</div>
			{children}
		</>
	)
}

export default PageLayout