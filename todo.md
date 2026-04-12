
## Light Theme Revision
- [ ] Audit current dark-theme sections, cards, and navigation surfaces that need conversion to a white-base presentation.
- [ ] Redefine global color tokens in `client/src/index.css` for a bright industrial editorial theme with strong readable contrast.
- [ ] Update header, hero, CTA buttons, and section dividers so the homepage works on a white background.
- [ ] Restyle product, application, technology, about, and quote pages with lighter surfaces and clearer card hierarchy.
- [ ] Validate readability, hover states, borders, and form usability across the refreshed light theme before delivery.

## Brand Removal and SKU Renaming Revision
- [ ] Audit all visible occurrences of the name TADER across navigation, hero, SEO text, product cards, detail pages, and quote workflow.
- [ ] Review the existing product family structure and derive a new naming logic for each category without using the name TADER.
- [ ] Define a consistent SKU scheme for flat, ball nose, corner radius, aluminum, and carbide rod product groups.
- [ ] Update the product data module and all UI surfaces to display the new product naming and SKU conventions consistently.
- [ ] Verify the revised naming on homepage, products page, product detail pages, and quote request form before delivery.

## Navigation and Product Rule Revision
- [ ] 將導覽與頁面中的 Request Quote 露出收斂為僅右上角保留。
- [ ] 依新規格將 flute 篩選與資料限制為 2F、3F、4F、5F、6F。
- [ ] 參考指定頁面，重新核對並整理僅保留 3 mm 以下的非鑽頭、非絞刀產品資料。
- [ ] 將 1/8 inch 規則標註為客製且需達一定訂單量。
- [ ] 維持 Construction 僅提供 B / C。
- [ ] 移除複材鎢鋼加鎢鋼目前不生產的項目。
- [ ] 移除或限制 shank 6 mm 以上不生產的項目。
- [ ] 刪除鎢鋼焊接鎢鋼建議可刪除的項目。
- [ ] 將不鏽鋼焊接鎢鋼限制在 shank 6 mm。
- [ ] 依上述資料規則同步調整前端篩選、文案與產品詳情顯示。

## Quote Form Integration Revision
- [ ] 盤點網站中所有 Request Quote 入口與目前的站內詢價頁路徑。
- [ ] 評估直接連到 Netlify 外部表單與保留站內過渡頁兩種方案的優缺點。
- [ ] 依選定方案更新導覽列與相關 CTA 的連結與文案。
- [ ] 驗證外連表單可正常開啟且不影響網站導覽體驗。
- [ ] 整理結果並向使用者提供後續優化建議。

## Uploaded Content Website Revision
- [ ] 讀取 `/home/ubuntu/upload/pasted_content.txt`，整理需套用到網站的文案、段落與結構變更。
- [ ] 盤點目前首頁、產品頁、技術頁、關於頁與詢價頁中受上傳內容影響的區塊。
- [ ] 依上傳內容修改網站文案、連結與相關頁面呈現。
- [ ] 驗證修改後的網站內容與導覽流程。
- [ ] 建立檢查點並向使用者交付更新版本。

## Second-Round Website Corrections
- [ ] 將全站所有導向詢價表單的 CTA 統一改為「Request a Quote」，並全部連到 FORM_URL，而非 /quote-request 或其他內部路由。
- [ ] 在所有頁面的桌機版導覽列右上角加入常駐實心橘色「Request a Quote」按鈕，開新分頁連到 FORM_URL。
- [ ] 在手機版漢堡選單中，將「Request a Quote」作為第一個選項，連到 FORM_URL。
- [ ] 將首頁、Applications、Technology 的 Hero 主 CTA 改為白底橘框橘字的 outline 樣式，保留 Browse Products 次要按鈕。
- [ ] 刪除首頁 Commercial USP 區塊下方重複的 stats bar，只保留 Hero 圖卡內的統計列。
- [ ] 刪除 Applications 頁面重複出現的 intro paragraph，只保留一份。
- [ ] 刪除 Medical / Aerospace / Electronics 卡片內三個文字型 CTA，避免錯誤或多餘導流。
- [ ] 確認 Footer 只保留 Procurement Note，完全移除 Sitemap 區塊。
- [ ] 刪除 Products 頁面中「Visible SKUs / Base category count / Active category routes」整個 stats block。
- [ ] 刪除所有產品規格表中的 DETAIL 欄與 VIEW 連結，讓表格止於 B / C construction 欄位。
- [ ] 將所有產品詳情頁警示標題從「Amazon-style Warning」改成「Important Notice」，保留內容與樣式。
- [ ] 將 Procurement Note 全站改寫為 welcomes custom tooling requests 的新版本。
- [ ] 重寫 Technology Topic 05 為「Vertically Integrated Supply Chain」，保留指定 verbatim 句子，移除任何對外供應 bar stock 的表述。
- [ ] 驗證首頁、Applications、Technology 的 title、meta description 與 og:title / og:description 是否符合第二輪要求。
- [ ] 在交付前檢查所有「Request a Quote」連結、導覽列 CTA、Hero outline 樣式與刪除項目是否已正確生效。

## Third-Round Website Corrections
- [ ] 移除全站所有 Hero 區塊中的主次 CTA 與任何 Hero 區域文字連結 CTA，保留標籤、標題、描述與 Hero 圖像／統計卡。
- [ ] 保留所有頁面右上角導覽列的常駐「Request a Quote」按鈕，且不得移除。
- [ ] 刪除 Products 頁面 Hero 下方目前無作用的 secondary CTA 按鈕。
- [ ] 將 Products 頁面區塊順序改為：Hero → 4 個 geometry family cards → Product Line Access → 規格表 → Footer Procurement Note。
- [ ] 為 Applications 頁面三張產業卡加上代表性圖片，且圖片位於標題上方並維持一致比例與高度。
- [ ] 為 Technology 頁面 Topic 01–05 加入一致風格的橘色線性圖示。
- [ ] 在 Technology Topic 02 內加入 China 約 30% 對 Taiwan 4.8% 的水平長條比較圖，位置在段落與 bullet list 之間，並附上指定說明文字。
- [ ] 為 About 頁面上方三張主題卡加入與下方 icon row 同風格的橘色線性圖示。
- [ ] 確認 Topic 05 的 verbatim 句子「our finished tool cost structure starts below where most competitors begin purchasing」仍完整保留。
- [ ] 確認第二輪 Procurement Note 新文案仍完整保留。
- [ ] 交付前驗證全站 Hero 無 CTA、Products 區塊順序正確、Applications 圖片存在、Technology 圖示與圖表存在、About 上方三卡圖示存在。

## Fourth-Round Website Corrections
- [ ] 將 /products 重構為雙層架構：總覽頁只保留 Hero、intro、4 個 geometry family cards 與 Procurement Note。
- [ ] 從 /products 移除 Product Line Access 區塊。
- [ ] 從 /products 移除所有 specification tables 與其餘細節內容。
- [ ] 建立四個第二層分類頁：/products/flat-end-mills、/products/ball-nose-end-mills、/products/corner-radius-end-mills、/products/aluminum-end-mills。
- [ ] 每個第二層分類頁都要包含：Hero、只顯示該分類的 Product Line Access、只顯示該分類 SKU 的規格表、Procurement Note，以及回到 /products 的 breadcrumb 或 back link。
- [ ] 讓 /products 的四張 geometry family cards 可點擊並連到各自的 /products/[category] 頁。
- [ ] 讓主導覽列的 PRODUCTS 仍然指向 /products 總覽頁。
- [ ] 將舊的根層分類路由 /flat-end-mills、/ball-nose-end-mills、/corner-radius-end-mills、/aluminum-end-mills 安全導向到新的 /products/[category] 路徑。
- [ ] 將全站 Procurement Note 文案統一替換為 canonical 版本：When your requirements go beyond the standard catalog, ZENOK offers custom tooling solutions built around your application. Provide your machining context, critical dimensions, and target pricing through the quote form for a feasibility assessment.
- [ ] 驗證 /products 頁面只剩 Hero、intro、4 cards、Procurement Note。
- [ ] 驗證四個第二層分類頁都存在，且不會顯示其他分類的 product lines 或 SKUs。
- [ ] 驗證第二輪與第三輪要求仍完整保留：右上角 Request a Quote、全站無 Hero CTAs、規格表無 DETAIL/VIEW、Important Notice、Technology Topic 05 verbatim 句、Topic 02 tariff bar chart、Technology 與 About 圖示仍存在。
