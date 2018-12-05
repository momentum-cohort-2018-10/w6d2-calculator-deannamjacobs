
var inputLabel = document.getElementById('inputLabel');

function clickBtn(obj) {

    var clicked = obj.innerHTML;

    if (clicked == '=') {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (clicked == 'C') {
        inputLabel.innerHTML = '0'
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = clicked
        } else {
            inputLabel.innerHTML += clicked
        }
    }
}
