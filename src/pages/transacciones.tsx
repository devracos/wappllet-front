import React from 'react'
import PageLayout from '@/components/templates/PageLayout/PageLayout'
import SearchInput from '@/components/atoms/search-input/search-input'
import { transaccionesW } from '@/constants/local-text'

import ItemsList from '@/components/organisms/items-lsit.tsx/items-list';

import stylesT from '@/styles/pages/transacciones.module.scss'

const toggleTitles:[string,string]=['Gastos','Ingresos']

const Transacciones = () => {
	return (
		<PageLayout page={transaccionesW} toggleTitles={toggleTitles}>
			<div className={stylesT.content_transacciones}>
				<div>
					<SearchInput />
					<ItemsList />		
				</div>
				<div>
					
				</div>
			</div>			
		</PageLayout>
	)
}

export default Transacciones