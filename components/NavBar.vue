<template>
    <div class="navbar">
        <div class="container flex items-center h-[60px]">
            <n-button text class="!text-xl !font-bold">小魏编程</n-button>
            <div>导航区域</div>

            <n-button circle class="ml-auto mr-3">
                <template #icon>
                    <n-icon>
                        <Search />
                    </n-icon>
                </template>
            </n-button>
            <!-- <n-button secondary strong>登录</n-button> -->
            <n-dropdown :options="userOptions">
                <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            </n-dropdown>
        </div>
    </div>
    <div class="w-[100%] h-[80px]"></div>
</template>

<script setup>
import { Search } from '@vicons/ionicons5';

const userOptions = [{
    label: "用户中心",
    key: "center",
}, {
    label: "退出",
    key: "logout",
}]
</script>

<style>
.navbar {
    z-index: 1000;
    @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
}
</style>