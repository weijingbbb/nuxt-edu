<template>
    <div class="p-5">
        <n-form ref="formRef" :model="form" :rules="rules" label-width="80" label-placement="left">
        <n-form-item label="原密码" path="opassword">
            <n-input v-model:value="form.opassword" placeholder="原密码" type="password"/>
        </n-form-item>
        <n-form-item label="新密码" path="password">
            <n-input v-model:value="form.password" placeholder="新密码" type="password"/>
        </n-form-item>
        <n-form-item label="确认密码" path="repassword">
            <n-input v-model:value="form.repassword" placeholder="确认密码" type="password" :disabled="!form.password"/>
        </n-form-item>
        <div class="flex justify-end">
            <n-button type="primary" @click="onSubmit" :loading="loading">
                立即修改
            </n-button>
        </div>
    </n-form>
    </div>
</template>
<script setup>
import {
    NForm,
    createDiscreteApi
} from "naive-ui";
const router = useRouter()
useHead({ title:"修改密码" })

const formRef = ref(null)
const form = reactive({
    opassword:"",
    password:"",
    repassword:""
})

const rules = {
    phone:[{
        required: true,
        message:'手机号必填'
    }],
    code:[{
        required: true,
        message:'验证码必填'
    }],
    password:[{
        required: true,
        message:"密码必填"
    }],
    repassword:[{
        required: true,
        message:"确认密码必填"
    },{
        validator(rule, value) {
            return value === form.password
        },
        message:"两次密码输入不一致",
        trigger: ["input", "blur"]
    }]
}

const loading = ref(false)
const onSubmit = ()=>{
    formRef.value.validate(async (errors)=>{
        if(errors) return
        
        loading.value = true

        let {
            data,
            error
        } = await useupdatePasswordApi(form)

        loading.value = false

        if(error.value) return

        const { message } = createDiscreteApi(["message"])

        message.success("修改密码成功")

        // 退出登录
        await useLogout()
    })
}

useEnterEvent(()=>onSubmit())

definePageMeta({
    title:"修改密码"
})

</script>