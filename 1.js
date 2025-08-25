document.getElementById('loginBtn').addEventListener('click',function(e){
    e.preventDefault()
    console.log('Login button clicked')

    const mobileNumber=123456789
    const pinnumber=1234
    const mobileNumbervalue=document.getElementById('mobile-no').value
    const pinnumbervalue=document.getElementById('pin-no').value
    const mobileNumbervalueconverted=parseInt(mobileNumbervalue)
    const pinnumbervalueconverted=parseInt(pinnumbervalue)

    if(mobileNumbervalueconverted===mobileNumber && pinnumbervalueconverted===pinnumber){
          
         window.location.href="home.html" 

       
            
    }
    else{
        console.log('Invalid Number or PIN')
    }
})