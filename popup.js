document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let url = tabs[0].url;
    generateQRCode(url);
  });
});

function generateQRCode(url) {
  let qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = "";
  let qrcode = new QRCode(qrcodeContainer, {
    text: url,
    width: 128,
    height: 128
  });
}
