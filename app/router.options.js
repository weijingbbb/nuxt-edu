export default {
    // vue-router 路由导航的配置，
    scrollBehavior (to, from, savedPosition) {
        console.log('scrollBehavior------------');
        // 在按下 后退/前进 按钮时。就会像浏览器的原生表现那样, 回到浏览的位置
        if(savedPosition){
            return savedPosition
        }

        return {
            top:0
        }
    }
}