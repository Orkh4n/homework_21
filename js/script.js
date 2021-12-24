
function createDiv (){
    var oxDiv = document.createElement("DIV")
    document.getElementById("ox_div_res").appendChild(oxDiv)
    
    var colorDiv = document.getElementById("div_color").value
    oxDiv.setAttribute("style","width:150px;margin:5px;height:150px;background:"+colorDiv )
    console.log(colorDiv)
}
function createInput (){
    var oxInput = document.createElement("INPUT")
    document.getElementById("ox_result").appendChild(oxInput)
    oxInput.setAttribute("class","form-control")
    
    var plhl = document.getElementById("ttt").value
    oxInput.setAttribute("placeholder", + plhl)
    switch(plhl ) {
        case "1":
        case "2":
        case "3":
            oxInput.setAttribute("style","background:red")
          // code block
          break;
        case "4":
        case "5":
        case "6":
            oxInput.setAttribute("style","background:blue")
        break;
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            oxInput.setAttribute("style","background:aqua")
            break;
        default:
          // code block
          oxInput.setAttribute("style","background:green")
      }
}

function createIcon (){
    var oxIcon = document.createElement("I")
    document.getElementById("ox_icon_res").appendChild(oxIcon)
    var curIcon = document.getElementById("iconSelect").value
    oxIcon.setAttribute("class","fa fa-" + curIcon)
    var iconSize = document.getElementById("oIcon").value
    oxIcon.setAttribute("style","font-size:"+iconSize+"px")

    // switch(expression) {
    //     case x:
    //       // code block
    //       break;
    //     case y:
    //       // code block
    //       break;
    //     default:
    //       // code block
    //   }

}

function createH1(){
    var oxH = document.createElement("H1")
    document.getElementById("ox_h1").appendChild(oxH)
    var tekst = document.getElementById("my_text").value
    var inputText = document.createTextNode(tekst)
    oxH.appendChild(inputText)
    clearr()
}
function clearr(){
    document.getElementById("my_text").value = " "
    
}