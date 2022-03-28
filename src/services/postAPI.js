import axios from "../axios"
import apiConst from "../constants/apiConst"

class postAPI {
    // constructor() {
    //     axios.defaults.headers.common["authorization"] = localStorage.getItem('accessToken');
    // }

    getCategoryDetail(categoryCode) {
        return axios.get(apiConst.CATEGORY_DETAIL, { params: { categoryCode: categoryCode } });
    }

    getPostDetail(postCode) {
        return axios.get(apiConst.POST_DETAIL, { params: { postCode: postCode } });
    }

    getPopularCategoryPost(categoryCode) {
        return axios.get(apiConst.POPULAR_CATEGORY_POST, { params: { categoryCode: categoryCode } });
    }

    getNewestCategoryPost(data) {
        return axios.post(apiConst.NEWEST_CATEGORY_POST, data);
    }

    getRelationCategoryPost(categoryCode, postCode) {
        return axios.get(apiConst.RELATION_CATEGORY_POST, { params: { categoryCode: categoryCode, postCode: postCode } });
    }

    updateReadNum(postCode) {
        return axios.get(apiConst.UPDATE_READ_NUM, { params: { postCode: postCode } });
    }

    searchPost(data) {
        return axios.post(apiConst.SEARCH_POST, data);
    }

    getTagList() {
        return axios.get(apiConst.GET_TAG_LIST);
    }

    getPopularPost() {
        return axios.get(apiConst.POPULAR_POST);
    }

    getNewestPost() {
        return axios.get(apiConst.NEWEST_POST);
    }
}

export default new postAPI()