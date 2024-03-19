import React, { useState } from 'react'
import style from './single-button.module.scss'

type TypeButton='red'|'green'|'normal';

const SingleButton = ({text,type,onClick}:{text:string,type:TypeButton,onClick:()=>void}) => {

	const [toggle, setToggle] = useState(false);

	let styles_btn=style.btn_normal;

	if(type==='green')styles_btn=style.btn_green;
	else if(type==='red') styles_btn=style.btn_red;

	return (
		<button onClick={onClick} className={`${style.button_pushable} ${toggle? style.push:''} `} role="button">
				<span className={`${style.button_edge}`}></span>
				<span className={`${style.button_front} ${styles_btn}`}>				
					{text}
				</span>
		</button>
	)
}

export default SingleButton