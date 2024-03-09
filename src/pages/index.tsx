import { transaccionesW } from '@/constants/local-text';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


const index = () => {
	const router=useRouter();	
	useEffect(() => {
		router.push('/'+transaccionesW)
	}, [])
}

export default index