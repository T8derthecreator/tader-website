# ZENOK 第二輪前端驗證筆記

## 已確認項目

### 首頁
- 右上角仍保留唯一的 **Request Quote** 按鈕。
- Hero 區主按鈕已改為 **Browse Products**，次按鈕為 **Review Technology**，不再於頁內重複出現 Request Quote。
- Quick Product Entry 僅顯示 4 個有效分類卡：Flat、Ball Nose、Corner Radius、Aluminum，零 SKU 類別已隱藏。

### 產品總覽頁
- 頁首 CTA 已改為 **Review Construction Logic** 與 **Browse Applications**，未再顯示頁內 Request Quote。
- 篩選面板已出現 **2F、3F、4F、5F、6F** 五組 Flute 按鈕。
- 頁面中已新增 **Standard production scope** 與 **Program status** 區塊，明確說明 3.0 mm、shank 小於 6.0 mm、1/8 inch 客製 MOQ 與停產複材範圍。
- Active category routes 顯示為 **4**，與隱藏零 SKU 類別的預期一致。

## 待確認項目
- 產品詳情頁右側是否已改為 Commercial Scope 說明卡，且不再有頁內 Request Quote 按鈕。
- 詢價頁是否已補上 Program scope reminder 與 1/8 inch custom MOQ 提示。
- 頁尾 Procurement Note 是否同步更新為第二輪規則版本。

### 產品詳情頁
- SKU 詳情頁右側已改為 **Commercial Scope** 區塊，內容明確說明標準量產範圍為直徑 3.0 mm 以下、shank 6.0 mm 以下。
- 詳情頁已補上 **1/8 inch (3.175 mm) shank 為 custom MOQ only** 與停產複材需人工審查的提醒。
- 詳情頁未見額外的頁內 Request Quote 按鈕，僅保留右上角全站導覽按鈕。

### 詢價頁
- 表單前已出現 **Program scope reminder**，內容正確反映 3.0 mm、shank below 6.0 mm、1/8 inch custom MOQ 與停產複材 special review only。
- Holder Constraint 欄位 placeholder 已含 1/8 inch custom MOQ 提示，符合第二輪規則。
- 詢價頁仍有一個 **Open Quote Form** 頁內按鈕；若要求嚴格維持僅右上角保留詢價 CTA，這個按鈕仍應移除。

### 詢價頁複驗
- 重新整理後，Quote 頁 Hero 僅保留 **Back to Catalog**，先前的 **Open Quote Form** 已成功移除。
- 頁尾 Sitemap 現在只保留 Products、Applications、Technology、About，已不再露出 Quote Request。
- 頁尾 Procurement Note 顯示的內容已同步為第二輪規則版本，包含 3.0 mm、shank below 6.0 mm、1/8 inch custom MOQ 與 discontinued composite programs manual review。
