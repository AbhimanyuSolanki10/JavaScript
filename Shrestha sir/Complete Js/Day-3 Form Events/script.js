const myform=document.getElementById('myForm')

myform.addEventListener("submit",(event)=>{
    event.preventDefault()
  const userName=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const password=document.getElementById('pass').value;
  console.log(userName)
  console.log(email)
  console.log(password)
})

myform.addEventListener("reset",(event)=>{
    event.preventDefault()
})