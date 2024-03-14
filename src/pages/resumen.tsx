import PageLayout from '@/components/templates/PageLayout/PageLayout'
import { resumenW } from '@/constants/local-text'
import { useState } from 'react'

const toggleTitles:[string,string]=['Mensual','Anual']

const resumen = () => {
	const [dataContent, setDataContent] = useState(true)
	return (
		<PageLayout page={resumenW} toggleTitles={toggleTitles} dataContent={dataContent} setDataContent={setDataContent}>
			<p>Resumen</p>
		</PageLayout>
	)
}

export default resumen