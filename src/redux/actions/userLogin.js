import userApi from '../../api/userApi';
import { loginProcess, loginSuccess, loginFail } from '../loginSlice';
import { setToken } from '../../utils/localStorageHandle';

export const userLogin = (data) => (dispatch) => {
    dispatch(loginProcess());

    userApi.login(data)
        .then(res => {
            // const resp = res.data;
            console.log('response:', res);
            dispatch(loginSuccess(res));
            setToken(res.token);
            // setTokenType(resp.token_type);
            window.location = '/';
        })
        .catch(err => {
            console.log(err);
            dispatch(loginFail('Tài khoản hoặc mật khẩu không chính xác'));
        });
};
