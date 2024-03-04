import styles from './sidebar.module.scss'
import logo from '@/assets/images/Wapplet.png'

const SidebarMenu = () => {
	
	return (
		<div className={styles.sidebar}>
			<img className={styles.logo_sidebar} src={logo.src} alt="logo" />
			<ul className={styles.ul_style}>
				<li>Gastos</li>
				<li>Ingresos</li>
			</ul>
		</div>
	)
}

export default SidebarMenu