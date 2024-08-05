// 可以使用useFetch的watch属性，对使用的参数进行监听
// 将对象转url参数
export function useQueryToString(query = {}){
    let q = ""
    for (const key in query) {
        if(q == ""){
            q = `?${key}=${query[key]}`
        } else {
            q += `&${key}=${query[key]}`
        }
    }
    return q
}


// 回车事件
export function useEnterEvent(event){
    function handleEnterEvent(e){
        if (e.key === "Enter") {
            event()
            // 取消事件的默认动作
            e.preventDefault();
        }
    }
    
    onBeforeMount(()=>document.addEventListener("keydown",handleEnterEvent))
    onUnmounted(()=> document.removeEventListener("keydown",handleEnterEvent))
}