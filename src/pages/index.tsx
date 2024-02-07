import React,{useState} from 'react'

enum EView{
	TRANS,
	SUMM,
}

const index = () => {

	const [view	, setView] = useState(EView.TRANS)
	
	return (
		<>
			{/* <h1 className='font'>Hola Finanzas.net {view===EView.TRANS? 'Transacciones':'Resumen'}</h1>
			<button onClick={()=>setView(EView.TRANS)}>Transaction</button>
			<button onClick={()=>setView(EView.SUMM)}>Resumen</button> */}
		</>
	)
}

export default index