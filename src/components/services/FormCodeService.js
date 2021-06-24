import axios from "../../helpers/axios";


const getPrefixes = () => {
    return axios.get('getPrefixes');
}

const getResselers = () => {
    return axios.get('getResselers');
}

const postCode = (data) => {
    return axios.post('postCode', {...data});
}


export default {
    getPrefixes,
    getResselers,
    postCode,
}