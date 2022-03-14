// function longTimeWork(workFine = true, errorMessage = "test") {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             (workFine) ? resolve(200) : reject(errorMessage);
//         }, 1000);
//     })
// }

function yourWork(x , y){
    return new Promise(function (ok, fail){
        let ans = x + y ;
        ans>300? ok(ans): fail('不夠')
    })
}

function usingLongTimeWork() {
    yourWork(100 , 300)
    .then(function (e) {
            console.log(e);
        })
    .catch(function(e){
        console.log(e);
    })

    // longTimeWork(false, "test")  // try true/false
    // .then(function (e) {
    //     console.log(e);
    // })
    // .catch(function (e) {
    //     console.log('error');
    //     console.log(e);
    // })
}

usingLongTimeWork();
