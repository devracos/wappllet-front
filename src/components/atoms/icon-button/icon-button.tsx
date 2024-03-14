import React, { useState } from 'react'
import style from './icon-button.module.scss'
import AddIcon from '@/assets/svg/add-icon';

const IconButton = ({onFunction}) => {
	const [toggle, setToggle] = useState(false);

	return (
		<button onClick={onFunction} className={`${style.button_pushable} ${toggle? style.push:''} `} role="button">
				<span className={`${style.button_edge}`}></span>
				<span className={`${style.button_front} ${style.text}`}>
					<AddIcon />
				</span>
		</button>
	)
}

export default IconButton