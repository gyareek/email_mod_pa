chrome.runtime.sendMessage({
    method: 'POST',
    action: 'xhttp',
    data: 'q=something'
}, function(responseText) {
    alert(responseText);
    /*Callback function to deal with the response*/
});
