import React from 'react'
import styles from '@/styles/pages/index.module.scss';

const filterTag = ({tag}:any) => {
	return (
		<>
			<div className={`${styles.tag_style} ${styles.border_box}`}>{tag}</div>			
		</>
	)
}

export default filterTag;