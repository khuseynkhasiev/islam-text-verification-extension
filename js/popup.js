//popup.js
console.log('подключен popup.js');

const formBtn = document.getElementById('popup-form-post-btn');
const textarea = document.getElementById('popup-copy-textarea');
const charCount = document.getElementById('popup-char-count');

let textAreaValue = '';

function updateCharCount() {
    const currentCount = textarea.value.length;
    textAreaValue = textarea.value;

    charCount.textContent = `${currentCount} / 10000`;

    if (currentCount > 10000) {
        textarea.value = textarea.value.substring(0, 10000);
        charCount.textContent = '10000 / 10000';
    }
}

textarea.addEventListener('input', updateCharCount);
formBtn.addEventListener('click', handlePostTextToServer);

function handlePostTextToServer(e) {
    e.preventDefault();
    console.log(textAreaValue);

    chrome.storage.local.set({ textAreaValue: textAreaValue }, function () {
        if (chrome.runtime.lastError) {
            console.error(
                'Ошибка сохранения в хранилище:',
                chrome.runtime.lastError
            );
        } else {
            // Отправляем сообщение фоновому сценарию
            chrome.runtime.sendMessage({ openNewTab: true });
        }
    });
}
