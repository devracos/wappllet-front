import { color_dark } from '@/constants/color'
import React from 'react'



const DoubleArrow = ({color=color_dark}:{color:string}) => {
	return (
		<svg width="18" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 0c.464 0 .909.185 1.237.513l7 7a1.75 1.75 0 0 1-2.474 2.474L8.75 4.225 2.987 9.987A1.75 1.75 0 0 1 .512 7.513l7-7A1.75 1.75 0 0 1 8.75 0ZM.512 18.013a1.75 1.75 0 0 1 2.475 0l5.763 5.763 5.763-5.763a1.75 1.75 0 0 1 2.474 2.474l-7 7a1.75 1.75 0 0 1-2.475 0l-7-7a1.75 1.75 0 0 1 0-2.474Z" fill={color}/></svg>
	)
}

export default DoubleArrow