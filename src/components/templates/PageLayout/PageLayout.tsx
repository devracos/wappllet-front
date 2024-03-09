import React from 'react'
import styles from './PageLayout.module.scss';

import Navbar from '../../molecules/navbar/navbar'
import DoubleButton from '@/components/atoms/double-button/double-button';
import { resumenW } from '@/constants/local-text';
import SidebarMenu from '@/components/molecules/sidebar/sidebar-menu';

const PageLayout = ({children,page,toggleTitles}:{children:React.ReactNode,page:string,toggleTitles:[string,string]}) => {

	return (
		<div className={[styles.page_layout, page===resumenW && styles.page_layout_bgColor].c()}>
			{/* <SidebarMenu /> */}
			<Navbar title={page} />
			<DoubleButton titles={toggleTitles} />
			{children}
			{/* <div className={styles.flex}>
				<SidebarMenu />		
				<div className={styles.body_content}>
					<Navbar />
					{children}
				</div>
			</div>*/}
		</div>
	)
}

export default PageLayout