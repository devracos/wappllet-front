import React from 'react'
import styles from '@/styles/pages/index.module.scss';
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
	return (
		<div className={`${styles.border_box} ${styles.search_style}`}>
			<IoSearch size={'1.2em'} />
			<input placeholder='Buscar' type="text" />
		</div>
	)
}

export default SearchInput