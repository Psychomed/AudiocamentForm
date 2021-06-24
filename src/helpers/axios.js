import NativeAxios from 'axios'

function Axios() {
}

Axios.prototype = NativeAxios;
Axios.prototype.jwt = null;

Axios.prototype.getJwt = function () {

    return this.jwt;
};

Axios.prototype.setBaseURL = function () {

    this.defaults.baseURL = process.env.REACT_APP_API_URL;
};

Axios.prototype.setJwtByLocalStorage = function () {

    let token = localStorage.getItem('t');

    if (token) {
        this.setJwt(token);
    }
};

Axios.prototype.setJwt = function (jwt) {

    this.jwt = jwt;
    this.defaults.headers.common['Authorization'] = 'Bearer ' + this.getJwt();
};

Axios.prototype.destroyJwt = function () {

    this.setJwt(null);
};

let nativeAxiosPost = Axios.prototype.post;
Axios.prototype.post = function (url, params) {

    return new Promise((resolve, reject) => {

        nativeAxiosPost(url, params)
            .then((res) => {
                let data = res.data;
                if (data.user && data.user.jwt) {
                    this.setJwt(data.user.jwt)
                }
                resolve(data);
            })
            .catch((e) => {

                reject(e);
            });
    });
};

let nativeAxiosGet = Axios.prototype.get;
Axios.prototype.get = function (url, params) {

    return new Promise((resolve, reject) => {

        nativeAxiosGet(url, params)
            .then((res) => {

                let data = res.data;
                if (data.user && data.user.jwt) {
                    this.setJwt(data.user.jwt)
                }
                resolve(data);
            })
            .catch((e) => {

                reject(e);
            });
    });
};

let nativeAxiosPut = Axios.prototype.put;
Axios.prototype.put = function (url, params, config) {

    return new Promise((resolve, reject) => {

        nativeAxiosPut(url, params, config)
            .then((res) => {

                let data = res.data;
                if (data.user && data.user.jwt) {
                    this.setJwt(data.user.jwt)
                }
                resolve(data);
            })
            .catch((e) => {

                reject(e);
            });
    });
};

let initAxios = function () {

    let axios = new Axios();
    axios.setBaseURL();
    axios.setJwtByLocalStorage();

    return axios;
};

export default initAxios();

// export function setupAxios(axios, store) {
//     axios.interceptors.request.use(
//         (config) => {
//             store.dispatch(loaderActions.showTopLinear());
//             config.headers['Accept-Language'] = i18next.language;
//             return config;
//         },
//         (err) => {
//             store.dispatch(loaderActions.hideTopLinear());
//             return Promise.reject(err);
//         }
//     );
//     axios.interceptors.response.use(
//         (config) => {
//             store.dispatch(loaderActions.hideTopLinear());
//
//             return config;
//         },
//         (err) => {
//             store.dispatch(loaderActions.hideTopLinear());
//             return Promise.reject(err);
//         }
//     );
// }
