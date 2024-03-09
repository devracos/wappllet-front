import BurgerMenu from '@/components/atoms/burger-menu/burger-menu';
import styles from './navbar.module.scss'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import arrwosImg from '@/assets/images/arrows.png'
import { resumenW, transaccionesW } from '@/constants/local-text';
import DoubleArrow from '@/assets/svg/double-arrow';
import { color_dark, color_white } from '@/constants/color';

const Navbar = ({title}) => {
	const router=useRouter();
	const isResumen=title===resumenW;
	const redirectFn=()=>{
		if(isResumen){
			return router.push('/'+transaccionesW)
		}else{
			return router.push('/'+resumenW)
		}		
	}
	return (
		<div className={styles.navbar}>
			<div>
				<h3 className={styles.navbar_title} onClick={redirectFn}>{title}</h3>							
				<div>
					<DoubleArrow color={ isResumen ? color_white : color_dark} />
				</div>
			</div>
			<BurgerMenu />
		</div>	
	)
}

export default Navbar