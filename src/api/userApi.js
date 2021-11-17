import axiosClient from "./axiosClient";

const userApi = {
    // register(data) {
    //     const url = `auth/users`;
    //     return axiosClient.post(url, data);
    // },
    login(data) {
        const url = `auth/login`;
        return axiosClient.post(url, data);
    },
    getUser(token) {
        const url = 'users/me';
        return axiosClient.get(url, {
            headers: {
                Authorization: 'Bearer' + token,
            },
        });
    }
};

export default userApi;