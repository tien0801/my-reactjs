export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const setTokenType = (token_type) => {
    localStorage.setItem('token_type', token_type);
};

export const getToken = (token) => {
    return localStorage.getItem('token');
};