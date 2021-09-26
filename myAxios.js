import axios from 'axios'

const myAxios=axios.create({
    baseURL: 'https://api.fitrockr.com',
    headers:{
        'X-API-Key': '141d352f-4bd8-48e8-88c0-d505b1ec0236',
        'X-Tenant': 'hackzurich'
    }
})
export default myAxios;