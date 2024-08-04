<template>
    <div>
        这个是首页，
        <nuxt-link to="/test">跳转test页</nuxt-link>
        <div>{{ status }}</div>
        <div></div>
        <div>
            {{ data }}
        </div>
    </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const { data, error, status, refresh } = await useFetch('/index', {
    // key，可以用来做缓存
    key: 'indexData',
    baseURL: 'http://demonuxtapi.dishait.cn/pc',
    headers: {
        appid: 'bd9d01ecc75dbbaaefce1'
    },
    // 相当于响应拦截器
    transform: (res) => {
        return res.data
    },
    // 是否开启缓存, initialCache，这个属性好像是旧版的，新版的看getCachedData
    // 使用了，不会重复请求
    // getCachedData: key => {
    //     console.log('key---', key);
    //     return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    // },
    // 懒加载, 即进入路由页面后，再进行数据请求，常规则是请求数据完成，再进入路由页面
    // lazy: true,
})
// 服务端报错
if (import.meta.server && error.value) {
    console.log('服务端报错了');
    throw createError({
        statusCode: error.value.statusCode,
        message: error.value.data.data
    })
}
</script>