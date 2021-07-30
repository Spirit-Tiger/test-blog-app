const initialState = {
  allPosts: [],
  post: [],
  isError: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        allPosts: action.payload.allPosts,
      };
    case "GET_POST":
      return {
        ...state,
        post: action.payload.post,
        isError: action.payload.isError
      };
    case "DELETE_POST":
      return {
        ...state,
        allPosts: action.payload.remainedPosts,
      };
    case "PUT_POST":
      return {
        ...state,
        allPosts: action.payload.updatedPosts,
      };
      case "SEARCH_ERROR":
      return {
        ...state,
        isError: action.payload.isError,
      };
    default:
      return { ...state };
  }
};

export default postsReducer;
