import React from 'react'
import styles from './tag.module.scss'

const Tag = ({text}) => {
	return (
		<div className={styles.tag_color}>{text}</div>
	)
}

export default Tag