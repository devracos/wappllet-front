import React, { useState } from 'react'
import style from './burger-menu.module.scss'

const BurgerMenu = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle=()=>{
		setToggle(prev=>!prev)
	}
	return (
		<div className={`${style.burgerIcon} ${toggle? style.open : ''}`} onClick={handleToggle}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default BurgerMenu