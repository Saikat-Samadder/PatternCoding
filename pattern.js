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

// function pattern(){

//     for(let i=1;i<=5;i++){

//         for(let j=1;j<=(6-i);j++){

//             process.stdout.write("*");
//             // console.log(j);
//         }
//         process.stdout.write("\n")
//         // console.log("\n");
//     } 

// }
// pattern();


// function pattern(){

//     for(let i=1;i<=5;i++){

//         for(let j=5;j>=5-(i-1);j=j-1){

//             // process.stdout.write("*");
//             console.log(j);
//         }
//         // process.stdout.write("\n")
//         console.log("\n");
//     } 

// }
// pattern();


// function pattern(){

//     for(let i=1;i<=5;i++){

//         for(let j=1;j<=(6-i);j++){

//             process.stdout.write(" ");
//         //     console.log("");
//         }
//               for(let j=1; j<=i;j++){
//                  process.stdout.write("*");
//        }
//             process.stdout.write("\n");
//     } 

// }
// pattern();

// function pattern(){

//     for(let i=1;i<=4;i++){

//         for(let j=1;j<=(6-i);j++){

//             process.stdout.write(" ");
//         //     console.log("");
//         }
//               for(let j=1; j<=i;j++){
//                 //  process.stdout.write("*");
//                 console.log(i);
//        }
//             // process.stdout.write("\n");
//             console.log("\n");
//     } 

// }
 // pattern()


// var string =" "

// function pattern(){

//     for(let i=1;i<=5;i++){

//         for(let j=1;j<=(6-i);j++){

//             process.stdout.write(" ");
//         //     console.log("");
//         }
//               for(let j=1; j<=i;j++){
//                 //  process.stdout.write("*");
//                 // console.log(j);
//                  string += String.fromCharCode(j+64)
//        }
//             // process.stdout.write("\n");
//             console.log("\n");
//             string += "\n";
//         console.log(string)
//     } 

// }
// pattern()



// function pattern(){

//     for(let i=1;i<=5;i++){

//         for(let j=1;j<=(6-i);j++){

//             process.stdout.write(" ");
//         //     console.log("");
//         }
//          for(let j=1; j<=(i*2)-1;j++){
//                  process.stdout.write("*");
//                 // console.log(j);
//                 //  string += String.fromCharCode(j+64)
//        }
//             process.stdout.write("\n");
//             // console.log("\n");
//         //     string += "\n";
//         // console.log(string)
//     } 

// }
// pattern()

// function pattern(){

//     for(let i=1;i<=5;i++){

//         for(let j=1;j<=(6-i);j++){

//             process.stdout.write(" ");
//         //     console.log("");
//         }
//          for(let j=1; j<=i;j++){
//                 //  process.stdout.write("*");
//                 console.log(j);
//                 //  string += String.fromCharCode(j+64)
//          }

//          for(let j=i-1;j>=1;j--){
//             console.log(j);
//          }
//             // process.stdout.write("\n");
//             console.log("\n");
//         //     string += "\n";
//         // console.log(string)
//     } 

// }
// pattern()

// function exceedingWordtest (word){
//     const upperChars = word
//     .toUpperCase()
//     .replace(/[^A-Z]/g, '') // remove all from str except A to Z alphabets

//   const adjacentDiffList = []

//   for (let i = 0; i < upperChars.length - 1; i++) {
//     // destructuring current char & adjacent char by index, cause in javascript String is an object.
//     const { [i]: char, [i + 1]: adjacentChar } = upperChars

//     if (char !== adjacentChar) {
//       adjacentDiffList.push(
//         Math.abs(char.charCodeAt() - adjacentChar.charCodeAt())
//       )
//     }
//   }

//   for (let i = 0; i < adjacentDiffList.length - 1; i++) {
//     const { [i]: charDiff, [i + 1]: secondCharDiff } = adjacentDiffList

//     if (charDiff > secondCharDiff) {
//       return false
//     }
//   }
//   return true
// }
// console.log(exceedingWordtest ('acgl'))
// console.log(exceedingWordtest ('aebc'))

// function calculateAndReturnName(arr) {
//     // Calculate the sum of the array
//     var sum = arr.reduce(function (accumulator, currentValue) {
//       return accumulator + currentValue;
//     }, 0);
  
//     // Check if the sum is odd or even
//     var result = sum % 2 === 0 ? 'Rudransh' : 'Raghav';
  
//     // Return the result
//     return result;
//   }


// function pattern(){

//         for(let i=5;i>=1;i--){
                
//                 for(let j = 1;j<=5-i; j++){

//                         process.stdout.write(" ")

//                 }
//                    for(let k =1;k<=2*i-1;k++){
                       
//                         process.stdout.write("*")
//                    }
//                    process.stdout.write("\n") 
//                 }
 
//         }
// pattern();

// function pattern(){
//         for(let i=5;i>=1;i--){
             
//                    //Star
//                 for(let j=1;j<=i;j++){

//                         process.stdout.write("* ")
//                 }
//                   //Space
//                 for(let k=1;k<=2*5-2*i;k++){
//                         process.stdout.write("  ") 
//                 } 
                
//                   //Star
//                   for(let j=1;j<=i;j++){

//                         process.stdout.write("* ")
//                   }

//                   process.stdout.write("\n") 

//                 }
//         for(let i=1;i<=5;i++){
             
//                 //Star
//              for(let j=1;j<=i;j++){

//                      process.stdout.write("* ")
//              }
//                //Space
//              for(let k=1;k<=2*5-2*i;k++){
//                      process.stdout.write("  ") 
//              } 
             
//                //Star
//                for(let j=1;j<=i;j++){

//                      process.stdout.write("* ")
//                }

//                process.stdout.write("\n") 


//            }

//         }

// pattern();

// function pattern(){
//         for(let i=1;i<=4;i++){
             
//                    //Star
//                 for(let j=1;j<=i;j++){

//                         process.stdout.write("* ")
//                 }
//                   //Space
//                 for(let k=1;k<=2*4-2*i;k++){
//                         process.stdout.write("  ") 
//                 } 
                
//                   //Star
//                   for(let j=1;j<=i;j++){

//                         process.stdout.write("* ")
//                   }

//                   process.stdout.write("\n") 

//                 }
//         for(let i=4;i>=1;i--){
             
//                 //Star
//              for(let j=1;j<=i;j++){

//                      process.stdout.write("* ")
//              }
//                //Space
//              for(let k=1;k<=2*4-2*i;k++){
//                      process.stdout.write("  ") 
//              } 
             
//                //Star
//                for(let j=1;j<=i;j++){

//                      process.stdout.write("* ")
//                }

//                process.stdout.write("\n") 


//            }

//         }

// pattern();

// pattern();

// function pattern(){
//         for(let i=1;i<=4;i++){
             
//                    //Space
//                 for(let k=1;k<=4-i;k++){ 
//                      process.stdout.write("  ") 
//                 } 

//                  //star
//                 for(let j=1;j<=i;j++){

//                         process.stdout.write("  * ")
//                 }
//                   //Space
//                 for(let k=1;k<=4-i;k++){
//                         process.stdout.write("  ") 
//                 } 

//                   process.stdout.write("\n") 

//               }     

//               for(let i=4;i>=1;i--){
             
//                 //Space
//              for(let k=1;k<=4-i;k++){ 
//                   process.stdout.write("  ") 
//              } 

//               //star
//              for(let j=1;j<=i;j++){

//                      process.stdout.write("  * ")
//              }
//                //Space
//              for(let k=1;k<=4-i;k++){
//                      process.stdout.write("   ") 
//              } 

//                process.stdout.write("\n") 

//            }     
//         }

// pattern();



// function deciToBinary(){
//         let num = 10;
//         let rem;
//         let mul = 1;
//         let ans = 0;
//         while(num>0){
//                 rem = num % 2;
//                 num =parseInt(num/2);
//                 ans = rem*mul+ans;
//                 mul= mul*10;       
//              }
//              console.log(ans);
// }

// deciToBinary();

// var a =10;

// function xyz(){
//         var a =20
// }
// xyz()
// console.log(a);


// function addDigit(num){
//         while(num>9){
//              var ans = 0;
//              var rem;   
//        while(num>0){
             
//                 rem = num%10;
//                 num = parseInt(num/10);
//                 ans = rem + ans
             

//         }

//         num = ans
//      }

//      return num;
// }
// let res = addDigit(38)
// console.log(res);

// function Leapyear(num){
//         if(num%400==0){
//                 console.log("Leap Year");
//         }else if (num%4==0 && num%100!=0){
//                 console.log("Leap Year"); 
//         }else{
//                 console.log("Not a LeapYear");
//         }
// }
// Leapyear(2024);

function ResverseInt(num){
   var ans = 0; var rem ;
        while(num>0){
          
            rem = num%10;
            num = parseInt(num/10);
            ans = ans*10+rem;    
        }

        return ans
}
let res =  ResverseInt(1534236469);
console.log(res);