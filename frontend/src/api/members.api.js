import axios from 'axios';

/**
 * BaseUrl creation.
 * @function memberApi
 */
const memberApi = axios.create({
	baseURL: 'http://localhost:8000/api/v1/miembros/',
});

export const getAllMembers = () => memberApi.get('/');
/**
 * Gets a member using the Django Rest Framework API.
 * @function getMember
 * @param {String} id
 */
export const getMember = (id) => memberApi.get(`/${id}/`);
/**
 * Create a member using the Django Rest Framework API.
 * @function createMember
 * @param {Array} member
 */
export const createMember = (member) => memberApi.post('/', member);
/**
 * Delete a member using the Django Rest Framework API.
 * @function deleteMember
 * @param {String} id the Django Rest Framework API.
 */
export const deleteMember = (id) => memberApi.delete(`/${id}`);
/**
 * Update one member using the Django Rest Framework API.
 * @function updateMember
 * @param {String} id
 * @param {Array} member
 */
export const updateMember = (id, member) => memberApi.put(`/${id}/`, member);
