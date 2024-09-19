// login form

document.getElementById('button').addEventListener("click", 
function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber)
    if(phoneNumber==='01746153493' && pinNumber==='1234'){
        alert("you have log in success");
        window.location.href = './home.html'
    }
    else{
            alert('wrong number and password');
    }
})