// function pattern(){
//   var count = 1;
//     for(let row=1;row<5;row++){

//         for(let j=1;j<=5;j++){
//             // process.stdout.write(j)
//             console.log(count);
//             count++;
//         }
        // process.stdout.write("\n")
//     }
// }
// pattern()

// function factorial(num){

//    for(let i=1;i<=5;i++){
//      num = num*i;
//    }
//    console.log(num);
// // return num
// }
// factorial(1);

// function pattern(){

//     for(let i=1;i<5;i++){

//         for(let j=1;j<=i;j++){
            
            //  process.stdout.write(i)
        //     console.log(j);
        // }
        // process.stdout.write("\n")
//         console.log("\n");
//     }
// }
// pattern();

// function pattern(){

//     for(let i=1;i<5;i++){

//         for(let j=1;j<=i;j++){
            
            //  process.stdout.write("*")
        //     console.log("*");
        // }
        // process.stdout.write("\n")
        // console.log("\n");
//     }
//  }
// pattern();


// var string = "";

// function pattern(){

//     for(let i=1;i<=5;i++){
        
//         for(let j=1;j<=i;j++){
  
//              string += String.fromCharCode(i+64);
         
//         }
//         // console.log("\n");
//         string += "\n";
//         console.log(string);
//     }
// }
// pattern();

function pattern(){

    for(let i=1;i<=5;i++){

        for(let j=1;j<=(6-i);j++){

            process.stdout.write("*");
        }
        process.stdout.write("\n")
    } 

}
pattern();