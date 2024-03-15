function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; 

    let regex = /^pet_[a-zA-Z0-9]+$/; 

    if (regex.test(input)) {
        result = 'Valid Syntax <span class="valid"></span>';
    } else {
        result = 'Invalid Syntax <span class="invalid"></span>';
    }

    console.log(result);
    document.getElementById('result').innerHTML = result;
    
    
    
}
