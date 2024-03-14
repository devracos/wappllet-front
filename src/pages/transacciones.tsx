import React, { useState } from 'react'
import PageLayout from '@/components/templates/PageLayout/PageLayout'
import SearchInput from '@/components/atoms/search-input/search-input'
import { transaccionesW } from '@/constants/local-text'

import ItemsList from '@/components/organisms/items-lsit.tsx/items-list';

import stylesT from '@/styles/pages/transacciones.module.scss'
import SingleButton from '@/components/atoms/single-button/single-button';
import IconButton from '@/components/atoms/icon-button/icon-button';



const toggleTitles:[string,string]=['Gastos','Ingresos']

const Transacciones = () => {
	const [dataContent, setDataContent] = useState(true)
	const [modal,setToggleModal]=useState(false)
	return (
		<PageLayout modal={modal} toggleModal={()=>setToggleModal(false)} page={transaccionesW} toggleTitles={toggleTitles} dataContent={dataContent} setDataContent={setDataContent} >
			<div className={stylesT.wrapper}>
				<div className={stylesT.content_transacciones}>
					<div>
						<SearchInput />
						<ItemsList dataContent={dataContent} />		
					</div>
					<div className={stylesT.content_footer}>
						<div className={stylesT.content_footer_summary}>
							<p>Previsto: 340.000</p>
							<p><span>Real:</span> 210.000</p>
						</div>
						<div className={stylesT.content_footer_buttons}>
							<IconButton onFunction={()=>setToggleModal(true)} />
							<SingleButton text='Noviembre' type='normal' onClick={()=>{return}}/>
						</div>
					</div>
				</div>			
			</div>
		</PageLayout>
	)
}

export default Transacciones