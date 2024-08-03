 function changeColor(){
      if(setBtn.textContent === 'Light')
      {
         document.body.style.cssText="background-color:white; color:black";
         document.getElementById('dark').style.cssText=`background-color:black; color:white`
         document.getElementById('dark').textContent="Dark"
         
      }else{
         
         document.body.style.cssText="background-color:black; color:white";
         document.getElementById('dark').style.cssText=`background-color:white; color:black`
         document.getElementById('dark').textContent="Light"
         }

    
   };
   
   const  setBtn= document.getElementById('dark')
   setBtn.addEventListener('click',()=>{
      setTimeout(() => {
         changeColor()
      }, 100);
})

