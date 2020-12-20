var btnTranslate=document.querySelector("#btn-translate")
var textInput = document.querySelector("#txtInput")
var translateoutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/german-accent.json"

btnTranslate.addEventListener("CLick",function ClickEventHandler(){
    console.log("This button is clicked:)")
    console.log("input", textInput.value)
})

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server")
}


function clickHandler() {
    var inputText = txtInput.value; // input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            translateoutput.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)