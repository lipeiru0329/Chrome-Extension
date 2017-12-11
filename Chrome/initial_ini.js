// var x = document.getElementsByTagName("video");

// var backgroundScriptMessage = "backmessage";	
// //alert(typeof x[0].loop);
// alert("1");
// //alert("X");

// if(x.length === 0)
// {
// 	returnMessage(0);
// }
// else if(x[0].loop === true)
// {
// 	returnMessage(1);
// }
// else
// {
// 	returnMessage(2);
// }

// function returnMessage(messageToReturn)
// {
//  chrome.tabs.getSelected(null, function(tab) {
//   var joinedMessage = messageToReturn + backgroundScriptMessage; 
//   alert("Background script is sending a message to contentscript:'" + joinedMessage +"'");
//   chrome.tabs.sendMessage(tab.id, {message: joinedMessage});
//  });
// }
alert("2");

var backgroundScriptMessage = " purple monkey dishwasher";
 
// chrome.extension.onRequest.addListener(function(request, sender)
// {
 alert("Background script has received a message from contentscript:");
 returnMessage(123);
// });
 
function returnMessage(messageToReturn)
{
 // chrome.tabs.getSelected(null, function(tab) {
 // var joinedMessage = messageToReturn + ""; 
  //alert("Background script is sending a message to contentscript:");
  chrome.tabs.sendMessage(tab.id, {message: messageToReturn});
  alert("Background script is sending a message to contentscript:");
 // });
}