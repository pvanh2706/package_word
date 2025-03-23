<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
// import axios from "axios";

const apiKey = "YOUR_OPENAI_API_KEY"; // Thay bằng API Key của bạn
const url = "https://api.openai.com/v1/chat/completions";

const textInput = ref("");
const translatedText = ref("");
const loading = ref(false);

const translateText = async () => {
  if (!textInput.value.trim()) {
    ElMessage.warning("Vui lòng nhập văn bản cần dịch!");
    return;
  }

  loading.value = true;
  translatedText.value = ""; // Xóa kết quả cũ

  try {
    const response = await this.$axios.post(
      url,
      {
        model: "gpt-4-turbo",
        messages: [
          { role: "system", content: "Bạn là một dịch giả chuyên nghiệp." },
          { role: "user", content: `Hãy dịch câu sau sang tiếng Việt: "${textInput.value}"` }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      }
    );

    translatedText.value = response.data.choices[0].message.content;
  } catch (error) {
    ElMessage.error("Lỗi dịch văn bản! Kiểm tra API Key.");
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
    <div class="translate-container">
        <el-card class="box-card">
            <h3>Dịch Văn Bản</h3>
            <el-input v-model="textInput" placeholder="Nhập văn bản cần dịch..." clearable></el-input>
            <el-button type="primary" :loading="loading" @click="translateText" class="translate-btn">
            Dịch
            </el-button>
            <el-card v-if="translatedText" class="result-card">
                <p><strong>Kết quả:</strong> {{ translatedText }}</p>
            </el-card>
        </el-card>
    </div>
</template>

<style scoped>
.translate-container {
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
}
.box-card {
  padding: 20px;
}
.translate-btn {
  margin-top: 10px;
  width: 100%;
}
.result-card {
  margin-top: 20px;
  background: #f5f7fa;
}
</style>
