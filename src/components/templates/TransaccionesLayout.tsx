import React from 'react'
import FilterTag from '../atoms/filter-tag'
import styles from '@/styles/pages/index.module.scss';
import SearchInput from '../atoms/search-input';
import ItemsList from '../organisms/items-list';
import Button from '../atoms/buttons/button';

const categories=['Todos','Personales','Comida','Otros']

const TransaccionesLayout = () => {
	return (
		<>
		<div className={styles.container_filters}>
			<div>
				<div className={styles.filter_list}>
					{categories.map((filter,index)=> <FilterTag key={filter} tag={filter} /> )}
				</div>
				<SearchInput />
			</div>
			<div className={styles.container_buttons}>
				<Button color="purple" text="Añadir Gasto" />
				<Button color="purple" text="Noviembre | 24" />
			</div>
		</div>
		<ItemsList />
		</>
	)
}

export default TransaccionesLayout