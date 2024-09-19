document.getElementById('add-btn').addEventListener("click", function(event){
    event.preventDefault();
    const addAmount = document.getElementById('add-amount').value;
    const pin = document.getElementById('pin-number').value;
    
    if(pin==='1234'){
        const inputAmount = parseFloat(addAmount);
        const currentBalance = document.getElementById('current-balance').innerText
        const currentBalanceNumber = parseFloat(currentBalance);
        const updateBalance = inputAmount+currentBalanceNumber
        document.getElementById('current-balance').innerText = updateBalance;
    }
    else{
        alert('wrong Account or Pin! try again');
    }
})

document.getElementById('logout').addEventListener("click", function(){
    window.location.href = ('./login.html');
})