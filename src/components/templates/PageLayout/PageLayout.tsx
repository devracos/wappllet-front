import React, { useState } from 'react'
import styles from './PageLayout.module.scss';

import Navbar from '../../molecules/navbar/navbar'
import DoubleButton from '@/components/atoms/double-button/double-button';
import { resumenW } from '@/constants/local-text';
import SidebarMenu from '@/components/molecules/sidebar/sidebar-menu';
import Modal from '@/components/molecules/modal/modal';

const PageLayout = ({children,page,toggleTitles,dataContent,setDataContent,modal,toggleModal}:{children:React.ReactNode,page:string,toggleTitles:[string,string],dataContent:boolean,setDataContent:Function,modal:boolean,toggleModal:Function}) => {
	
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<>
			<Modal state={modal} toggleModal={toggleModal} />

			<SidebarMenu toggleMenu={toggleMenu}/> 
			<div className={[styles.page_layout, page===resumenW && styles.page_layout_bgColor].c()}>
					<div className={styles.wrapper}>
						<Navbar title={page} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
						<DoubleButton titles={toggleTitles} dataContent={dataContent} setDataContent={setDataContent} />
						{children}				
					</div>						
			</div>
		</>
	)
}
export default PageLayout