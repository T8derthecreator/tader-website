# Quote Form Integration Verification

已檢視外部 Netlify 詢價表單首頁，可見其為 ZENOK 品牌、多步驟 RFQ 表單，適合作為外部詢價目的地。

已重新檢視網站首頁，右上角保留單一 **Request Quote** 入口，頁尾也已改成 **Open the external inquiry workflow**。目前版面顯示正常，沒有因改用外部表單而破壞首頁結構。

已驗證 `/quote-request` 已改為外部導流過渡頁：Hero 主按鈕為 **Open Inquiry Form**，內容區另有 **Launch External Form**，並清楚說明維持既有郵件通知與試算表紀錄流程。

以瀏覽器點擊主按鈕時，當前檢視未直接切換頁面，推測為新分頁行為或瀏覽器工具未自動切換，因此仍需再用程式方式確認實際 `href` 指向是否為 `https://toolinginquiryform.netlify.app/`。

透過頁面 DOM 進一步確認：導覽列 **Request Quote**、站內 **Open Inquiry Form**、以及 **Launch External Form** 三個入口的 `href` 都已指向 `https://toolinginquiryform.netlify.app/`。其中導覽列與內容區主按鈕採 `target="_blank"`，可以保留目前網站瀏覽情境；Hero 主按鈕目前仍為同網址，但未加上新分頁屬性，屬可再微調的體驗項目。
