var x = document.getElementsByTagName("video");

var backgroundScriptMessage = "backmessage";	
//alert(typeof x[0].loop);
alert("1");
//alert("X");

if(x.length === 0)
{
	returnMessage(0);
}
else if(x[0].loop === true)
{
	returnMessage(1);
}
else
{
	returnMessage(2);
}

function returnMessage(messageToReturn)
{
 chrome.tabs.getSelected(null, function(tab) {
  var joinedMessage = messageToReturn + backgroundScriptMessage; 
  alert("Background script is sending a message to contentscript:'" + joinedMessage +"'");
  chrome.tabs.sendMessage(tab.id, {message: joinedMessage});
 });
}