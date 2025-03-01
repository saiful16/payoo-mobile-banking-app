// const mainBalance = document.getElementById('main-balance').innerText;
// const currentMainBalance = parseFloat(mainBalance)

function getInputValueById(id) {
    const InputValue = document.getElementById(id).value
    const convertedValue = parseFloat(InputValue);
    return convertedValue;
}

function getInnerTextById(id) {
    const innerTextValue = document.getElementById(id).innerText;
    const textValue = parseFloat(innerTextValue);
    return textValue;
}

function setInnerTextAndValue(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}