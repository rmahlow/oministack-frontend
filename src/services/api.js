import axios from 'axios'

const api = axios.create({
    baseURL:'https://oministack-backend-rmahlow.herokuapp.com/'
})

export default api;