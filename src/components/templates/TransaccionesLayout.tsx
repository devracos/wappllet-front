import React from 'react'
import FilterTag from '../atoms/filter-tag'
import styles from '@/styles/pages/index.module.scss';

const categories=['Todos','Personales','Comida','Otros']

const TransaccionesLayout = () => {
	return (
		<>
			<div className={styles.filter_list}>
				{categories.map((filter,index)=> <FilterTag key={filter} tag={filter} /> )}
			</div>
		</>
	)
}

export default TransaccionesLayout