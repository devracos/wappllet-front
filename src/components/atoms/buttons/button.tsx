import React from 'react'
import styles from '@/components/atoms/buttons/buttons.module.scss';
import './buttons.module.scss'


const Button = ({text,color}) => {	
	return (
		<div>
			<button className={`${styles.btn_style} ${styles.btn_purple}`} type='button'>
				{/* <span className={styles.btn_border}></span> */}
				<span className=''>{text}</span>
			</button>			
		</div>
	)
}
export default Button
