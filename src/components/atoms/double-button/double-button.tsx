import React, { useState } from 'react'
import style from './double-button.module.scss'

const DoubleButton = ({titles,dataContent,setDataContent}:{titles:[string,string],dataContent:boolean,setDataContent:Function}) => {
	
	const handleSwitch = ()=>{
		setDataContent((prev:Boolean)=>!prev)
	}

	return (
		<div>
			<button className={`${style.button_pushable} ${dataContent? style.push:''}`} role="button" onClick={handleSwitch}>
				<span className={`${style.button_left_edge}`}></span>
				<span className={`${style.button_left_front} ${style.text}`}>
					{titles[0]}
				</span>
			</button>
			<button className={`${style.button_pushable} ${!dataContent? style.push:''}`} role="button" onClick={handleSwitch}>
				<span className={`${style.button_right_edge}`}></span>
				<span className={`${style.button_right_front} ${style.text}`}>
					{titles[1]}
				</span>
			</button>
		</div>		
	)
}

export default DoubleButton