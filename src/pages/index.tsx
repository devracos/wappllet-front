import PageLayout from '@/components/templates/PageLayout'
import ResumenLayout from '@/components/templates/ResumenLayout/ResumenLayout'
import TransaccionesLayout from '@/components/templates/TransaccionesLayout'
import React,{useState} from 'react'

const index = () => {

	const [page,setPage]=useState('transacciones')
	
	return (
		<PageLayout>
			{page == "transacciones" && <TransaccionesLayout />}
			{page == "resumen" && <ResumenLayout />}
		</PageLayout>	
	)
}

export default index