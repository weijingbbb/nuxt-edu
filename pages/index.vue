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
const { data, error, status, refresh } = await useIndexDataApi()
// 服务端报错
if (import.meta.server && error.value) {
    console.log('服务端报错了');
    throw createError({
        statusCode: error.value.statusCode,
        message: error.value.data.data
    })
}
</script>