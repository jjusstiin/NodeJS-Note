function longTimeWork(workFine =false , errorMessage = "error") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve(200) : reject(errorMessage);
        }, 1000);
    })
}

// async function usingLongTimeWork() {
//     var result = await longTimeWork(true, "test");
//     console.log(result);
// }

async function main(){
    // let p = longTimeWork(true, "...");
    //     let result = await p;
    let result = await longTimeWork();
    console.log(result);
    
}

main();

// async function usingLongTimeWork() {
//     try {
//         var result = await longTimeWork(false, "test");
//         console.log(result);
//     }
//     catch (e) {
//         console.log(e);
//     }
    
// }

// usingLongTimeWork();
