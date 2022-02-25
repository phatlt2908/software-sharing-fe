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
}

export default new postAPI()