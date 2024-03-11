import React from 'react'
import stylesG from '@/styles/pages/index.module.scss';
import styleList from './item-list.module.scss';

import emoji from '@/assets/images/emojiIcon.png'

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Image from 'next/image';
import Checkbox from '@/components/atoms/checkbox/checkbox';

const ItemList = ({date,description,price,check}:{date:string,description:string,price:number,check:boolean}) => {
	
	return (
		<div style={{margin:'10px 0'}} className={`${styleList.item_list} ${stylesG.border_box}`}>
			<div style={{backgroundColor:'#14A9FD'}} className={styleList.item_list_emoji}>
				<Image src={emoji} width={26} alt='emoji' />
			</div>
			<div className={styleList.item_list_description_date}> 
				<p className={styleList.item_list_description}>{description}</p>
				<p className={styleList.item_list_date}>{date}</p>
			</div> 
			<p className={styleList.item_list_value}>${price}</p>
			<div className={styleList.item_list_checkbox}>
				<Checkbox check={check} />
			</div>		
		</div>		
	)
}

export default ItemList