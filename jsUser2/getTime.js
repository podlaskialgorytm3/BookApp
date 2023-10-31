const timeDiv = document.querySelector(".current-time")

const now = new Date();

const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

const dateFormat = `${day}.${month}.${year}`;
const timeFormat = `${hour < 10 ? '0'+hour : hour}:${minute < 10 ? '0'+minute : minute}:${second < 10 ? '0'+second : second}`;

timeDiv.innerHTML = `${dateFormat}</br>${timeFormat}`