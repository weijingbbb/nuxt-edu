const fetchConfig = {
    baseURL:"http://demonuxtapi.dishait.cn/pc",
    headers:{
        appid:"bd9d01ecc75dbbaaefce"
    },
}

function useGetFetchOptions(options = {}){
    options.baseURL = options.baseURL ?? fetchConfig.baseURL
    options.headers = options.headers ?? {
        appid:fetchConfig.headers.appid
    }
    options.initialCache = options.initialCache ?? false
    options.lazy = options.lazy ?? false

    // 用户登录，默认传token

    return options
}

export async function useHttp(key,url,options = {}){
    options = useGetFetchOptions(options)
    options.key = key

    let res = await useFetch(url,{
        ...options,
        // 相当于响应拦截器，Nuxt3中将使用onRequest进行制作拦截器，transform只用作数据转换使用
        transform:(res)=>{
            return res.data
        },
    })

    return res
}

// GET请求
export function useHttpGet(key,url,options = {}){
    options.method = "GET"
    return useHttp(key,url,options)
}

// POST请求
export function useHttpPost(key,url,options = {}){
    options.method = "POST"
    return useHttp(key,url,options)
}