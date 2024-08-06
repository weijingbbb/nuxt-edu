export function useSearchListApi(query){
    return useHttpGet("searchList",()=>{
        let q = useQueryToString(query())
        return `/search${q}`
    },{
        lazy:true
    })
}

// 获取可用优惠券列表
export function useCouponListApi(){
    return useHttpGet("CouponList","/coupon/list", {
        $: true
    })
}