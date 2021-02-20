import instance from '../utils/request'
// 验证码
export function code(data) {
    instance.request({
        method: 'post',
        url: '/getSms/',
        data: data
    })
}