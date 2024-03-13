import React, { useState } from 'react'
import style from './burger-menu.module.scss'


const BurgerMenu = ({setToggleMenu,toggleMenu}:{setToggleMenu:Function,toggleMenu:boolean}) => {
	
	const handleToggle=()=>{		
		setToggleMenu((prev:boolean)=>!prev)
	}
	
	return (
		
		<div className={[
				style.burgerIcon,
				toggleMenu && style.open].c()
			} onClick={handleToggle}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default BurgerMenu