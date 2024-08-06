<template>
    <div>
        <n-breadcrumb class="mb-5">
            <n-breadcrumb-item>
                <nuxt-link to="/">首页</nuxt-link>
            </n-breadcrumb-item>
            <n-breadcrumb-item>{{ title }}</n-breadcrumb-item>
        </n-breadcrumb>

        <LoadingGroup :pending="pending" :error="error" :is-empty="rows.length === 0">
            <template #loading>
                <LoadingCourseSkeleton />
            </template>
            <n-grid :x-gap="20" :cols="4">
                <n-gi v-for="(item, index) in rows" :key="index">
                    <CourseList :item="item" />
                </n-gi>
            </n-grid>
            <div class="flex justify-center items-center mt-5 mb-10">
                <n-pagination size="large" :page="page" :item-count="total" :page-size="limit"
                    :on-update:page="handlePageChange" />
            </div>
        </LoadingGroup>

    </div>
</template>
<script setup>
const route = useRoute()
const { type } = route.params
const title = route.meta.title

const {
    page,
    limit,
    total,
    handlePageChange,
    rows,
    pending,
    error,
    refresh
} = await usePage(({ page, limit }) => useCourseListApi(page))

definePageMeta({
    middleware: ["list"]
})
</script>