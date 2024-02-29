const onClick = async (e) => {
    let queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    chrome.tabs.remove(tab.id);
};

const btn = document.querySelector('.islam__btn-okey');
if (btn) {
    btn.addEventListener('click', onClick);
}
