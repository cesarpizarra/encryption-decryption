//function for encryption value and time execution of encryption
function btnEncrypt(){ 
    var inputText = document.getElementById("inputText").value;
    var text = "";
    var start = performance.now();
    console.log(start, "start time")
    for(i=0; i < inputText.length; i++){
        text += encrypt(inputText[i]);
    }
    document.getElementById("encrypt-result").innerHTML = text;
    // console.log(( performance.now() - start), "ms duration")
    document.getElementById("encryptTime").innerHTML = (performance.now() - start) + " milliseconds";
}

// Convertion for the encrypt of the input text
function encrypt(x){
    switch(x){
        //lowercase Input
        case "a": return "Z"; break;
        case "b": return "Y"; break;
        case "c": return "X"; break;
        case "d": return "W"; break;
        case "e": return "V"; break;
        case "f": return "U"; break;
        case "g": return "T"; break;
        case "h": return "S"; break;
        case "i": return "R"; break;
        case "j": return "Q"; break;
        case "k": return "P"; break;
        case "l": return "O"; break;
        case "m": return "N"; break;
        case "n": return "M"; break;
        case "o": return "L"; break;
        case "p": return "K"; break;
        case "q": return "J"; break;
        case "r": return "I"; break;
        case "s": return "H"; break;
        case "t": return "G"; break;
        case "u": return "F"; break;
        case "v": return "E"; break;
        case "w": return "D"; break;
        case "x": return "C"; break;
        case "y": return "B"; break;
        case "z": return "A"; break;
        //Uppercase input
        case "A": return "y"; break;
        case "B": return "x"; break;
        case "C": return "z"; break;
        case "D": return "w"; break;
        case "E": return "v"; break;
        case "F": return "u"; break;
        case "G": return "t"; break;
        case "H": return "s"; break;
        case "I": return "r"; break;
        case "J": return "q"; break;
        case "K": return "p"; break;
        case "L": return "o"; break;
        case "M": return "n"; break;
        case "N": return "m"; break;
        case "O": return "l"; break;
        case "P": return "k"; break;
        case "Q": return "j"; break;
        case "R": return "h"; break;
        case "S": return "i"; break;
        case "T": return "g"; break;
        case "U": return "f"; break;
        case "V": return "e"; break;
        case "W": return "d"; break;
        case "X": return "c"; break;
        case "Y": return "b"; break;
        case "Z": return "a"; break;
        //Numbers
        case "1": return "0"; break;
        case "2": return "9"; break;
        case "3": return "8"; break;
        case "4": return "7"; break;
        case "5": return "6"; break;
        case "6": return "5"; break;
        case "7": return "4"; break;
        case "8": return "3"; break;
        case "9": return "2"; break;
        case "0": return "1"; break;

         case " ": return "\\"; break;  //space
         //Special characters
         case "!": return '"'; break;
         case "#": return "₱"; break;
         case "$": return "^"; break;
         case "%": return "~"; break;
         case "&": return "}"; break;
         case "'": return "{"; break;
         case "(": return "`"; break;
         case ")": return "_"; break;
         case "*": return "]"; break;
         case "+": return "["; break;
         case ",": return "@"; break;
         case "-": return "?"; break;
         case ".": return ">"; break;
         case "/": return "="; break;
         case ":": return "<"; break;
         case "|": return ";"; break;
         case "<": return ":"; break;
         case "=": return "/"; break;
         case ">": return "."; break;
         case "?": return "-"; break;
         case "@": return ","; break;
         case "[": return "+"; break;
         case "]": return "*"; break;
         case "_": return ")"; break;
         case "`": return "("; break;
         case "{": return "'"; break;
         case "}": return "&"; break;
         case "~": return "%"; break;
         case "^": return "$"; break;
         case "₱": return "#"; break;
         case '"': return "!"; break;
         case "\\": return " "; break;
    }
}
//function for decryption value and time execution of decryption
function btnDecrypt(){ 
    var textInput = document.getElementById("textInput").value;
    var text = "";
    var start = performance.now();
    console.log(start, "start time")
    for(i=0; i < textInput.length; i++){
        text += decrypt(textInput[i]);
    }
    document.getElementById("decrypt-result").innerHTML = text;
    // console.log(( performance.now() - start), "ms duration")
    document.getElementById("decryptTime").innerHTML = (performance.now() - start) + " milliseconds";
}

// Convertion for the decrypt of the input text
function decrypt(x){
    switch(x){

         //Upppercase input
         case "Z": return "a"; break;
         case "Y": return "b"; break;
         case "X": return "c"; break;
         case "W": return "d"; break;
         case "V": return "e"; break;
         case "U": return "f"; break;
         case "T": return "g"; break;
         case "S": return "h"; break;
         case "R": return "i"; break;
         case "Q": return "j"; break;
         case "P": return "k"; break;
         case "O": return "l"; break;
         case "N": return "m"; break;
         case "M": return "n"; break;
         case "L": return "o"; break;
         case "K": return "p"; break;
         case "J": return "q"; break;
         case "I": return "r"; break;
         case "H": return "s"; break;
         case "G": return "t"; break;
         case "F": return "u"; break;
         case "E": return "v"; break;
         case "D": return "w"; break;
         case "C": return "x"; break;
         case "B": return "y"; break;
         case "A": return "z"; break;
         //Lowercase input
        case "y": return "A"; break;
        case "x": return "B"; break;
        case "z": return "C"; break;
        case "w": return "D"; break;
        case "v": return "E"; break;
        case "u": return "F"; break;
        case "t": return "G"; break;
        case "s": return "H"; break;
        case "r": return "I"; break;
        case "q": return "J"; break;
        case "p": return "K"; break;
        case "o": return "L"; break;
        case "n": return "M"; break;
        case "m": return "N"; break;
        case "l": return "O"; break;
        case "k": return "P"; break;
        case "j": return "Q"; break;
        case "h": return "R"; break;
        case "i": return "S"; break;
        case "g": return "T"; break;
        case "f": return "U"; break;
        case "e": return "V"; break;
        case "d": return "W"; break;
        case "c": return "X"; break;
        case "b": return "Y"; break;
        case "a": return "Z"; break;

        //Numbers
        case "0": return "1"; break;
        case "9": return "2"; break;
        case "8": return "3"; break;
        case "7": return "4"; break;
        case "6": return "5"; break;
        case "5": return "6"; break;
        case "4": return "7"; break;
        case "3": return "8"; break;
        case "2": return "9"; break;
        case "1": return "0"; break;

        case "\\": return " "; break;  //space
         //Special characters
         case '"': return "!"; break;
         case "₱": return "#"; break;
         case "^": return "$"; break;
         case "~": return "%"; break;
         case "}": return "&"; break;
         case "{": return "'"; break;
         case "`": return "("; break;
         case "_": return ")"; break;
         case "]": return "*"; break;
         case "[": return "+"; break;
         case "@": return ","; break;
         case "?": return "-"; break;
         case ">": return "."; break;
         case "=": return "/"; break;
         case "<": return ":"; break; 
         case ";": return "|"; break;
         case ":": return "<"; break; //stop
         case "/": return "="; break;
         case ".": return ">"; break;
         case "-": return "?"; break;
         case ",": return "@"; break;
         case "+": return "["; break;
         case "]": return "*"; break;
         case ")": return "_"; break;
         case "(": return "`"; break;
         case "'": return "{"; break;
         case "&": return "}"; break;
         case "%": return "~"; break;
         case "$": return "^"; break;
         case "#": return "₱"; break;
         case "!": return '"'; break;
         case " ": return "\\"; break;
    }
}