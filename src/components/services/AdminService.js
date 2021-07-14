import axios from "axios";


function signInCredentials(email, password) {

    return new Promise((resolve, reject) => {

        axios.post('/signIn', {email, password})
            .then(({user, token, refreshToken}) => {
                axios.setJwt(token);
                localStorage.setItem('userAdmin', user);
                resolve({user, token, refreshToken});
            })
            .catch((e) => {
                reject(e.response.data);
            });
    });
}

function getCodes() {
    return axios.get('/admin/getCodes');
}

function resetMusic(musicId, accessCodeId) {
    return new Promise(((resolve, reject) => {
        axios.post('/admin/resetMusic', {musicId, accessCodeId})
            .then((result) => {
                alert('Done !')
                resolve(result);
            })
    }))
}

function resetCode(accessCodeId) {

    return new Promise((resolve, reject) => {
        axios.post('/admin/resetCode', {accessCodeId})
            .then((result) => {
                console.log(result)
            })
    })

}

export default {
    signInCredentials,
    getCodes,
    resetMusic,
    resetCode,
}