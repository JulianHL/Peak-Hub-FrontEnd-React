import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:6060/api/locations'

export const listLocations = ({page, size}) => axios.get(REST_API_BASE_URL, {params:{page: page,size: size}});
export const getLocation = (id) =>axios.get(`${REST_API_BASE_URL}/${id}`)

