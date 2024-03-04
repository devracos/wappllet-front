import React from 'react'
import styles from './navbar.module.scss'

import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
	return (
		<>
			<div className={styles.navbar}>
						<h3 className={styles.title_navbar}>Dashboard </h3>							
						<RxHamburgerMenu />
			</div>
		</>
	)
}

export default Navbar