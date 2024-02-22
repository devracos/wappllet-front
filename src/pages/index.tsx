import PageLayout from '@/components/templates/PageLayout'
import TransaccionesLayout from '@/components/templates/TransaccionesLayout'
import React,{useState} from 'react'

const index = () => {

	const [page,setPage]=useState('transacciones')
	
	return (
		<>
			<PageLayout>
				{page == "transacciones" && <TransaccionesLayout />}
			</PageLayout>	
		</>
	)
}

export default index