import React from 'react'
import styles from '@/styles/pages/index.module.scss';
import styleList from './item-list.module.scss';

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const ItemList = ({titulo,cantidad,categoria,fecha,descripcion}:any) => {
	return (
		<div style={{margin:'10px 0'}} className={`${styleList.item_list} ${styles.border_box}`}>
			<p className={styleList.item_list_1}>
				<MdOutlineCheckBoxOutlineBlank size={'1.5em'} />
			</p>
			<p className={styleList.item_list_2}>{cantidad}</p>
			<p className={styleList.item_list_3}>{titulo}</p>
			<p className={styleList.item_list_4}>{descripcion}</p>
			<div className={styleList.item_list_5}> 
				<p className={styleList.item_categoria}>{categoria}</p>
				<p className={styleList.item_fecha}>{fecha}</p>
			</div>
		</div>		
	)
}

export default ItemList