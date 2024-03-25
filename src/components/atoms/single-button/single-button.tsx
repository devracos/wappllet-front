import React, { useState } from 'react'
import style from './single-button.module.scss'

type TypeButton='red'|'green'|'normal';
type TBorderColor='green'|'purple'|'grey';

const SingleButton = ({text,type='normal',onClick,borderColor='grey'}:{text:string,type?:TypeButton,onClick:()=>void, borderColor?:TBorderColor}) => {

	const [toggle, setToggle] = useState(false);

	let styles_btn=style.btn_normal;
	let styles_colorBorder=style.btn_border_grey;

	if(borderColor==='green')styles_colorBorder=style.btn_border_green;
	else if(borderColor==='purple')styles_colorBorder=style.btn_border_purple;

	if(type==='green')styles_btn=style.btn_green;
	else if(type==='red') styles_btn=style.btn_red;

	return (
		<button onClick={onClick} className={`${style.button_pushable} ${toggle? style.push:''} `} role="button">
				<span className={`${style.button_edge} ${styles_colorBorder}`}></span>
				<span className={`${style.button_front} ${styles_btn}`}>				
					{text}
				</span>
		</button>
	)
}

export default SingleButton