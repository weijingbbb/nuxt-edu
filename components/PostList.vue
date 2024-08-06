<template>
    <div class="border-b p-5">
        <div class="cursor-pointer text-gray-600" @click="open">
            <n-tag v-if="item.is_top" :bordered="false" type="success" size="small">置顶</n-tag>
            {{ item.desc.text }}
        </div>
        <div class="mt-3 cursor-pointer" style="max-width:500px;">
            <n-image v-for="(img, imgI) in item.desc.images" :key="imgI" :src="img"
                :width="item.desc.images.length == 1 ? 300 : 150" :height="item.desc.images.length == 1 ? 200 : 100"
                class="mr-3 mb-2 rounded" preview-disabled />
        </div>
        <div class="flex mt-5">
            <n-button secondary strong size="tiny" class="mr-3" :type="item.issupport ? 'primary' : 'tertiary'"
                @click.stop="handleSupport(item)" :loading="supportLoading">
                <template #icon>
                    <n-icon>
                        <ThumbsUpSharp />
                    </n-icon>
                </template>
                点赞 {{ item.support_count || '' }}
            </n-button>

            <n-button secondary strong size="tiny" class="mr-3">
                <template #icon>
                    <n-icon>
                        <ChatboxEllipsesOutline />
                    </n-icon>
                </template>
                评论 {{ item.comment_count || '' }}
            </n-button>
            <n-button text size="tiny" class="mr-3">作者：{{ item.user.name }}</n-button>
            <n-button type="error" size="tiny" class="mr-3" @click="deleteItem" :loading="loading">
                删除
            </n-button>
        </div>
    </div>
</template>
<script setup>
import {
    ChatboxEllipsesOutline,
    ThumbsUpSharp
} from "@vicons/ionicons5";
import { createDiscreteApi } from "naive-ui";

const props = defineProps({
    item: Object
})

const {
    supportLoading,
    handleSupport
} = useHandleSupportPost()

const emit = defineEmits(["delete"])
const loading = ref(false)
const deleteItem = () => {
    const { dialog, message } = createDiscreteApi(["dialog", "message"])
    dialog.warning({
        content: "是否要删除该帖子？",
        positiveText: "确定",
        negativeText: "取消",
        onPositiveClick: async () => {
            loading.value = true
            emit("delete", {
                id: props.item.id,
                success() {
                    message.success('删除成功')
                    loading.value = false
                },
                fail() {
                    loading.value = false
                }
            })
        },
    });
}

const open = () => {
    navigateTo("/post_detail/" + props.item.id)
}
</script>