import { createDiscreteApi } from "naive-ui";

export default defineNuxtPlugin((nuxtApp) => {

    const { loadingBar } = createDiscreteApi(['loadingBar'])

    nuxtApp.hook('app:mounted', () => {
        console.log('应用挂载啦');
    })
    nuxtApp.hook('page:start', () => {
        console.log('页面开始导航');
        loadingBar.start()
    })
    nuxtApp.hook('page:finish', () => {
        console.log('页面结束导航');
        loadingBar.finish();
    })
    nuxtApp.hook('app:error', () => {
        console.log('页面出错啦');
        // 如果是客户端的环境下，则关闭进度条
        if(import.meta.client){
            loadingBar.finish();
        }
    })
})