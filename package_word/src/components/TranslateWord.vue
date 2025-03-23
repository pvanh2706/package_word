<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const translations = ref([
    { english: "", vietnamese: "", chinese: "" }
]);

// Hàm gọi API Google Dịch
const translateText = async (row) => {
    if (!row.english.trim()) {
        ElMessage.warning("Vui lòng nhập văn bản cần dịch!");
        return;
    }

    row.vietnamese = "..."; // Loading
    row.chinese = "...";

    try {
        const text = row.english;

        // Dịch sang Tiếng Việt
        const viResponse = await axios.get(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(text)}`
        );
        row.vietnamese = viResponse.data[0][0][0];

        // Dịch sang Tiếng Trung
        const zhResponse = await axios.get(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`
        );
        row.chinese = zhResponse.data[0][0][0];
    } catch (error) {
        console.error("Lỗi:", error.message);
        ElMessage.error("Lỗi dịch văn bản!");
    }
};

// Hàm thêm dòng mới
const addRow = () => {
    translations.value.push({ english: "", vietnamese: "", chinese: "" });
};

// Hàm xuất dữ liệu ra file .txt
const exportToTxt = () => {
    let content = "Tiếng Anh | Tiếng Việt | Tiếng Trung\n";
    translations.value.forEach(row => {
        content += `${row.english} | ${row.vietnamese} | ${row.chinese}\n`;
    });

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "translations.txt");
};

// Hàm xuất dữ liệu ra file Excel (.xlsx)
const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(translations.value);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Translations");
    XLSX.writeFile(wb, "translations.xlsx");
};
</script>

<template>
    <div class="translate-container">
        <el-card class="box-card">
            <h3>Bảng Dịch Ngôn Ngữ</h3>
            <el-table :data="translations" border>
                <el-table-column label="Tiếng Anh">
                    <template #default="{ row }">
                        <el-input 
                            v-model="row.english"
                            placeholder="Nhập từ tiếng Anh..." 
                            @blur="translateText(row)"
                        ></el-input>
                    </template>
                </el-table-column>

                <el-table-column label="Tiếng Việt">
                    <template #default="{ row }">
                        <el-input v-model="row.vietnamese" readonly></el-input>
                    </template>
                </el-table-column>

                <el-table-column label="Tiếng Trung">
                    <template #default="{ row }">
                        <el-input v-model="row.chinese" readonly></el-input>
                    </template>
                </el-table-column>
            </el-table>

            <el-button type="primary" @click="addRow" class="action-btn">
                Thêm dòng mới
            </el-button>

            <el-button type="success" @click="exportToTxt" class="action-btn">
                Xuất TXT
            </el-button>

            <el-button type="warning" @click="exportToExcel" class="action-btn">
                Xuất Excel
            </el-button>
        </el-card>
    </div>
</template>

<style scoped>
.translate-container {
    max-width: 800px;
    margin: 50px auto;
}

.box-card {
    padding: 20px;
    text-align: center;
}

.action-btn {
    margin-top: 10px;
    margin-right: 10px;
}
</style>
