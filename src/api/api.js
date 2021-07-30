const base_url = 'https://bloggy-api.herokuapp.com/posts';


export const allPostsUrl = () => `${base_url}`;
export const postUrl = (post_id=null) => `${base_url}/${post_id}?_embed=comments`;
export const createPostUrl = () => `${base_url}`;
export const deletePostUrl = (post_id=null) => `${base_url}/${post_id}`;
export const updatePostUrl = (post_id=null) => `${base_url}/${post_id}`;
export const createCommentUrl = () => `${base_url.replace('/posts','')}/comments`;