import React from 'react'
import styles from '@/styles/pages/index.module.scss';
import SidebarMenu from '../molecules/menu/sidebar-menu';
import Navbar from '../molecules/navbar/navbar'

const PageLayout = ({children}) => {
	return (
		<>
		<div className={styles.flex}>
			<SidebarMenu />		
			<div className={styles.body_content}>
				<Navbar />
				{children}
			</div>
		</div>		
			
		</>
	)
}

export default PageLayout