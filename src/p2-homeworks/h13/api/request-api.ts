import axios from "axios"

export const requestApi = {
    createRequest (success:boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success})
    }
}