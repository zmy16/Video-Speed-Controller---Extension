document.getElementById('speedRange').addEventListener('input', function(event) {
    const speed = event.target.value;
    document.getElementById('speedValue').innerText = `${speed}x`;

    // Kirim pesan ke background script untuk mengubah kecepatan video
    chrome.runtime.sendMessage({ type: 'setSpeed', speed: parseFloat(speed) });
});
