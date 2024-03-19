import React from 'react'
import ItemList from '../../molecules/item-list/item-list'
import { useWapplletStore } from '@/store/userStore'

const ItemsList = ({dataContent}:{dataContent:boolean}) => {
	
	let incomeList;

	if (dataContent){
		incomeList=useWapplletStore(state=>state.data.incomes);		
	}else{
		incomeList=useWapplletStore(state=>state.data.bills);		
	}

	return (
		incomeList?.map((item)=>(
				<ItemList key={item.id} {...item} />
			))	
	)
}

export default ItemsList