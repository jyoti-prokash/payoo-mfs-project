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
        const p = document.createElement('p');
        p.style.color= 'red'
        p.style.fontSize= '20px';
        p.innerText=`add balance: ${inputAmount} new balance:${updateBalance}`
        document.getElementById('transection').appendChild(p);
    }
    else{
        alert('wrong Account or Pin! try again');
    }
})
document.getElementById('logout').addEventListener("click", function(){
    window.location.href = ('./login.html');
})

document.getElementById('trx').addEventListener("click", function(){
    document.getElementById('transection')
})
