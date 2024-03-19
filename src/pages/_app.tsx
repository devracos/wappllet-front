import { AppProps } from 'next/app'
import React from 'react'
import PageLayout from '@/components/templates/PageLayout/PageLayout'

import {Montserrat_Alternates, Comfortaa } from 'next/font/google';

import '@/utils/c-util'

import '../styles/globals.scss'



const monserratAlt=Montserrat_Alternates({
	weight:['500','600','700','900'],
	style:['normal'],
	subsets:['latin'],
	variable: "--font-monserratAlt",
})

const comfortaa=Comfortaa({
	weight:['500','700'],
	style:['normal'],
	subsets:['latin'],
	variable: "--font-comfortaa",
})

const App = ({Component}:AppProps) => {
	return (
		<div className={`${monserratAlt.variable} ${comfortaa.variable} height100`} >
			<Component />
		</div>
	)
}

export default App