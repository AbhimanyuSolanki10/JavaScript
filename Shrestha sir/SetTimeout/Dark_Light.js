const darker = document.getElementById("dark");
const lighter = document.getElementById("light");

let timer;
darker.addEventListener('click',function(){
   timer= setTimeout(function(){
        document.body.style.cssText="background-color:black; color:white; border:1px solid red;";
        
    },1);
});

lighter.addEventListener('click',function(){
    
    document.body.style.cssText="background-color:green; color:black; border:1px solid yellow;";
    setTimeout(timer);
})

