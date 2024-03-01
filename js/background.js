console.log('hello from background');

chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL('html/hello.html');
    await chrome.tabs.create({ url });
});

chrome.commands.onCommand.addListener((command) => {
    console.log(command);
    if (command === 'copy-all') {
        console.log('сработал copy-all');
    }
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.openNewTab) {
        // Создаем новую вкладку
        chrome.tabs.create({ url: chrome.runtime.getURL('html/answer.html') });
    }
});