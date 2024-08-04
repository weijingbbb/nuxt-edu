<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="mt-20">
    <n-result status="500" title="500 服务器错误" description="服务器出错可能说明该雇更多程序员了">
        <template #footer>
            <n-button @click="handleError">回到首页</n-button>
        </template>
    </n-result>
</div>
</template>
