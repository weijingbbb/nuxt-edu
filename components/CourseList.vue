<template>
    <n-card class="cursor-pointer mb-5 shadow-md !border-0" footer-style="padding:0;">
        <template #cover>
            <img :src="item.cover" class="w-[100%] h-[150px]" />
        </template>
        <div class="pt-2">
            <span class="font-bold w-full truncate font-semibold">{{ item.title }}</span>
        </div>
        <div class="mt-2 flex items-end">
            <Price :value="item.price" />
            <Price :value="item.t_price" through class="ml-2" />
        </div>
        <template #footer v-if="item.group_id || item.flashsale_id">
            <div class=" bg-yellow-500 text-white p-3 text-xs flex items-center rounded-b">
                {{ item.group_id ? '拼团中' : '秒杀中' }}
                <div class="ml-auto flex items-center">
                    倒计时
                    <CountDown :time="item.end_time" />
                </div>
            </div>
        </template>
    </n-card>
</template>
<script setup>
defineProps({
    item: Object
})
</script>
