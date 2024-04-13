import http from "./httpservice";

import config from "./config.json"

const FormData= require('form-data')

const formData=new FormData();

export const loginUser = users => {

    formData.append("email",users.email)
    formData.append("password",users.password)
    return http.post(`${config.baseUrl}/users/login`,formData);
};
export const forgetPassword = forgetPass => {

    formData.append("email",forgetPass.email)
    return http.post(`${config.baseUrl}/users/forget-password`,formData);
};
