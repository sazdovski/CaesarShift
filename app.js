
function syncFirst()
{
    var n1 = document.getElementById('firstInput');
    var n2 = document.getElementById('secondInput');
    //Get value from dropdown
    var selectedDropdown = document.getElementById("key");
    var key = selectedDropdown.options[selectedDropdown.selectedIndex].value;

    n2.value = caesarEncrypt(n1.value,key);
}

function syncSecond(){

    var n1 = document.getElementById('firstInput');
    var n2 = document.getElementById('secondInput');
    //Get value from dropdown
    var selectedDropdown = document.getElementById("key");
    var key = selectedDropdown.options[selectedDropdown.selectedIndex].value;

    n1.value = caesarDecrypt(n2.value,key);
}


function caesarEncrypt(str, amount) {

        var output = '';

        for (var i = 0; i < str.length; i ++) {

            // Getting current character
            var current = str[i];

                // Get its ASCII value
                var asciiValue = str.charCodeAt(i);

                // Encrypting
                if ((asciiValue >= 32) && (asciiValue <= 126))
                    current = String.fromCharCode((((asciiValue - 32) + parseInt(amount)) % 95) + 32);

                else {
                    output = "Wrong Input";
                }


            // Appending everything
            output += current;

        }
            return output;

    }



function caesarDecrypt(str, amount) {

    var output = '';

    for (var i = 0; i < str.length; i ++) {

        // Getting current character
        var current = str[i];

        // Get its ASCII value
        var asciiValue = str.charCodeAt(i);

        // Decrypting
        if ((asciiValue >= 32) && (asciiValue <= 126))
            current = String.fromCharCode((((asciiValue - 32) - parseInt(amount)) % 95) + 32);

        else {
            output = "Wrong Input";
        }


        // Appending everything
        output += current;

    }
    return output;

}