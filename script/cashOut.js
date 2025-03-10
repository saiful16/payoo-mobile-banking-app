// document.getElementById('btn-cash-out').addEventListener('click', function(event){
//     event.preventDefault();

//     const accountNumber = document.getElementById('cash-out-account-number').value

//     const pinNumber = document.getElementById('cash-out-pin-number').value
//     const pin = parseInt(pinNumber)

//     const amountValue = document.getElementById('cash-out-amount').value
//     const amount = parseFloat(amountValue)

//     const currentBalance = document.getElementById('main-balance').innerText
//     const mainBalance = parseFloat(currentBalance)

//     // console.log(typeof mainBalance, typeof pin, typeof amount);

//     if(accountNumber.length === 11){
//         if(pin === 1234){
//             const newBalance = mainBalance - amount
//             document.getElementById('main-balance').innerText = newBalance;
//         } else{
//             alert('Please enter correct account number and try again')
//         }
//     } else{
//         alert('Please enter correct account number and try again')
//     }


// })



document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = getInputValueById('cash-out-account-number');
    const pin = getInputValueById('cash-out-pin-number');
    const amount = getInputValueById('cash-out-amount');
    const mainBalance = getInnerTextById('main-balance');
    const transferContainer = document.getElementById('transfer-container')

    if (amount > mainBalance) {
        alert("You don't have enough amount");
        return;
    }

    if (accountNumber.toString().length === 11 && pin === 1234) {
        const newBalance = mainBalance - amount;
        setInnerTextAndValue('main-balance', newBalance)


        const div = document.createElement('div')

        div.innerHTML = `
        <div class="bg-slate-100 m-5 rounded-xl text-center py-2">
                    <h2 class="text-xl font-bold "> Account Number: ${accountNumber}</h2>
                    <p>Deducted amount : $ ${amount}</p>
                </div>
        
        `
        transferContainer.appendChild(div);
    }
    else {
        alert('Please Enter correct account number or PIN')
    }
})