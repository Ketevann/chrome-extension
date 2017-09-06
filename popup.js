
document.addEventListener("DOMContentLoaded", function () {
  myForm = document.getElementsByName('Form')[0];
  myForm.onsubmit = function (evt) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];  // do not forget to declare "tab" variable
      chrome.tabs.sendMessage(tab.id, { text: "getSource", source: evt.target.src.value }, function (response) {});
    });
  };
});


