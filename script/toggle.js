document.getElementById('cash-out-section').style.display = 'none'
handleToggle('transfer-money-section', 'none')

// document.getElementById('add-money').addEventListener('click', function(){
//     // console.log('add money clicek')
//     document.getElementById('add-money-section').style.display ='block';
//     document.getElementById('cash-out-section').style.display ='none';
    
// })

// document.getElementById('cash-out').addEventListener('click', function(){
//     // console.log('cashout clicek')
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cash-out-section').style.display = 'block';

// })

document.getElementById('add-money').addEventListener('click', function(){
    handleToggle('add-money-section', 'block');
    handleToggle('cash-out-section', 'none');
    handleToggle('transfer-money-section', 'none')
})

document.getElementById('cash-out').addEventListener('click', function(){
    handleToggle('add-money-section', 'none');
    handleToggle('cash-out-section', 'block')
    handleToggle('transfer-money-section', 'none')
})

document.getElementById('transfer-money').addEventListener('click',function(){
    handleToggle('add-money-section', 'none');
    handleToggle('cash-out-section', 'none')
    handleToggle('transfer-money-section', 'block')
})


function handleToggle (id, status){
    document.getElementById(id).style.display = status;
}