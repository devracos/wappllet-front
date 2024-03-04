import React from 'react'
import ItemList from '../molecules/item-list/item-list'

const TestList=[
	{
		id:1,
		check:true,
		cantidad:15000,
		titulo:'Cine Bob Marley',
		categoria:'Comida',
		descripcion:'Gasto del mes necesario',
		fecha:'03/12/2023'
	},
	{
		id:2,
		check:false,
		cantidad:28000,
		titulo:'Tenis Adidas',
		categoria:'Ropa',
		descripcion:'Gasto del mes necesario',
		fecha:'03/12/2023'
	},
	{
		id:3,
		check:false,
		cantidad:54000,
		titulo:'Arriendo',
		categoria:'Casa',
		descripcion:'Gasto del mes necesario',
		fecha:'03/12/2023'
	},
	{
		id:4,
		check:false,
		cantidad:38000,
		titulo:'Netflix',
		categoria:'plataforma',
		descripcion:'Gasto del mes necesario',
		fecha:'03/12/2023'
	},
]

const ItemsList = () => (
	TestList.map((item)=>(
			<ItemList key={item.id} {...item} />
		))	
	)

export default ItemsList