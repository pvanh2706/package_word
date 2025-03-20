import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // Import CSS của Element Plus

export default {
  install(app) {
    app.use(ElementPlus); // Đăng ký Element Plus vào Vue app
  },
};
