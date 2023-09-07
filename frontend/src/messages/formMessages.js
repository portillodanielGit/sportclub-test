import {toast} from 'react-hot-toast';

/**
 * Send a success message using a string as a parameter
 * @function ContentTable
 * @param {String} message
 */
export const success = (message) => {
	toast.success(message, {
		position: 'top-center',
		style: {
			background: '#101010',
			color: '#fff',
		},
	});
};

/**
 * Send an error message using a string as a parameter
 * @function error
 * @param {String} message
 */
export const error = (message) => {
	toast.error(message, {
		position: 'top-center',
		style: {
			background: '#101010',
			color: '#fff',
		},
	});
};
