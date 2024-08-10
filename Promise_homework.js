const cart =[
    {
        itemName:"shoes",
        itemPrice:2000
    },
    {
        itemName:"Jeans",
        itemPrice:2500
    },
    {
        itemName:"kurta",
        itemPrice:1900
    },
    {
        itemName:"TShirt",
        itemPrice:2200
    },
    {
        itemName:"sleeper",
        itemPrice:600
    }
    
]
let walletBalance=10000;

createOrder(cart)
.then(orderId=>orderId)
.then(orderId=>proceedToPayment(orderId))
.then(orderStatus=>showOrderSummery(orderStatus))
.then(orderHistroy=>updateWallet(orderHistroy))
.then(res=>console.log(res))
.catch(err=>console.log(err.message))

// createOrder(cart)
// .then(function(orderId){
//     return orderId;
// })
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(orderStatus){
//     return showOrderSummery(orderStatus);
// })
// .then(function(ordeHistory){
//     return updateWallet(ordeHistory);
// })
// .then(function(res){
//     console.log(res)
// })
// .catch((err)=>{
//     console.log((err.message))
// })


function createOrder(cart){
    return new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            reject(new Error("Cart is not valid"));
        }
        let orderId=10;
        if(orderId){
            resolve(orderId);
        }
    })
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        if(orderId){
            resolve({paymentStatus:1,message:"Payment Sucessfully completed"});
        }else{
            reject(new Error("Payment Failed"));
        }
    })
}

function showOrderSummery(orderStatus){
    return new Promise(function(resolve, reject){
        if(orderStatus.paymentStatus==1){
            resolve({status:'success',orders:cart})
        }else{
            reject(new Error("Something went wrong"));
        }
    })
}

function updateWallet(ordeHistory){
    return new Promise(function(resolve, reject){
        if(ordeHistory.status==='success'){
            let orderAmount=9200;
            walletBalance = walletBalance-orderAmount;
            resolve({balance:walletBalance,'message':"Wallet Updated"});
        }else{
            reject(new Error("wallet balance not updated"));
        }
    })
}

function  validateCart(cart){
    return true;
}