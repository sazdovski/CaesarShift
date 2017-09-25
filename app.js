
function sync()
{

  var n1 = document.getElementById('textToEncrypt');
  var n2 = document.getElementById('encrypted');

//Get value from dropdown
    var selectedDropdown = document.getElementById("key");
    var key = selectedDropdown.options[selectedDropdown.selectedIndex].value;

  n2.value = caesarShift(n1.value,key);
};



function caesarShift(str, amount) {
    
        var output = '';
        
        for (var i = 0; i < str.length; i ++) {
    
            // Getting current character
            var current = str[i];

            // Checking if it is a letter. 
            if (current.match(/[a-z]/i)) {
    
                // Get its ASCII value
                var asciiValue = str.charCodeAt(i);
                
                // Encrypting uppercase letters
                if ((asciiValue >= 65) && (asciiValue <= 90))
                    current = String.fromCharCode((((asciiValue - 65) + parseInt(amount)) % 26) + 65);
    
                // Encrypting lowercase letters
                else if ((asciiValue >= 97) && (asciiValue <= 122)){
                   current = String.fromCharCode((((asciiValue - 97) + parseInt(amount)) % 26) + 97);
                    
                }
            }
    
            // Appending everything
            output += current;
    
        }
            return output;
    
    };