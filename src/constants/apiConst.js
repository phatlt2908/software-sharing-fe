const apiConst = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    CHECK_USERNAME: "/auth/check-username",
    CHECK_EMAIL: "/auth/check-email",

    CHANGE_PASSWORD: "/user/change-password",

    CATEGORY_DETAIL: "/category/detail",

    POST_DETAIL: "/post/detail",
    POPULAR_CATEGORY_POST: "/post/popular-category-post",
    NEWEST_CATEGORY_POST: "/post/newest-category-post",
    RELATION_CATEGORY_POST: "/post/relation-category-post",
    UPDATE_READ_NUM: "/post/update-read-num",
    SEARCH_POST: "/post/search-post",
    POPULAR_POST: "/post/popular-post",
    NEWEST_POST: "/post/newest-post",

    GET_TAG_LIST: "/tag/list",

    SUBMIT_COMMENT: "/comment/submit",
    LOAD_COMMENT: "/comment/load",
    DELETE_COMMENT: "/comment/delete",
    UPDATE_COMMENT: "/comment/update",
    UPDATE_COMMENT_LIKE: "/comment/update-like",
}

export default apiConst