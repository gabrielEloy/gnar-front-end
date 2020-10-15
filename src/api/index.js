import axios from 'axios';

export const getById  = async (id) => 
    await await axios.get(`${process.env.REACT_APP_API}/uploads/${id}`)