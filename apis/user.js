// import { fetchConfig } from '../composable/useHttp'

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

// 获取购买记录
export function useOrderListApi(page){
    return useHttpGet("OrderList",`/order/list?page=${page}`,{
        lazy:true
    })
}

// 我的考试记录
export function useUserTestApi(page){
    return useHttpGet("UserTest",`/user_test/list?page=${page}`,{
        lazy:true
    })
}

// 获取优惠券记录
export function useUserCouponApi(page){
    return useHttpGet("UserCoupon",`/user_coupon?page=${page}`,{
        lazy:true
    })
}

// 我的收藏列表
export function useMyFavaListApi(page){
    return useHttpGet("MyFavaList",`/user_fava?page=${page}`,{
        lazy:true
    })
}

// 取消收藏
export function useUncollectApi(body){
    return useHttpPost("Uncollect","/uncollect",{
        body
    })
}

// 修改资料
export function useUpdateUserInfoApi(body){
    return useHttpPost("updateUserInfo","/update_info",{
        body,
        $: true
    })
}

// 上传图片
export function useUploadConfig(){
    const token = useCookie("token")
    return {
        action: fetchConfig.baseURL + "/upload",
        headers:{
            appid:fetchConfig.headers.appid,
            token:token.value
        }
    }
}