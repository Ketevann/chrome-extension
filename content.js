
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.text == "getSource") {
    chrome.runtime.sendMessage({ text: "getNews", source: message.source }, function (response) {
      if (response.type == "sendNews")
        remove()
      function remove() {
        var myNode = document.getElementById('newspage');
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
        }
      }
      response.data.articles.map(page => {
        var mydiv = document.getElementById("newspage"),
          aTag = document.createElement('a'),
          imageTag = document.createElement('img'),
          myDescription = document.createElement('div');

        aTag.setAttribute('class', 'news');
        aTag.href = `${page.url}`
        aTag.innerHTML = `${page.title}`;

        imageTag.src = `${page.urlToImage}`
        imageTag.setAttribute('class', 'newsImage')

        myDescription.setAttribute('class', 'description')
        myDescription.innerHTML = `${page.description}`

        mydiv.appendChild(aTag);
        mydiv.appendChild(myDescription);
        mydiv.appendChild(imageTag); 
      })
    });
  }
});



