var outputScreen = document.getElementById('output')
buttons = document.querySelectorAll('button')
var output = "";

for (item of buttons){
    item.addEventListener('click', function(event){
        buttonText = event.target.innerText;
        // console.log('button is', buttonText)
        if(buttonText == 'AC'){
            output = "";
            outputScreen.value = output;
        }
        else if(buttonText == "="){
            outputScreen.value = eval(output);
            output = "";
            console.log(output);
            // outputScreen.value = output;
        }
        else if(buttonText == "DEL"){
            output = output.substr(0, (output.length)-1)
            outputScreen.value = output;
        }
        else{
            output += buttonText;
            outputScreen.value = output;
        }
        console.log(output)
    })
}