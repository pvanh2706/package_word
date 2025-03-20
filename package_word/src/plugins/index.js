import axios from "./axios";
import element from "./element";

export default {
    install(app) {
        app.config.globalProperties.$axios = axios; // Đăng ký Axios toàn cục
        app.use(element); // Đăng ký Element Plus
    },
};
