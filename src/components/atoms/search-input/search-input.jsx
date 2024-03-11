import React from 'react'
import stylesG from '@/styles/pages/index.module.scss';
import stylesL from './search-input.module.scss'
import { IoSearch } from "react-icons/io5";
import MagnifyingGlass from '@/assets/svg/magnifying-glass';

const SearchInput = () => {
	return (
		<div className={`${stylesG.border_box} ${stylesL.search_style}`}>
			<MagnifyingGlass />
			<input placeholder='Buscar' type="text" />
		</div>
	)
}

export default SearchInput