// =========================
// 智慧通勤資料
// =========================

// 目前先使用示範資料
// 未來可以改成從後端 API 取得 MySQL 資料

const commuteData = [
    {
        date: "週一",
        temperature: 31,
        rain: 40,
        aqi: 55
    },
    {
        date: "週二",
        temperature: 33,
        rain: 65,
        aqi: 72
    },
    {
        date: "週三",
        temperature: 34,
        rain: 70,
        aqi: 105
    },
    {
        date: "週四",
        temperature: 32,
        rain: 30,
        aqi: 80
    },
    {
        date: "週五",
        temperature: 35,
        rain: 60,
        aqi: 110
    }
];


// =========================
// 未來 MySQL 資料介面
// =========================

// 未來架構：
//
// MySQL
//   ↓
// 後端 API
//   ↓
// JavaScript
//   ↓
// 網頁圖表
//
// 例如未來可以使用 fetch() 取得資料：
//
// fetch("你的後端API網址")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // 將 MySQL 資料放入圖表
//     });


// =========================
// 網頁載入完成
// =========================

document.addEventListener("DOMContentLoaded", function () {

    console.log("智慧通勤資訊平台載入完成");

    console.log("目前示範資料：", commuteData);

});
