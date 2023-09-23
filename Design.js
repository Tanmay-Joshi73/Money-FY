
const SignUp_Block = document.getElementById('SignUp');
const Login_Block = document.getElementById('Login');
const Login=document.getElementById('Toogle_Login')
const SignUp=document.getElementById('Toogle-SignUp')

Login.addEventListener('click',()=>{
    SignUp_Block.style.display='none'
    Login_Block.style.display='block'
})
SignUp.addEventListener('click',()=>{
    Login_Block.style.display='none'
    SignUp_Block.style.display='block'
})