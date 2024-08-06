export function useLoginApi(body) {
    return useHttpPost("login", "/login", {
        body,
        $: true
    })
}

export function useGetinfoApi() {
    return useHttpGet("getinfo", "/getinfo", {
        $: true
    })
}

// 退出登录
export function useLogoutApi() {
    return useHttpPost("logout", "/logout", {
        $: true
    })
}

// 注册
export function useRegApi(body) {
    return useHttpPost("reg", "/reg", {
        body,
        $: true
    })
}

// 获取手机验证码
export function useGetCaptchaApi(phone) {
    return useHttpPost("GetCaptcha", "/get_captcha", {
        body: {
            phone
        },
        $: true
    })
}

// 绑定手机号
export function useBindPhoneApi(body) {
    return useHttpPost("bindphone", "/bind_mobile", {
        body,
        $: true
    })
}

// 忘记密码
export function useForgetApi(body) {
    return useHttpPost("forget", "/forget", {
        body,
        $: true
    })
}

// 获取学习记录
export function useUserHistoryApi(query) {
    return useHttpGet("userHistory", () => {
        let q = useQueryToString(query())
        return `/user_history/list${q}`
    }, {
        lazy: true
    })
}