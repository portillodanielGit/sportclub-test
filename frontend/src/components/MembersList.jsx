import {useContext} from 'react';
import {ContentTable} from './ContentTable';
import {HeaderTable} from './HeaderTable';
import {MemberContext} from '../context/MemberContext';

/**
 * Component to create a list of members
 * @function MembersList
 */
export const MembersList = () => {
	const {handleGbaChange, resetFilter, members, loading, filteredMembers, filterMembersByDate, handleOnChangeStartDate, handleOnChangeEndDate} =
		useContext(MemberContext);
	const columns = ['nombre', 'apellido', 'dni', 'fecha_de_nacimiento', 'gba'];
	return (
		<>
			{loading ? (
				'Loading...'
			) : (
				<div>
					<div className="grid grid-cols-8 gap-4 text-white bg-slate-950 text-center p-5">
						<div className=" text-right mr-4">Fecha de inicio</div>
						<div>
							<input className=" max-w-md text-black  rounded-lg block w-full mb-3 text-center" type="date" onChange={handleOnChangeStartDate} />
						</div>

						<div className="text-right mr-4">Fecha final</div>
						<div>
							<input className="text-black rounded-lg block w-full mb-3 text-center" type="date" onChange={handleOnChangeEndDate} />
						</div>
						<div>
							<button className="bg-[#ffd300] text-black rounded pd-10 w-full" onClick={filterMembersByDate}>
								Buscar por fecha
							</button>
						</div>
						<div>
							<button className="bg-[#ffd300] text-black rounded pd-10 w-full" onClick={resetFilter}>
								Resetear filtro
							</button>
						</div>
						<div className="text-right">Filtrar por GBA</div>
						<div>
							<select onChange={handleGbaChange} className="text-black rounded-lg">
								<option value="all">Todos</option>
								<option value={true}>Miembros en GBA</option>
								<option value={false}>Miembros Fuera GBA</option>
							</select>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-3">
						<table className="users-table">
							<HeaderTable columns={columns} />
							{filteredMembers.length ? (
								<>
									<ContentTable entries={filteredMembers} columns={columns} />
								</>
							) : (
								<>
									<ContentTable entries={members} columns={columns} />
								</>
							)}
						</table>
					</div>
				</div>
			)}
		</>
	);
};
