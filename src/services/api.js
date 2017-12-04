import { stringify } from 'qs';
import request from '../utils/request';

export function fakeAccountLogin(params) {
    return request('/api/login/account', {
        method: 'POST',
        body: params,
    });
}