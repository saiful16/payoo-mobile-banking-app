document.getElementById('btn-login').addEventListener('click', function () {
    const accountNumber = document.getElementById('account-number').value
    const pinNumber = document.getElementById('pin-number').value
    // console.log(pinNumber, accountNumber)
    const pin = parseInt(pinNumber);

    if(accountNumber.length === 11){
       if(pin === 1234){
        window.location.href = "./main.html"
       }
       else{
        alert('Enter correct PIN')
       }
    }
    else{
        alert('Enter valid account number')
    }
})