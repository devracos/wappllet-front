import React, { useState } from 'react'
import style from './double-button.module.scss'
const DoubleButton = () => {
	
	const [toggle, setToggle] = useState(true);

	const handleSwitch = ()=>{
		setToggle(prev=>!prev)
	}


	return (
		<>
		<button className={`${style.button_pushable} ${toggle? style.push:''}`} role="button" onClick={handleSwitch}>
			<span className={`${style.button_left_edge}`}></span>
			<span className={`${style.button_left_front} ${style.text}`}>
				Gastos
			</span>
		</button>
		<button className={`${style.button_pushable} ${!toggle? style.push:''}`} role="button" onClick={handleSwitch}>
			<span className={`${style.button_right_edge}`}></span>
			<span className={`${style.button_right_front} ${style.text}`}>
				Ingresos
			</span>
		</button>
		</>
		
	)
}

export default DoubleButton