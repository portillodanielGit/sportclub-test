import PropTypes from 'prop-types';

/**
 * Component of the table to create the header
 * @function HeaderTable
 * @param {Array} columns
 */
export const HeaderTable = ({columns}) => {
	return (
		<thead>
			<tr className="bg-[#ffd300] text-black">
				{columns.map((column) => (
					<th key={column} className="uppercase">
						{column.split('_').join(' ')}
					</th>
				))}
			</tr>
		</thead>
	);
};

HeaderTable.propTypes = {
	columns: PropTypes.array,
};
