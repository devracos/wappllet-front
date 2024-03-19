import Button from '@/components/atoms/buttons/button'
import styles from './sidebar.module.scss'
import Image from 'next/image'
import {pp,bills_1,bills_2,bills_3,bills_4,} from './sidebar-images'

const SidebarMenu = ({toggleMenu}:{toggleMenu:boolean}) => {

	return (
		<div className={`${styles.sidebar} ${toggleMenu? styles.active:''}`}>
			<Image className={styles.bill1} src={bills_1} alt="Bills 1" width={200}/>
			<Image className={styles.bill2} src={bills_2} alt="Bills 2" width={200}/>
			<Image className={styles.bill3} src={bills_3} alt="Bills 3" width={200}/>
			<header className={styles.header}>
				<h1 className={styles.h1}>Wapplet</h1>
			</header>
			<main className={styles.main}>
				<Image className={styles.pp} src={pp} alt="Profile Image" width={180}/>
				<h2 className={styles.h2}>Hola, bienvenido</h2>
				<p className={styles.p}>Accede o regístrate aquí para asegurar la sincronización de tu información en múltiples dispositivos y mantener tus datos siempre disponibles.</p>
				<Button text="Iniciar Sesión" color="normal"/>
				<div className={styles.social}>
					<a className={styles.a}href="https://www.facebook.com/">Facebook</a>
					<a className={styles.a}href="https://www.facebook.com/">TikTok</a>
					<a className={styles.a}href="https://www.facebook.com/">Instagram</a>
					<p className={styles.version}>@devracos v1.1.0</p>
				</div>  
			</main>
		</div>
	)
}

export default SidebarMenu