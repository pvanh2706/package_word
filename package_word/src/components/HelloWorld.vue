<template>
  <div>
    <el-button type="primary" @click="handleClick">Nhấn vào tôi</el-button>
    <button @click="fetchData">Gọi API</button>
    <p>Kết quả từ API: {{ result }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      result: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/test");
        this.result = response.data;
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    },
  },
};
</script>
