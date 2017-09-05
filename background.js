var xhr = new XMLHttpRequest();




chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if(message.text == "getStuff"){
    xhr.open("GET", `https://newsapi.org/v1/articles\?source\=${message.source}\&sortBy\=top\&apiKey\=e17dc00315af4fd1b8a5857184fd1cc6`, false);
xhr.send();

var result = xhr.responseText;

console.log(typeof result)
console.log(JSON.parse(result))


    sendResponse({type:"test", data: JSON.parse(result) });
  }
});


chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if(message.text == "hey"){



    sendResponse({type:"test", data:'so' });
  }
});
