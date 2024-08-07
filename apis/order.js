// 获取产品信息
export function useGetGoodsInfoApi(id,type = "course"){
    return useHttpGet("GetGoodsInfo",`/goods/read?type=${type}&id=${id}`,{
        lazy:true
    })
}

// 获取可用优惠券
export function useGetUseableUserCouponApi(id,type = "course"){
    return useHttpGet("GetUseableUserCoupon",`/user_coupon?goods_id=${id}&type=${type}&page=1`)
}

// 创建订单
export function useCreateOrderApi(body){
    return useHttpPost("CreateOrder",`/order/save`,{
        body
    })
}

// 微信pc支付
export function useWxpayApi(no){
    return useHttpPost("wxpay",`/order/wxpay`,{
        body:{
            no
        }
    })
}

// 查询订单是否支付成功
export function useGetWxpayStatusApi(no){
    return useHttpPost("getWxpayStatus",`/order/iswxpay`,{
        body:{
            no
        },
        $:true
    })
}