// CAESAR CIPHER encrypt
function caesar_encrypt()
{
    var input = document.getElementById("textarea_input").value;
    var key = parseInt(document.getElementById("caesar_key").value);
    var encrypted = [];
    var charNum = 0;
    // Make sure a valid number is entered for the key
    if(key <= 0 || isNaN(key))
    {
        // Only show if they have entered something
        if(input.length > 0)
        {
            console.log("Caesar Cipher Key invalid");
            window.alert("Caesar Cipher Key is not valid");
        }
    }
    else
    {
        console.log("Caesar Cipher Key: " + key);
        for(var index=0; index < input.length; index++)
        {
            var c = input[index];
            // If the character is in the alphabet (ignoring case)
            if(c.match(/[a-z]/i))
            {
                var code = input.charCodeAt(index);
                if(isUpperCase(code))
                {
                    // Use the caesar encrypt algorithm to get the shifted character value
                    // Uses 65 as that is first letter value in uppercase alphabet
                    charNum = ((code - 65  + key) % 26) + 65;
                    // Convert that encrypted character value to a string
                    c = String.fromCharCode(charNum);
                }
                else if(isLowerCase(code))
                {
                    // Use the caesar encrypt algorithm to get the shifted character value
                    // Uses 97 as that is first letter value in lowercase alphabet
                    charNum = ((code - 97  + key) % 26) + 97;
                    // Convert that encrypted character value to a string
                    c = String.fromCharCode(charNum);
                }
            }
            // Add the character to the output, regardless of it being encrypted or not
            encrypted += c;
        }
    }
    console.log("Original message:" + input);
    console.log("Encrypted message: " + encrypted);
    document.getElementById("textarea_output").value = encrypted;
}

// CAESAR CIPHER decrypt
function caesar_decrypt()
{
    var input = document.getElementById("textarea_output").value;
    var key = parseInt(document.getElementById("caesar_key").value);
    var encrypted = [];
    var charNum = 0;
    // Make sure a valid number is entered for the key
    if(key <= 0 || isNaN(key))
    {
        // Only show if something is entered
        if(input.length > 0)
        {
            console.log("Caesar Cipher Key invalid");
            window.alert("Caesar Cipher Key is not valid");
        }
    }
    else
    {
        console.log("Caesar Cipher Key: " + key);
        for(var index=0; index < input.length; index++)
        {
            var c = input[index];
            // If the character is in the alphabet (ignoring case)
            if(c.match(/[a-z]/i))
            {
                var code = input.charCodeAt(index);
                if(isUpperCase(code))
                {
                    var temp = code - 65  - key
                    // If the temporary value is negative, add 26 (no impact on character because using modulo 26)
                    if (temp < 0)
                    {
                        temp += 26;
                    }
                    // Calculate the character code by using caesar cipher on the character using the key shift
                    charNum = ((temp) % 26) + 65;

                    // Convert that encrypted character value to a string
                    c = String.fromCharCode(charNum);
                }
                else if(isLowerCase(code))
                {
                    // Shift the character code back
                    var temp = code - 97  - key
                    // If the temporary value is negative, add 26 (no impact on character because using modulo 26)
                    if (temp < 0)
                    {
                        temp += 26;
                    }
                    // Calculate the character code by using caesar cipher on the character using the key shift
                    charNum = ((temp) % 26) + 97;
                    // Convert that decrypted character value to a string
                    c = String.fromCharCode(charNum);
                }
            }
            // Add the character to the output
            encrypted += c;
        }
    }
    console.log("Original message:" + input);
    console.log("Encrypted message: " + encrypted);
    document.getElementById("textarea_input").value = encrypted;
}

// ROT13 CIPHER encrypt (ALSO decrypt)
function rot13_encrypt()
{
    var input = document.getElementById("textarea_input").value;
    var encrypted = "";
    var key = 13; // ROT13 uses Caesar cipher with key 13
    var charNum = 0;
    
    for (var index=0; index < input.length; index++)
    {
        var c = input[index];
        // If the character is in the alphabet (ignoring case)
        if(c.match(/[a-z]/i))
        {
            var code = input.charCodeAt(index);
            if((isUpperCase(code)))
            {
                // Use the caesar encrypt algorithm to get the shifted character value
                // Uses 65 as that is first letter value in uppercase alphabet
                charNum = ((code - 65 + key) % 26) + 65;
                // Convert that encrypted character value to a string
                c = String.fromCharCode(charNum);
            }
            else if((isLowerCase(code)))
            {
                // Use the caesar encrypt algorithm to get the shifted character value
                // Uses 97 as that is first letter value in lowercase alphabet
                charNum = ((code - 97 + key) % 26) + 97;
                // Convert that encrypted character value to a string
                c = String.fromCharCode(charNum);
            }
        }
        // Add the encrypted character to the output
        encrypted += c;
    }
    document.getElementById("textarea_output").value = encrypted;
}

function rot13_decrypt()
{
    var input = document.getElementById("textarea_output").value;
    var encrypted = "";
    var key = 13; // ROT13 uses Caesar cipher with key 13
    var charNum = 0;
    
    for (var index=0; index < input.length; index++)
    {
        var c = input[index];
        // If the character is in the alphabet (ignoring case)
        if(c.match(/[a-z]/i))
        {
            var code = input.charCodeAt(index);
            if((isUpperCase(code)))
            {
                // Use the caesar encrypt algorithm to get the shifted character value
                // Uses 65 as that is first letter value in uppercase alphabet
                charNum = ((code - 65 + key) % 26) + 65;
                // Convert that encrypted character value to a string
                c = String.fromCharCode(charNum);
            }
            else if((isLowerCase(code)))
            {
                // Use the caesar encrypt algorithm to get the shifted character value
                // Uses 97 as that is first letter value in lowercase alphabet
                charNum = ((code - 97 + key) % 26) + 97;
                // Convert that encrypted character value to a string
                c = String.fromCharCode(charNum);
            }
        }
        // Add the encrypted character to the output
        encrypted += c;
    }
    document.getElementById("textarea_input").value = encrypted;
}

// VIGENERE encrypt
function vigenere_encrypt() {

    // Get the input text to encrypt and key values
    var input = document.getElementById("textarea_input").value;
    var key = document.getElementById("vigenere_key").value;

    // If nothing is entered in the key
    if(key.length < 1)
    {
        console.log("Vigenere Cipher Key not valid");
        window.alert("Vigenere Cipher Key not valid");
    }
    else
    {
        console.log("Vigenere Cipher:");
        // Convert both the input and key to uppercase
        var inputUpper = input.toUpperCase();
        var keyUpper = key.toUpperCase();
        // Filter out any characters that aren't in the alphabet (A-Z, a-z)
        var input_filtered = onlyAlphabet(inputUpper);
        var key_filtered = onlyAlphabet(keyUpper);
    
        var encrypted = "";
        // correctedKeyIndex makes the key loop back to the start of the key
        var correctedKeyIndex = -1;
        for(var i = 0; i < input_filtered.length; i++)
        {
            correctedKeyIndex++;
            // If the current index of the key is more than the length of the key
            if(correctedKeyIndex > key_filtered.length -1)
            {
                // Reset it back to 0 (go back to the first character)
                correctedKeyIndex = 0;
            }
            // Get the character value of the character at the current index of the filtered key
            var code = key_filtered[correctedKeyIndex].charCodeAt();
            
            // Run the caesar 'one' cipher function using the input character and key shift amount
            // Add the value returned to the variable 'encrypted'
            encrypted += (caesar_one_encrypt(input_filtered[i], (code - 65)));
        }
        document.getElementById("textarea_output").value = encrypted;
        console.log("Input: " + input + " | Key: "  + key + "\nOutput: " + encrypted);
    }    
}

function vigenere_decrypt() {

    var input = document.getElementById("textarea_output").value;
    var key = document.getElementById("vigenere_key").value;
    // If nothing is entered as the key
    if(key.length < 1)
    {
        console.log("Vigenere Cipher Key not valid");
        window.alert("Vigenere Cipher Key not valid");
    }
    else
    {
        console.log("Vigenere Cipher:");
        var inputUpper = input.toUpperCase();
        var keyUpper = key.toUpperCase();
        // Filter out any character that isn't in the alphabet
        var input_filtered = onlyAlphabet(inputUpper);
        var key_filtered = onlyAlphabet(keyUpper);
        
        var encrypted = "";
        // correctedKeyIndex makes the key loop back to the start of the key
        var correctedKeyIndex = -1;
        for(var i = 0; i < input_filtered.length; i++)
        {
            correctedKeyIndex++;
            // If the corrected key index is more than the length of the key
            if(correctedKeyIndex > key_filtered.length -1)
            {
                // Reset it back to 0 (go back to the first character)
                correctedKeyIndex = 0;
            }
            // Get the character value of the character at the current index of the filtered key
            var code = key_filtered[correctedKeyIndex].charCodeAt();
            // Run the caesar 'one' decode cipher function using the input character and key shift amount
            // Add the value returned to the variable 'encrypted'
            encrypted += (caesar_one_decrypt(input_filtered[i], (code - 65)));
        }
        document.getElementById("textarea_input").value = encrypted;
        console.log("Input: " + input + " | Key: "  + key + "\nOutput: " + encrypted);
    }    
}

// ALPHABET ONLY
function onlyAlphabet(string) {
    
    var final = [];
    for (var i = 0; i < string.length; i++)
    {
        // If the current charcter of the string is in the alphabet
        if((string[i]).match(/[A-Z]/))
        {
            final.push(string[i])
        }
    }
    return final;
}

// CAESAR CIPHER ENCRYPT FOR 1 CHARACTER AND 1 KEY VALUE
function caesar_one_encrypt(character, currentKey) {
    var code = character.charCodeAt();
    // Calculate the character code by using caesar cipher on the character using the current key shift
    var charNum = ((code - 65  + currentKey) % 26) + 65;
    // Convert the character code to the corresponding letter
    var c = String.fromCharCode(charNum);
    return c;
}

// CAESAR CIPHER DECRYPT FOR 1 CHARACTER AND 1 KEY VALUE
function caesar_one_decrypt(character, currentKey) {    
    var code = character.charCodeAt();
    // Shift the character code back
    var temp = code - 65  - currentKey
    // If the temporary value is negative, add 26 (no impact on character because using modulo 26)
    if (temp < 0)
    {
        temp += 26;
    }
    // Calculate the character code by using caesar cipher on the character using the current key shift
    var charNum = ((temp) % 26) + 65;
    // Convert the character code to the corresponding letter
    var c = String.fromCharCode(charNum);
    return c;
}

// MORSE CODE ENCRYPT
function morse_encrypt() {
    var input = document.getElementById("textarea_input").value;
    // If nothing has been entered, exit
    if(input.length < 1)
    {
        return "No morse code input provided";
    }
    var inputUpper = input.toUpperCase();
    // Morse code hash map for characters and their corresponding morse code representation
    var encryptHash = {
        "A" : ".-",
        "B" : "-...",
        "C" : "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H" : "....",
        "I" : "..",
        "J" : ".---",
        "K" : "-.-",
        "L" : ".-..",
        "M" : "--",
        "N"  : "-.",
        "O" : "---",
        "P" : ".--.",
        "Q" : "--.-",
        "R" : ".-.",
        "S" : "...",
        "T" : "-",
        "U" : "..-",
        "V" : "...-",
        "W" : ".--",
        "X" : "-..-",
        "Y" : "-.--",
        "Z" : "--..",
        "0" : "-----",
        "1" : ".----",
        "2" : "..---",
        "3" : "...--",
        "4" : "....-",
        "5" : ".....",
        "6" : "-....",
        "7" : "--...",
        "8" : "---..",
        "9" : "----.",
        ".": ".-.-.-", 
        ",": "--..--",
        ":": "---...",
        "?": "..--..", 
        "'": ".----.", 
        "-": "-....-", 
        "/": "-..-.",  
        "(": "-.--.",  
        ")": "-.-.-", 
        "\"": ".-..-.", 
        "@": ".--.-.",
        "=": "-...-",   
        "&": ".-...", 
        ";": "-.-.-.", 
        "+": ".-.-.",
        "_": "..--.-", 
        "$": "...-..-",
        "!": "-.-.--",
        " " : "/"
    };

    var message = "";
    var spacer = " ";
    for (var i = 0; i < inputUpper.length; i++)
    {
        // Set current to the current character in the input
        var current = inputUpper[i];
        // If the current character is a key in the morse code hash
        if (current in encryptHash)
        {
            // Loop through the morse code hash keys
            for (var j in encryptHash)
            {
                // If the key matches the character
                if(j === current)
                {
                    // Add the corresponding key value to the message
                    message += encryptHash[j];
                    // If the current character is not the last character
                    if(i < inputUpper.length -1)
                    {
                        // Add a spacer so the morse code isn't one long string
                        message += spacer;
                    }
                }
            }
        }
    }
    document.getElementById("textarea_output").value = message;
}

// MORSE CODE DECRYPT
function morse_decrypt()
{
    var input = document.getElementById("textarea_output").value;
    // If nothing has been entered, exit
    if(input.length < 1)
    {
        return "No morse code input provided";
    }
    // Morse code hash map for morse code and their corresponding characters
    var decryptHash = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-.-.-": ".", 
        "--..--" : ",",
        "---..." : ":",
        "..--.." : "?",
        ".----." : "'",
        "-....-" : "-",
        "-..-." : "/",
        "-.--." : "(",  
        "-.-.-" : ")", 
        ".-..-." : "\"", 
        ".--.-." : "@",
        "-...-" : "=",   
        ".-..." : "&", 
        "-.-.-." : ";", 
        ".-.-." : "+",
        "..--.-" : "_", 
        "...-..-" : "$",
        "-.-.--" : "!",
        "/" : " ",
        " " : ""
    };

    var message = "";
    var spacer = " ";
    var word = "";
    var prevWord = "";
    var words = [];
    for (var i = 0; i < input.length; i++)
    {
        // Set current to the current character in the input
        var current = input[i];
        // If the current character is not a space
        if(current != "/" && i < input.length - 1)
        {
            // Removes empty space that is made put in place after the / character
            if(input[i-1] === "/")
            {
                continue;
            }
            else
            {
                // Add the current character as part of the word
                word += current;
            }
        }
        else
        {
            if(current != "/")
            {
                // add the character to the word
                word += current;
            }
            // Add the word to the array of words
            words.push(word);
            // Reset the word
            word = "";
        }
    }

    // -- Get characters from each word and convert them
    var str = "";
    // Loop through each word in the words array (words can contain multiple characters per "letter")
    for(var i = 0; i < words.length; i++)
    {
        var currentWord = words[i];
        // split the word into groups of letters each time there is a space
        var str = currentWord
        var arr = str.split(" ").map(function(item) {
        return item.trim();
        });
        // Loop through each group of characters (actual letter) in the array
        for (var j = 0; j < arr.length; j++)
        {
            var currentChar = arr[j];
            // If the current group of characters is in the morse code decode hash keys
            if (currentChar in decryptHash)
            {
                // Loop through the morse code decode hash keys
                for (var k in decryptHash)
                {
                    // If the current key (k) matches the group of characters
                    if(k === currentChar)
                    {
                        // Add the key value to the message
                        message += decryptHash[k];
                    }
                }
            }
        }
        // If it's not the last word in the array of words
        if(i < words.length -1)
        {
            // Add a spacer
            message += spacer;
        }
    }
    document.getElementById("textarea_input").value = message;
}

// CHECK IF CHARACTER IS UPPERCASE
function isUpperCase(char)
{
    return ((char >=65) && (char <= 90));
}

// CHECK IF CHARACTER IS LOWERCASE
function isLowerCase(char)
{
    return ((char >= 97) && (char <= 122));
}

// CHECK IF CHARACTER IS IN ALPHABET (EITHER AN UPPERCASE OR LOWERCASE CHARACTER)
function isInAlphabet(char)
{
    return (isUpperCase(char)) || (isLowerCase(char));
}

// SWAP OVER THE TEXTAREA INPUT AND OUTPUT
function swapTextArea()
{
   var inputText = document.getElementById("textarea_input");
   var outputText = document.getElementById("textarea_output");

   var temp = inputText.value;

   inputText.value = outputText.value;
   outputText.value = temp;
}

// CLEAR THE TEXTAREA INPUT AND OUTPUT
function clearTextArea()
{
    document.getElementById("textarea_input").value = "";
    document.getElementById("textarea_output").value = "";
}