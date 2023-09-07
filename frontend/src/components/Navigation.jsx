import {Link} from 'react-router-dom';

/**
 * Navigation Component
 * @function Navigation
 */
export const Navigation = () => {
	return (
		<div className="flex justify-between py-3">
			<Link to="/members">
				<h1 className="font-bold text-3x1 mb-4 text-white">SportClub</h1>
			</Link>
			<button className="sportclub-button  rounded-lg ">
				<Link to="/member-create">Create Member</Link>
			</button>
		</div>
	);
};
