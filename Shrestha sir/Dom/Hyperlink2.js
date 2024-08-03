const hyperLink = document.getElementById('link')
hyperLink.addEventListener('click',function(e){
    e.preventDefault();
    const url = this.href ;

    
    const width = Math.floor(screen.width/2)
    const height =Math.floor (screen.height/2)
    
    
    const top = Math.floor((screen.height-height)/2);
    const left =Math.floor((screen.width-width)/2);
    
    window.open(url ,'_blank', ` height = ${height}; width= ${width}; top=${top}; left=${left} `);
})

let name = 'Raju';
function getName(){
    let name = 'narayan'
    console.log(name)
}
getName()