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
//alert("2");

//var backgroundScriptMessage = " purple monkey dishwasher";
 
// chrome.extension.onRequest.addListener(function(request, sender)
// {
 //alert("Background script has received a message from contentscript:");
// returnMessage(123);
// });

var tab_status = 0;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {          
   if (changeInfo.status == 'complete') {  

	tab_status = 1;
		///alert("Background script is sending a message to contentscript:");

 //      chrome.tabs.query({active: true}, function(tabs){ 
	// chrome.tabs.sendMessage(tab.id, {message: "123"}, function(response) { 
	// 	alert("as");
	// 	}); 
	//  });
   }
});


chrome.runtime.onConnect.addListener(function(port){
	if(tab_status == 1)
	{
		port.postMessage({greeting:"hello"});
		//alert("hello");
		tab_status = 0;
	}
});


 
// function returnMessage(response)
// {
//  // chrome.tabs.getSelected(null, function(tab) {
//  // var joinedMessage = messageToReturn + ""; 
//   alert("Background script is sending a message to:");
//   chrome.tabs.query({active: true}, function(tabs){ 
// 	chrome.tabs.sendMessage(tab.id, {action: "open_dialog_box"}, function(response) { 
// 		alert("as");
// 		}); 
// 	});
//   alert("Background script is sending a message to fsdlkfsdklfjslkdfj:");
//  // });
// }