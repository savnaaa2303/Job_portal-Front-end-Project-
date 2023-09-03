let navbar=document.querySelector('.header .section .navbar ');
document.querySelector('#menu-btn').onclick= () =>{
    console.log("clicked")
   navbar.classList.toggle('active');
}
window.onscroll= () =>{
    navbar.classList.remove('active');
}
document.querySelectorAll('input[type="number"]').forEach(inputNumber=>{
    inputNumber.oninput=()=>{
        if(inputNumber.value.length>inputNumber.maxlength)inputNumber.value=inputNumber.value.slice(0,inputNumber.maxlength);
    };
});