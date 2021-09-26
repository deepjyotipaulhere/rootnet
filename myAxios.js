import axios from 'axios'

const myAxios=axios.create({
    baseURL: 'https://api.fitrockr.com',
    headers:{
        'X-API-Key': 'xxxx',
        'X-Tenant': 'hackzurich'
    }
})
export default myAxios;
