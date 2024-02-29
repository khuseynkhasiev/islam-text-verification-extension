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
