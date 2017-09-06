// $.a



chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('message', message)
  if (message.text == "gets"){
    console.log(message)
    sendResponse({ type: "test2", data: "something" });



chrome.runtime.sendMessage({text:"getStuff", source:message.source},function(reponse){
  //This is where the stuff you want from the background page will be
  if(reponse.type == "test")
    console.log("Test received");
    console.log(reponse.data, 'data!!')
   // console.log(reponse.data.articles)
   remove()
   function remove(){
     var myNode = document.getElementById('hello');
    //  console.log(elem)
    // elem.removeChild();
    // return false;

    while (myNode.firstChild) {
      console.log
    myNode.removeChild(myNode.firstChild);
}
   }
    reponse.data.articles.map(page =>{
   //   console.log(page.urlToImage)

var mydiv = document.getElementById("hello");






var aTag = document.createElement('a');
var imageTag = document.createElement('img');
imageTag.src = `${page.urlToImage}`
imageTag.setAttribute('class', 'newsImage')
aTag.setAttribute('class', 'news');
aTag.href = `${page.url}`
aTag.innerHTML = `${page.title}`;

var myDescription = document.createElement('div');
myDescription.innerHTML = `${page.description}`

mydiv.appendChild(aTag);
mydiv.appendChild(myDescription);

mydiv.appendChild(imageTag);


    })
//     // document.createElement("a")
//     //  document.getElementById('hello').innerHTML = ('<a href=www.google.com>Click <a/>');

// // myFunction = () =>{
// //   console.log('here!!!')
// // }


 });
  }
});

// myForm = document.getElementsByName('myForm')[0];

// myForm.onsubmit = function (evt) {
// evt.preventDefault()
// alert(1)
// console.log(evt.target.source.value)
// };





