/*document.addEventListener("wheel",()=>{
    console.log("Scrolling..")
}) */

    document.addEventListener("scroll",()=>{
        let scrollPosition=window.scrollY;
        if(scrollPosition>=1200){
            document.body.style.backgroundColor="black"
        }
        else if(scrollPosition>=900){

            document.body.style.backgroundColor="orange"
        }
        else if(scrollPosition>=600){                     
            document.body.style.backgroundColor="teal"
        }
        else if(scrollPosition>=300){
            console.log("Scroll-1")
            document.body.style.backgroundColor="violet"
        }        
        else{
            document.body.style.backgroundColor="white"
        }
    })