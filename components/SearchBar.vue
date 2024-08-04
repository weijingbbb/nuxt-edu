<template>
    <n-drawer v-model:show="drawer" placement="top" :on-after-enter="addKeydownEvent" :on-after-leave="removeKeydownEvent">
        <div class="h-full flex justify-center items-center">
            <n-input-group class="flex justify-center items-center">
                <n-input size="large" v-model:value.trim="keyword" placeholder="请输入关键词" :style="{ width: '500px' }" />
                <n-button size="large" type="primary" ghost :disabled="!keyword" @click="handleSearch">
                    搜索
                </n-button>
            </n-input-group>
        </div>
    </n-drawer>
</template>
<script setup>
import {
    NButton,
    NDrawer,
    NInput,
    NInputGroup
} from "naive-ui";

const drawer = ref(false)
const keyword = ref("")

const open = () => {
    keyword.value = ""
    drawer.value = true
}

const close = ()=>drawer.value = false

const handleSearch = ()=>{
    if(!keyword.value) return
    setTimeout(()=>{
        close()
    },100)

    navigateTo({
        name:"search-type-page",
        params:{
            type:"course",
            page:1
        },
        query:{
            keyword:keyword.value
        }
    })
}

function handleEnterEvent(e){
    if (e.key === "Enter" && keyword.value) {
        handleSearch()
    }
}

const addKeydownEvent = ()=> document.addEventListener("keydown",handleEnterEvent)
const removeKeydownEvent = ()=> document.removeEventListener("keydown",handleEnterEvent)

defineExpose({
    open
})
</script>