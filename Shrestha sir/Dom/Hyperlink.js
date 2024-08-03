const myHyperlin = document.getElementById('myLink');
myHyperlin.addEventListener("click",function(e){
    e.preventDefault();
    const url = this.href;

    // !Dimension of a new tab 
    const width = Math.floor(screen.width/2)
    const height = Math.floor(screen.height/2)
    
    // !Positon of tab
    const top = Math.floor((screen.height-height)/2)
    const left = Math.floor((screen.width-width)/2)

    window.open(url,'_blank' ,`width=${width} ,height=${height} ,top=${top} ,left=${left} `)
})