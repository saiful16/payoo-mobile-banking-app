// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault();

//     const accountNumber = document.getElementById('account-number').value

//     const pinNumber = document.getElementById('pin-number').value
//     const pin = parseInt(pinNumber)

//     const amountValue = document.getElementById('amount').value
//     const amount = parseFloat(amountValue)

//     const currentBalance = document.getElementById('main-balance').innerText
//     const mainBalance = parseFloat(currentBalance)

//     // console.log(typeof mainBalance, typeof pin, typeof amount);

//     if(accountNumber.length === 11){
//         if(pin === 1234){
//             const newBalance = mainBalance + amount
//             document.getElementById('main-balance').innerText = newBalance;
//         } else{
//             alert('Please enter correct account number and try again')
//         }
//     } else{
//         alert('Please enter correct account number and try again')
//     }


// })

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = getInputValueById('account-number');
    const pinNumber = getInputValueById('pin-number')
    const amount = getInputValueById('amount')
    const mainBalance = getInnerTextById('main-balance')
    

    if (accountNumber.toString().length === 11 && pinNumber === 1234) {
        const newBalance = mainBalance + amount;
        // document.getElementById('main-balance').innerText = newBalance;
        setInnerTextAndValue('main-balance', newBalance);
    }
    else {
        alert('Please check your account number or PIN')
    }
})
