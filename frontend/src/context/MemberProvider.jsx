import {useEffect, useState} from 'react';
import {getAllMembers} from '../api/members.api';
import PropTypes from 'prop-types';
import {MemberContext} from './MemberContext';
import {error} from '../messages/formMessages';

/**
 * Context Provider of the app
 * @function MemberProvider
 */

export const MemberProvider = ({children}) => {
	const [members, setMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredMembers, setfilteredMembers] = useState([]);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	/**
	 * Handle the onchange event for the start sate input and set a new state on startDate
	 * @function handleOnChangeStartDate
	 * @param {Event} event
	 */
	const handleOnChangeStartDate = (event) => {
		setStartDate(event.target.value);
	};

	/**
	 * Handle the onchange event for the EndDate input and set a new state on endDate
	 * @function handleOnChangeEndDate
	 * @param {Event} event
	 */
	const handleOnChangeEndDate = (event) => {
		setEndDate(event.target.value);
	};

	/**
	 * Get all members and set them on the members state, also change the loading state
	 * @function getMembers
	 */
	const getMembers = async () => {
		const res = await getAllMembers();
		setMembers(res.data);
		setLoading(false);
	};

	useEffect(() => {
		getMembers();
	}, [members]);

	/**
	 * Handle and filter members by date
	 * @function filterMembersByDate
	 * @return {Array}
	 */
	const filterMembersByDate = () => {
		const startDateArr = startDate.split('-');
		const endDateArr = endDate.split('-');
		const sd = new Date(startDateArr[0], startDateArr[1] - 1, startDateArr[2]);
		const ed = new Date(endDateArr[0], endDateArr[1] - 1, endDateArr[2]);
		const result = members.filter((member) => {
			const birthDate = member.fecha_de_nacimiento.split('-');
			const time = new Date(birthDate[0], birthDate[1] - 1, birthDate[2]);

			return sd <= time && time < ed;
		});
		if (result.length == 0) {
			error('No se encontraron miembros en las fechas indicadas');

			setfilteredMembers([]);
		} else {
			setfilteredMembers(result);
		}
	};

	/**
	 * Handle and filter members by gba
	 * @function handleGbaChange
	 * @param {Array} columns
	 * @param {Array} entries
	 */
	const handleGbaChange = (event) => {
		const gbaFilterValue = event.target.value;
		const result = members.filter((member) => {
			return member.gba.toString() === gbaFilterValue;
		});
		if (result.length == 0) {
			setfilteredMembers([]);
		} else {
			setfilteredMembers(result);
		}
	};

	/**
	 * Reset the members state
	 * @function resetFilter
	 * @param {Array} columns
	 * @param {Array} entries
	 */
	const resetFilter = () => {
		setfilteredMembers([]);
	};

	return (
		<MemberContext.Provider
			value={{
				getMembers,
				resetFilter,
				members,
				filteredMembers,
				loading,
				handleGbaChange,
				filterMembersByDate,
				handleOnChangeStartDate,
				handleOnChangeEndDate,
			}}
		>
			{children}
		</MemberContext.Provider>
	);
};
MemberProvider.propTypes = {
	children: PropTypes.object,
};
