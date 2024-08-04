export default defineNuxtRouteMiddleware((to,from)=>{
    const { type,page } = to.params
    const { keyword } = to.query
    if(!(["course","column"].includes(type)) || isNaN(+page)){
        return abortNavigation("页面不存在")
    }

})