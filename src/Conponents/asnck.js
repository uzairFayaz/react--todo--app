// let promis1 = new Promise((resolve, reject) =>{
//     let a = Math.random();
//     if(a > 10){
//     setTimeout(()=>{
//         console.log("hello");
//         resolve("hello");
//     })
// } else{
//     setTimeout(()=>{
//         console.log("bye");
//         reject("bye");
//     })
// }})
// promis1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("data fetched");
        }, 2000);
    });
}

async function data(){
    console.log('data fetching.....')
    console.log('data');
    let result = await getData();
    console.log(result);
    console.log('data fetched');
    
}
data();