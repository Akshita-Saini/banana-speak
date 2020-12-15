
/* console.log("Hello");
var userName = prompt("Enter Name");
alert("welcome " + userName); */

//var btnTranslate = document.querySelector("#click");
/*btnTranslate.addEventListener("click", function clickHandler(){
    console.log("clicked!");
})
 */

//document.addEventListener( event , callbackFunc );
//event can be anything such as 1.hover 2.scroll 3.on-change 4.click 
//these are pre-defined 
//when the event occurs, callback will be called
//callback func is generally that which is called from within another function!

var btnTranslate = document.querySelector("#click");
var textInput = document.querySelector("#inputDiv");
var textOutput = document.querySelector("#outputDiv");

function createURL(text)
{
    var url = "https://api.funtranslations.com/translate/minion.json?text="+text;
    return url;
}
function clickHandler()
{
    var input = textInput.value;
    //console.log(input);
    fetch(createURL(input))
    .then(response => response.json()).then(JSON => textOutput.innerText=JSON.contents.translated).catch(error => console.log(error));
}

//will give error if clickHandler() is written instead of clickHandler
btnTranslate.addEventListener("click", clickHandler);

