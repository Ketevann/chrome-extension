var xhr = new XMLHttpRequest();
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message, 'messi')
  if (message.text == "getNews") {
    console.log('get!!')
    xhr.open("GET", `https://newsapi.org/v1/articles\?source\=${message.source}\&sortBy\=top\&apiKey\=${API_KEY}`, false);
    xhr.send();
    var result = xhr.responseText;
    data.result = JSON.parse(result);
    sendResponse({ type: "sendNews", data: JSON.parse(result) });
  }
});
