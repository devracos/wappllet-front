import React from 'react'
import styles from './PageLayout.module.scss';
import SidebarMenu from '../../molecules/menu/sidebar-menu';
import Navbar from '../../molecules/navbar/navbar'

const PageLayout = ({children,page}) => {
	return (
		<div className={styles.page_layout}>
			<Navbar title={page} />
			<p>{page}</p>
			{/* <div className={styles.flex}>
				<SidebarMenu />		
				<div className={styles.body_content}>
					<Navbar />
					{children}
				</div>
			</div>			 */}
		</div>
	)
}

export default PageLayout