# package_word

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Cài nodejs
Cài vue:  npm install -g @vue/cli
Tạo dự án vuecli: vue create my-vue-app
Cài axios: npm install axios
Cài thư viện UI Element Plus: npm install element-plus


my-vue-app/
│── node_modules/        
│── public/             
│── src/                
│   │── assets/         # Ảnh, icon, file CSS
│   │── components/     # Các component dùng chung (Button, Modal,...)
│   │── layouts/        # Layout chính của ứng dụng
│   │── modules/        # 📂 Chứa các module riêng biệt
│   │   │── jira/       # 📂 Module Jira
│   │   │   │── components/   # Component riêng của Jira
│   │   │   │── pages/        # Trang liên quan đến Jira
│   │   │   │── services/     # API Jira
│   │   │   │── store/        # Vuex/Pinia cho Jira
│   │   │── slack/      # 📂 Module Slack
│   │   │   │── components/   # Component riêng của Slack
│   │   │   │── pages/        # Trang liên quan đến Slack
│   │   │   │── services/     # API Slack
│   │   │   │── store/        # Vuex/Pinia cho Slack
│   │── router/        # Cấu hình Vue Router
│   │── store/         # Vuex/Pinia toàn cục
│   │── services/      # API chung (nếu có)
│   │── utils/         # Hàm tiện ích
│   │── mixins/        # Mixin tái sử dụng
│   │── plugins/       # Cấu hình thư viện (Element Plus, Axios,...)
│   │── App.vue        # Component gốc
│   │── main.js        # Khởi tạo ứng dụng Vue
│── tests/             
│── .env              
│── package.json      
│── vite.config.js    
└── README.md        

 src/ (Thư mục chính của dự án)
assets/ → Chứa tài nguyên tĩnh như ảnh, file CSS, SVG.
components/ → Chứa các component tái sử dụng, ví dụ:
BaseButton.vue → Nút bấm dùng chung
TaskTable.vue → Bảng hiển thị danh sách task
layouts/ → Chứa các layout của ứng dụng, ví dụ:
DefaultLayout.vue → Layout chung
AdminLayout.vue → Layout dành cho admin
pages/ → Chứa các trang chính, mỗi trang là một file Vue, ví dụ:
Dashboard.vue → Trang tổng quan
TaskList.vue → Danh sách công việc
Settings.vue → Cài đặt
router/ → Cấu hình Vue Router để điều hướng giữa các trang.
store/ → Chứa Vuex/Pinia, giúp quản lý state toàn cục của ứng dụng.
services/ → Chứa API services, dùng để gọi API Jira, Slack.
jiraService.js → Chứa API call đến Jira
slackService.js → Chứa API call đến Slack
utils/ → Chứa các hàm tiện ích, ví dụ:
formatDate.js → Hàm định dạng ngày tháng
constants.js → Chứa các hằng số như API_URL
mixins/ → Chứa mixins dùng chung giữa các component.
plugins/ → Chứa các thư viện cài đặt thêm như Element Plus, Axios.


 <!-- Set-ExecutionPolicy RemoteSigned -->
 <!-- npm install axios -->

