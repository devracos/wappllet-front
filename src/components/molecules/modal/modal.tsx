import React from 'react'
import styleL from './modal.module.scss'
import CloseIcon from '@/assets/svg/close-icon';
import SingleButton from '@/components/atoms/single-button/single-button';

const Modal = ({state,toggleModal}:{state:Boolean,toggleModal:Function}) => {
	if(!state) return null;
	return (
		<div onClick={()=>toggleModal(false)} className={`${styleL.overlay}`}>
			<div onClick={(e)=>e.stopPropagation()} className={styleL.modal_container}>
				<span className={styleL.close_icon} onClick={()=>toggleModal(false)}>
					<CloseIcon />
				</span>
				<p className={styleL.modal_container_title}>Nuevo Ingreso</p>
				<form className={styleL.modal_container_form} action="">
					<label className={styleL.modal_container_input}>
						<p>Valor <span>*</span> </p>
						<input type="text" name='valor' placeholder='150.000' />
					</label>
					<label className={styleL.modal_container_input}>
						<p>Fecha <span>*</span> </p>
						<input type="text" name='valor' placeholder='dd/mm/yyyy' />
					</label>
					<label className={styleL.modal_container_input}>
						<p>Frecuencia </p>
						<input type="text" name='valor' placeholder='seleccionar' />
					</label>
					<label className={styleL.modal_container_input}>
						<p>Categoria </p>
						<input type="text" name='valor' placeholder='seleccionar' />
					</label>
					<label className={styleL.modal_container_textarea}>
						<p>Descripción  </p>
						<textarea name='valor' placeholder='descripción...'/>
					</label>
				</form>
				<div className={styleL.modal_container_buttons}>
					<SingleButton text='Guardar' type='green' onClick={()=>{return}} />
					<SingleButton text='Cancelar' type='red' onClick={()=>toggleModal(false)} />
				</div>
			</div>
		</div>
	)
}

export default Modal