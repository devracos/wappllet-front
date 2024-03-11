import React from 'react'
import styles from './checkbox.module.scss'

const Checkbox = ({check}:{check:boolean}) => {	
	return (
		<div className={styles.input_style}>
  	  <input id="option" type="checkbox" name="field" value="option" checked={check} />	   
		</div>
	)
}

export default Checkbox