import axios from "axios";

// Tạo instance của Axios với cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "https://api.example.com",
  timeout: 10000, // Timeout 10 giây
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ **Interceptor: Thêm token vào request nếu có**
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ **Interceptor: Xử lý lỗi chung**
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      if (error.response.status === 401) {
        alert("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!");
        localStorage.removeItem("token");
        window.location.reload(); // Reload trang để đăng nhập lại
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
