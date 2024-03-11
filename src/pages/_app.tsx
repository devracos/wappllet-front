import { AppProps } from 'next/app'
import React from 'react'
import PageLayout from '@/components/templates/PageLayout/PageLayout'

import {Montserrat_Alternates, Playpen_Sans, Comfortaa } from 'next/font/google';

import '@/utils/c-util'

import '../styles/globals.scss'

const monserratAlt=Montserrat_Alternates({
	weight:['500','600','700'],
	style:['normal'],
	subsets:['latin'],
	variable: "--font-monserratAlt",
})
const playpenSans=Playpen_Sans({
	weight:['600'],
	style:['normal'],
	subsets:['latin'],
	variable: "--font-playpenSans",
})
const comfortaa=Comfortaa({
	weight:['500','700'],
	style:['normal'],
	subsets:['latin'],
	variable: "--font-comfortaa",
})

const App = ({Component}:AppProps) => {
	return (
		<div className={`${monserratAlt.variable} ${playpenSans.variable} ${comfortaa.variable}`} >
			<Component />
		</div>
	)
}

export default App