
document.addEventListener("DOMContentLoaded", function() {
  // code...



myForm = document.getElementsByName('Form')[0];

console.log(myForm)
//alert('*******************')

myForm.onsubmit = function (evt) {
 // evt.preventDefault()
  console.log(evt.target.src.value, 'biiild')
//myForm.select.value
chrome.runtime.sendMessage({text:"get", source: evt.target.src.value},function(reponse){
  //This is where the stuff you want from the background page will be
  console.log(reponse,' respose!!!')
if(reponse.type == "test2")
    console.log("Test received yaaas!!!");
    console.log(reponse)
   // console.log(reponse.data.articles)

    });

};



})
