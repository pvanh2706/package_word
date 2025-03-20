import { createApp } from 'vue'
import App from './App.vue'
import plugins from "@/plugins"; // Import toàn bộ plugin từ thư mục plugins

// createApp(App).mount('#app')
const app = createApp(App);
app.use(plugins); // Đăng ký tất cả plugin
app.mount("#app");


