window.onload = function() {
    // console.log("We here");
    chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
    }, function(selection) {
        chrome.runtime.sendMessage({selection: selection[0]}, function(response) {
            // console.log(response);
           document.getElementById("output").innerHTML = response.clips;
        });
    });

var text = document.getElementById("output")

text.addEventListener("click", function(e){
    // console.log("hi one");
    chrome.runtime.sendMessage({empty: "clear"}, function(response) {
        // console.log(response);
        // console.log("hi");
        text.innerHTML = response.clips;

    });
});
};

