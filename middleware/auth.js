export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie("token")
    const user = useUser()
    // 未绑定手机号
    const phone = user.value?.phone

    // 这个校验手机号绑定的逻辑太复杂，非常非常非常麻烦，不要搞

    // 如果已登录，但未绑定手机号，则需要跳转
    // if (token.value  && to.path !== '/bindphone') {
    //     // console.log('已登录，但未绑定手机号，则需要跳转', to.fullPath, phone);
    //     console.log('是否是客户端：',import.meta.client);
    //     if (import.meta.client && !phone) {
    //         const { message } = createDiscreteApi(["message"])
    //         message.error("请先绑定手机号")
    //         return navigateTo("/bindphone?from=" + from.fullPath)
    //     }
        
    // }


    // 未登录
    if(!token.value){
        if(import.meta.client){
            const { message } = createDiscreteApi(["message"])
            message.error("请先登录") 
        }
        return navigateTo("/login?from="+from.fullPath)
    }
    if(!phone && route.name != 'bindphone'){
        if(import.meta.client){
            const { message } = createDiscreteApi(["message"])
            message.error("请先绑定手机号") 
        }
        return navigateTo("/bindphone?from="+from.fullPath)
    }
})