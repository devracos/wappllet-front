import BurgerMenu from '@/components/atoms/burger-menu/burger-menu';
import styles from './navbar.module.scss'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import arrwosImg from '@/assets/images/arrows.png'

const Navbar = ({title}) => {
	const router=useRouter();

	const redirectFn=()=>{
		if(title==='resumen'){
			return router.push('/transacciones')
		}else{
			return router.push('/resumen')
		}		
	}
	return (
		<div className={styles.navbar}>
			<div className={styles.test}>
				<h3 className={styles.title_navbar} onClick={redirectFn}>{title}</h3>							
				<Image src={arrwosImg} width={17} alt='arrowIcons'/> 
			</div>			
			<BurgerMenu />
		</div>		
	)
}

export default Navbar