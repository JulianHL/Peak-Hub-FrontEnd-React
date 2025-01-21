import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:6060/api/products'

export const listProducts = ({page, size}) => axios.get(REST_API_BASE_URL, {params:{page: page,size: size}});
export const getProduct = (id) =>axios.get(`${REST_API_BASE_URL}/${id}`)

