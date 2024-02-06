import React,{useState} from 'react'

enum EView{
	TRANS,
	SUMM,
}

const index = () => {

	const [view	, setView] = useState(EView.TRANS)
	
	return (
		<>
			<div>Hola Finanzas.net {view===EView.TRANS? 'Transacciones':'Resumen'}</div>
			<button onClick={()=>setView(EView.TRANS)}>Transaction</button>
			<button onClick={()=>setView(EView.SUMM)}>Resumen</button>
		</>
	)
}

export default index