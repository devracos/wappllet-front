import React, { useState } from 'react'
import styles from './PageLayout.module.scss';

import Navbar from '../../molecules/navbar/navbar'
import DoubleButton from '@/components/atoms/double-button/double-button';
import { resumenW } from '@/constants/local-text';
import SidebarMenu from '@/components/molecules/sidebar/sidebar-menu';

const PageLayout = ({children,page,toggleTitles}:{children:React.ReactNode,page:string,toggleTitles:[string,string]}) => {
	
	const [toggleMenu, setToggleMenu] = useState(false)	

	return (
		<>
			<SidebarMenu toggleMenu={toggleMenu}/> 
			<div className={[styles.page_layout, page===resumenW && styles.page_layout_bgColor].c()}>
				<div>
					<Navbar title={page} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
					<DoubleButton titles={toggleTitles} />
					{children}
				</div>
				{/* <div className={styles.flex}>
					<SidebarMenu />		
					<div className={styles.body_content}>
						<Navbar />
						{children}
					</div>
				</div>*/}
			</div>
		</>
	)
}

export default PageLayout