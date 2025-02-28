document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value
    
    const pinNumber = document.getElementById('pin-number').value
    const pin = parseInt(pinNumber)
    
    const amountValue = document.getElementById('amount').value
    const amount = parseFloat(amountValue)

    const currentBalance = document.getElementById('main-balance').innerText
    const mainBalance = parseFloat(currentBalance)

    // console.log(typeof mainBalance, typeof pin, typeof amount);

    if(accountNumber.length === 11){
        if(pin === 1234){
            const newBalance = mainBalance + amount
            document.getElementById('main-balance').innerText = newBalance;
        } else{
            alert('Please enter correct account number and try again')
        }
    } else{
        alert('Please enter correct account number and try again')
    }
    
    
})