<template>
    <div>
        <template v-if="status === 'pending'">
            加载中...
        </template>
        <template v-else-if="error">
            错误提示： {{ error?.data?.data }}
        </template>
        <template v-else>
            <template v-for="(item, index) in data" :key="index">
                <Banner :data="item.data" v-if="item.type == 'swiper'" />
                <ImageNav :data="item.data" v-else-if="item.type == 'icons'" />
                <ImageAd :data="item.data" v-else-if="item.type == 'imageAd'" />
                <ListCard :title="item.title" :data="item.data" v-else-if="item.type == 'list'" />
                <ListCard :title="item.title" :type="item.listType" :data="item.data" v-else-if="item.type == 'promotion'" />
            </template>
        </template>

    </div>
</template>

<script setup>
useHead({
    title: '首页'
})

const nuxtApp = useNuxtApp()
const { data, error, status, refresh } = await useFetch('/index', {
    // key，可以用来做缓存
    key: 'indexData',
    baseURL: 'http://demonuxtapi.dishait.cn/pc',
    headers: {
        appid: 'bd9d01ecc75dbbaaefce'
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