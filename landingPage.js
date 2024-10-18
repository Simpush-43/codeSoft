const hamBurger = document.getElementById('hamburger');
console.log('hamBurger')
const navMenu = document.querySelector('.nav-container');
const navJoin = document.querySelector('.nav-join');
console.log('nav menu milgya');

hamBurger.addEventListener('click', () => {
  console.log("hamBurger button is clicked")
  navMenu.classList.toggle('active');
  hamBurger.classList.toggle('active');
  navJoin.classList.toggle('active');
})
// NAV MENU 
document.querySelectorAll('nav-container a').forEach(anchor => {
    anchor.addEventListener('click' , function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// BLINKING EFFECT 
const exclamation = document.querySelector('.exclamation');
setInterval(() => {
  exclamation.style.opacity = exclamation.style.opacity === '1' ? '0' : '1';
}, 400);

// LOGIN FORM
const loginBtn =
 document.getElementById('loginBtn');
 console.log("Login button milgya")
const signupBtn = 
document.getElementById('signupBtn');
console.log("signup button milgya")
const loginModal =
 document.getElementById('loginModal');
 console.log("Login modal milgya")
const signupModal =
 document.getElementById('signupModal');
 console.log("Sign up modal milgya")
const closeButtons = 
document.querySelectorAll('.close');
console.log("close button milgya")
const signupBtn1 =document.getElementById('')
if(loginBtn){
loginBtn.addEventListener('click' ,() =>{
    console.log("login button is clicked")
    loginModal.style.display = 'flex';

})  
}else{
    console.log('element not found')
;}

signupBtn.addEventListener('click' ,() =>{
    console.log("signup button is clicked")
    signupModal.style.display = 'flex';

})  

closeButtons.forEach(function(btn){
    btn.onclick = function(){
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    }
});
window.onclick = function(event) {
    if (event.target === loginModal){
        loginModal.style.display ='none';
    }
    if(event.target === signupModal){
        signupModal.style.display = 'none';
    }
}

const SignUpBtn2 = document.getElementById('signupBtn2');
console.log("Dusra Button bhi mil gyaa");
SignUpBtn2.addEventListener('click' , () =>{
    signupModal.style.display = 'flex';
})
const SignUpBtn3 = document.getElementById('signupBtn3');
console.log('Yeh button bhi mil gya');
SignUpBtn3.addEventListener('click', ()=>{
    signupModal.style.display = 'flex';
})
