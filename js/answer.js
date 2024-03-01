//answer.js

document.addEventListener('DOMContentLoaded', function () {
    // Получаем значение из локального хранилища расширения
    chrome.storage.local.get('textAreaValue', function (result) {
        const textValue = result.textAreaValue;

        if (textValue) {
            const textSelector = document.querySelector('.islam-answer__text');
            textSelector.textContent = textValue;
        }
    });
});
