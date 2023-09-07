import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

/**
 * Component of the table to create the Content/Body
 * @function ContentTable
 * @param {Array} columns
 * @param {Array} entries
 */
export const ContentTable = ({entries, columns}) => {
	const navigate = useNavigate();
	return (
		<tbody>
			{entries.map((entry) => (
				<tr key={entry.id} className="sportclub-td" onClick={() => navigate(`/members/${entry.id}`)}>
					{columns.map((column) => (
						<td key={column} className="text-center">
							{typeof entry[column] == 'boolean' ? <input type="checkbox" checked={entry[column]} readOnly /> : entry[column]}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

ContentTable.propTypes = {
	columns: PropTypes.array,
	entries: PropTypes.array,
};
