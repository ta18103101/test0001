// 抽籤程式的 JavaScript 代碼

const drawButton = document.getElementById('drawButton');
const resultDisplay = document.getElementById('result');

drawButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 32) + 1;
    resultDisplay.textContent = '抽中的號碼是：' + randomNumber;
});
