import axios from 'axios';

export const getById  = async (id) => 
    await await axios.get(`http://localhost:5000/uploads/${id}`)