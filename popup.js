
document.addEventListener("DOMContentLoaded", function() {
  // code...



myForm = document.getElementsByName('Form')[0];

console.log(myForm)
//alert('*******************')

myForm.onsubmit = function (evt) {
 // evt.preventDefault()
  console.log(evt.target.src.value, 'biiild')
//myForm.select.value


 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var tab = tabs[0];  // do not forget to declare "tab" variable
    chrome.tabs.sendMessage(tab.id,  { text: "gets", source: evt.target.src.value }, function(response){ console.log('eyyy')});
});

// chrome.runtime.sendMessage({text:"get", source: evt.target.src.value},function(reponse){
//   //This is where the stuff you want from the background page will be
//   console.log(reponse,' respose!!!')
// if(reponse.type == "test2")
//     console.log("Test received yaaas!!!");
//     console.log(reponse)
//    // console.log(reponse.data.articles)

    // });

};



})





// //document.addEventListener("DOMContentLoaded", function () {
//   // code...


//  myForm = document.getElementsByName('Form')[0];

//   console.log(myForm)
//   //alert('*******************')

//   myForm.onsubmit = function (evt) {
//     // evt.preventDefault()
//     console.log(evt.target.src.value, 'biiild')
//     //myForm.select.value

//     // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     // var tab = tabs[0];  // do not forget to declare "tab" variable
//     chrome.tabs.sendMessage( { text: "gets", source: evt.target.src.value }, function(response){ console.log('eyyy')});
// //});



//     // chrome.tabs.query({ active: true, currentWindow: true },
//     //  function (tabs) {
//     //    console.log(tabs, 'tabs!!!')
//     //   chrome.tabs.sendMessage(tabs[0].id, ({ text: "get", source: evt.target.src.value }, function (response) {
//     //     console.log('kkkkk', response);
//     //     //if (response.back === 'tab')
//     //       console.log('eyyy')

//     //   }))



//  }
//  //)
//  // }
// //})

// // chrome.runtime.sendMessage({text:"get", source: evt.target.src.value},function(reponse){
// //   //This is where the stuff you want from the background page will be
// //   console.log(reponse,' respose!!!')
// // if(reponse.type == "test2")
// //     console.log("Test received yaaas!!!");
// //     console.log(reponse)
// //    // console.log(reponse.data.articles)

// //     });

// // };



// // })


