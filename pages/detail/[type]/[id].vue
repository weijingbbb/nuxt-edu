<template>
    <LoadingGroup :pending="pending" :error="error">
        <section class="detail-top">
            <n-image :src="data.cover" object-fit="cover" class="image" />
            <div class="info">
                <div class="flex flex-col items-start">
                    <div class="flex items-center">
                        <span class="text-xl mr-2">{{ data.title }}</span>
                        <FavaBtn :isfava="data.isfava" :goods_id="data.id" :type="type" />
                    </div>
                    <p class="my-2 text-xs text-gray-400">{{ subTitle }}</p>
                    <div v-if="!data.isbuy">
                        <Price :value="data.price" class="text-xl" />
                        <Price :value="data.t_price" through class="ml-1 text-xs" />
                    </div>
                </div>

                <div class="mt-auto" v-if="!data.isbuy">
                    <n-button type="primary" :loading="loading" @click="buy">立即学习</n-button>
                </div>
            </div>
        </section>

        <n-grid :x-gap="20">
            <n-grid-item :span="18">
                <section class="detail-bottom">
                    <UiTab class="border-b">
                        <UiTabItem active>详情</UiTabItem>
                    </UiTab>
                    <div class="content" v-html="(data.type == 'media' && data.isbuy) ? data.content : data.try"></div>
                </section>
            </n-grid-item>
            <n-grid-item :span="6">
                <HotCourseList />
            </n-grid-item>
        </n-grid>
    </LoadingGroup>
</template>
<script setup>
const route = useRoute()
const { id, type } = route.params

const {
    data,
    error,
    pending,
    refresh
} = await useReadCourseApi({
    id
})

const title = computed(() => !pending.value ? data.value?.title : "详情页")

useHead({ title })

const o = {
    media: "图文",
    video: "视频",
    audio: "音频"
}

const subTitle = computed(() => {
    let pre = ""
    if (type === "course") {
        pre = `【${o[data.value.type]}】`
    }
    return `${pre}${data.value.sub_count}人学过`
})


// 购买学习
const loading = ref(false)
const buy = () => {
    useHasAuth(async () => {
        // 免费学习
        if (data.value.price == 0) {
            loading.value = true
            let {
                error: learnError
            } = await useLearnApi({
                goods_id: data.value.id,
                type
            })

            loading.value = false

            // 请求成功，刷新数据
            if (!learnError.value) refresh()

            return
        }
    })
}

</script>
<style>
.detail-top {
    @apply rounded bg-white flex p-5 my-5;
}

.detail-top .image {
    @apply rounded w-[340px] h-[200px] mr-5;
}

.detail-top .info {
    @apply flex-1 flex flex-col py-2;
}

.detail-bottom {
    @apply bg-white rounded mb-5;
}

.detail-bottom .content {
    @apply px-5 pb-5;
}

.detail-bottom .content img {
    max-width: 100% !important;
}
</style>