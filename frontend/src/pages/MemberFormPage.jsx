import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {createMember, deleteMember, updateMember, getMember} from '../api/members.api';
import {useNavigate, useParams} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import {success} from '../messages/formMessages';
import {MemberContext} from '../context/MemberContext';

/**
 * Page to send use the form of the members
 * @function MemberFormPage
 */
export const MemberFormPage = () => {
	const {register, handleSubmit, formState, setValue} = useForm();
	const {resetFilter} = useContext(MemberContext);
	const navigate = useNavigate();
	const params = useParams();

	//useEffect to get one member
	useEffect(() => {
		const loadMember = async () => {
			if (params.id) {
				const res = await getMember(params.id);
				setValue('nombre', res.data.nombre);
				setValue('apellido', res.data.apellido);
				setValue('dni', res.data.dni);
				setValue('fecha_de_nacimiento', res.data.fecha_de_nacimiento);
				setValue('gba', res.data.gba);
			}
		};
		loadMember();
	}, []);

	/**
	 * onSubmit function to handle the form submission
	 * @function onSubmit
	 * @param {Array} data
	 */
	const onSubmit = async (data) => {
		if (params.id) {
			await updateMember(params.id, data);
			success('Miembro Actualizado');
		} else {
			await createMember(data);
			success('Miembro Guardado');
		}
		resetFilter();
		navigate('/members');
	};

	return (
		<div className="max-w-xl mx-auto">
			{/* Form fields */}
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className=" p-3 rounded-lg block w-full mb-3  text-black"
					type="text"
					placeholder="Nombre"
					{...register('nombre', {required: 'Este campo es requerido'})}
				/>
				<ErrorMessage errors={formState.errors} name="nombre" />
				<input
					className=" p-3 rounded-lg block w-full mb-3"
					type="text"
					placeholder="Apellido"
					{...register('apellido', {required: 'Este campo es requerido'})}
				/>
				<ErrorMessage errors={formState.errors} name="apellido" />
				<input
					className=" p-3 rounded-lg block w-full mb-3"
					type="number"
					placeholder="DNI"
					{...register('dni', {required: 'Este campo es requerido'})}
				/>
				<ErrorMessage errors={formState.errors} name="dni" />
				<input
					className=" p-3 rounded-lg block w-full mb-3"
					type="date"
					placeholder="Fecha de nacimiento"
					{...register('fecha_de_nacimiento', {required: 'Este campo es requerido'})}
				/>
				<ErrorMessage errors={formState.errors} name="fecha_de_nacimiento" />
				<div className=" p-3 rounded-lg block w-full mb-3 text-white">
					Es usted de Gran Buenos Aires?
					<input className="ml-4" type="checkbox" {...register('gba')} />
				</div>
				<button className="sportclub-button rounded-lg block w-full mt-3">Guardar</button>
			</form>
			{/* Checking if url has params */}
			{params.id && (
				<div className="flex justify-end">
					<button
						className="bg-red-500 p-3 rounded-lg block w-48 mt-3"
						onClick={async () => {
							const accepted = window.confirm('Click en ok para eliminar este miembro');
							if (accepted) {
								await deleteMember(params.id);
								resetFilter();
								navigate('/members');
								success('Miembro Eliminado');
							}
						}}
					>
						Borrar
					</button>
				</div>
			)}
		</div>
	);
};
