import PageLayout from '@/components/templates/PageLayout/PageLayout'
import { resumenW } from '@/constants/local-text'

const toggleTitles:[string,string]=['Mensual','Anual']

const resumen = () => {
	return (
		<PageLayout page={resumenW} toggleTitles={toggleTitles}>
			<p>Resumen</p>
		</PageLayout>
	)
}

export default resumen