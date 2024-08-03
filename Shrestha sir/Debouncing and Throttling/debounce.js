let count = 1;
function getData(){
    console.log("function called " + count++)
}

function myDebouncing(callback ,delay){
    let timerId;
    return function(){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            callback()  // getData()
        }, delay);
    }
}

const  myFunc = myDebouncing(getData,1000)

//    ! Drawback 
    // let count = 1;
    // function getData(){
    //     console.log("function called " + count++)
    // }