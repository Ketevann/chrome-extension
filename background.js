var xhr = new XMLHttpRequest();
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.text == "getNews") {
    console.log('get!!')
    xhr.open("GET", `https://newsapi.org/v1/articles\?source\=${message.source}\&sortBy\=top\&apiKey\=${API_KEY}`, false);
    xhr.send();
    var result = xhr.responseText;
    sendResponse({ type: "sendNews", data: JSON.parse(result) });
  }
});
