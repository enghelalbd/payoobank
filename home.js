document.getElementById('addmoneyBtn')
.addEventListener("click",function(e){
    e.preventDefault()
      console.log('Add money button clicked')
    
    const bank=(document.getElementById('bank-name').value)
    const acount=(document.getElementById('bank-account').value)
    const amount= parseInt(document.getElementById('add-amount').value)
    const pin=parseInt(document.getElementById('pin-no').value)
    

    const availableblance= parseInt(document.getElementById('available-blnc').innerText)
    console.log(availableblance)

    if(acount.length<11){
      alert('Please provide a Valid Account no')
    }

    const currntbalance=availableblance+amount
    console.log(currntbalance)
   
    document.getElementById('available-blnc').innerText=currntbalance


})