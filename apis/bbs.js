// 点赞/取消点赞
export function usePostSupportApi(post_id,type = 'support'){
    return useHttpPost("postSupport",`/post/${type}`,{
        body:{
            post_id
        },
        $: true
    })
}

// 删除帖子
export function useDeletePostApi(id){
    return useHttpPost("deletePost",`/post/delete`,{
        body:{
            id
        }
    })
}

// 我的帖子列表
export function useMypostListApi(page){
    return useHttpGet("MypostList",`/mypost?page=${page}`,{
        lazy:true,
    })
}