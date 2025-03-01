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
    const transferContainer = document.getElementById('transfer-container')

    const bank = document.getElementById('allBank').value;
    console.log(bank)
    
    if(amount< 0){
        alert("Please enter valid amount")
        return;
    }
    if (accountNumber.toString().length === 11 && pinNumber === 1234) {
        const newBalance = mainBalance + amount;
        // document.getElementById('main-balance').innerText = newBalance;
        setInnerTextAndValue('main-balance', newBalance);

        const div = document.createElement('div')

        div.innerHTML = `
        <div class="bg-slate-100 m-5 rounded-xl text-center py-2">
                    <h2 class="text-xl font-bold "> Account Number: ${accountNumber}</h2>
                    <p>Added amount : $ ${amount}</p>
                    <p>From ${bank} </p>
                </div>
        `
        transferContainer.appendChild(div);
        
    }
    else {
        alert('Please check your account number or PIN')
    }
})
