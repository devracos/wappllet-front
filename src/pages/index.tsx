import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


const index = () => {
	const router=useRouter();	
	useEffect(() => {
		router.push('/transacciones')
	}, [])
}

export default index