<template>
  <n-alert  :type="status == 'ing' ? 'success' : 'default'" :show-icon="false">
    <p class="text-xs text-gray-500">直播时间：{{ start }} ~ {{ end }}</p>
  </n-alert>
</template>
<script setup>

    const props = defineProps(["start","end"])

    const status = computed(()=>{
        let { start,end } = props
        return useTimeStatus(start,end)
    })

</script>