import axios from "../axios"
import apiConst from "../constants/apiConst"

class postAPI {
    // constructor() {
    //     axios.defaults.headers.common["authorization"] = localStorage.getItem('accessToken');
    // }

    getCategoryDetail(categoryCode) {
        return axios.get(apiConst.CATEGORY_DETAIL, { params: {  categoryCode: categoryCode } });
    }

    getPostDetail(postCode) {
        return axios.get(apiConst.POST_DETAIL, { params: { postCode: postCode } });
    }
}

export default new postAPI()