<template>
    <n-card class="cursor-pointer mb-5 shadow-md !border-0">
        <template #cover>
            <img :src="item.cover" class="w-[100%] h-[150px]"/>
        </template>
        <div class="pt-2">
            <span class="font-bold w-full truncate font-semibold">{{ item.title }}</span>
        </div>
        <div class="mt-2 flex">
            价格
        </div>
    </n-card>
</template>
<script setup>
defineProps({
    item:Object
})
</script>
