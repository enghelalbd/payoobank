//  Login Button Funcunality 
document.getElementById("login-btn")
.addEventListener("click",function(e){
    e.preventDefault()
    console.log('Login Button Clicked')
    const mobileNumber=1924885560;
    const pinNumber=1234

    const mobileNumbervalue=document.getElementById('mobile-number').value
    const pinNumbervalue=document.getElementById('pin-number').value
    console.log(mobileNumbervalue)

    const mobileNumbervalueconvarted=parseInt(mobileNumbervalue)
    const pinNumbervalueconverted=parseInt(pinNumbervalue)

    if(mobileNumbervalueconvarted===mobileNumber && pinNumbervalueconverted===pinNumber){
        // console.log('All value matched')
        window.location.href="home.html"

    }

    else{
        // console.log('Invalid')
        alert(" Invalid Input")
    }
})