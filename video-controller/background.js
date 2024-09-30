// background.js

// Mendengarkan instalasi ekstensi
chrome.runtime.onInstalled.addListener(() => {
    console.log('Video Speed Controller extension installed');
});

// Mendengarkan pesan dari popup.js untuk mengatur kecepatan
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'setSpeed') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: setVideoSpeed,
                args: [message.speed]
            });
        });
    }
});

// Fungsi yang akan diterapkan ke video di halaman
function setVideoSpeed(speed) {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.playbackRate = speed;
    });
}
