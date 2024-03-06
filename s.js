// let a;
// let b; 
//  function swap(a,b){
//     let temp;
    
//     temp = a;
//     a = b;
//     b = temp;
//     return[a,b];
    
//  }
//  let results = console.log(swap(`{a:${5},b:${8}}`));
//  console.log(results);
//  let result = `{a:${8},b:${5}}`
//  console.log(result);
 

//  function swap(x,y){
//     var t = x;
//     x = y;
//     y = t;
//     return [x,y];
//    }
   
//    console.log(swap(2,3));
//  function addNumber(num1,num2){
//    let sum= num1+num2;
//    return sum;
//  }
//  console.log(addNumber(5,2));
// let num = 5;
// let name1 = 6;
// let results = `zsdbvkjahbva${num}zbdva${name1}`;
// console.log(results);
// function main() {
//     var a =5;
//     var b =8;
//     var temp;
//     temp = a;
//     a = b;
//     b = temp;
//     return [a,b];
// }
// console.log(main());
// function main() {
//     var a = 15
//     var b = 5
//     const c =(a%b)
//     console.log(c);
// }
// function main(){
//     let n = 5;
//  let sum = 0;
//  for(let i =1;i<=n;i++){
//     sum= sum+i;
//  }
//  return sum;
// }
// console.log(main());
// function numberSum(N) {
//     var total = 0;
//       for(var i = 1; i <= N; i++){
//         total += i;
//       }
//       return total;
//   }
//   console.log(numberSum(5));
// function main(){
//  let sum = 0;
//  for(let i =1;i<=5;i++){
//     sum= sum+i;
//  }
//  console.log(sum);
// }
// function main() {
//     let n = 5;
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//     sum += i;
//     }
//     return sum;
//     }
// console.log(main());
// function main() {
//     var a = 5;
//     var b = 8;

//          temp = a;
//          a = b;
//          b = temp;
//          return [a,b];
// }
// console.log(main());
//  function callDB(){
//     setTimeout(()=>{
//      console.log("DB call done");
//      return 50;
//     },4000)
//  }
//  const result =callDB();
//  console.log(result);
// class Animal{
//    oops;
//    yoo;
//    constructor(o,y){
//       this.oops = o;
//         console.log("my name is")
//    }
// }
// let saikat = new Animal("susmit","kirti");
// console.log(saikat.oops)
// let rupam = new Animal("didi","jhilik");
// console.log(rupam.oops)

// let saikat = {
//        name : "dog",
//        bark : function(){
//          console.log(this.name,"is a very dengarous animal")
//        }
// }

// let susmit = {
//    name : "cat",
//    chirp : function(){
//      console.log(this.name,"is a very shameless animal")
//    }
// }
// let speak = saikat.bark.bind(susmit);
// speak();
// let speak1 = susmit.chirp.bind(saikat);
// speak1();
// let person = {
// 	first_name: 'John',
// 	last_name: 'Doe',

// 	//method
// 	getPersonDetails: function() {
// 		return `The name of the person is
// 				${person.first_name} ${person.last_name}`
// 	},
// }

// console.log(person.first_name);
// console.log(person.getPersonDetails());
// const r1 = new RegExp(/^a/);
// const r2 = new RegExp(/^a...e$/);
// console.log(r2.test('abdbe'));


// program to validate the phone number

// function validatePhone(num) {

//     // regex pattern for phone number
//     const re = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/g;

//     // check if the phone number is valid
//     let result = num.match(re);
//     if (result) {
//         console.log('The number is valid.');
//     }
//     else {
//         let num = 9513164998;
//         validatePhone(num);
//     }
// }

// // take input
// let number = 9513164998;

// validatePhone(number);


// program to validate the email address

// function validateEmail(email) {

//     // regex pattern for email
//     const a = /\S+@\S+\.\S+/g;

//     // check if the email is valid
//     let result = a.test(email);
//     if (result) {
//         console.log('The email is valid.');
//     }
//     else {
//         let newEmail = 'Enter a valid email:';
//         validateEmail(newEmail);
//     }
// }

// // take input
// let email = 'saikat.samadder';

// validateEmail(email);

// let a = "Hello";
// for (let i = 0;i<a.length-1;i--);
// console.log(a);

// function reverseString(str){
//    let newString = " ";
//    for(let i = str.length-1;i>=0;i--){
//    newString = newString + str[i]
//    }
//    return newString;
// }
// let a = reverseString('hello');
// console.log(a);

// function print(n){
//     console.log(n);
//      newNumber = n+1;
//     if(newNumber<=10){
//     print(newNumber);
//     }
// }
// print(1);
// function factorial(n){
//     let fact = 1;
//     for(let i=1;i<=n;i++){
//         fact = fact * i;
//     }
//  return fact;
// }
// let a = factorial(5);
// console.log(a);

// function fact(num){
//     let fact = 1;
//     for(i=1;i<=num;i++){
//     fact = fact*i;
//     }
//     console.log(fact);
//     }
//     let num = 5;
//     fact(num);

// class Stack{
//  constructor(){
//     this.items = [];
//  }
//  add(element){
//     this.items.push(element);
//  }
//  remove(){
//     this.items.pop();
//  }
//  peek(){
//     let len = this.items.length;
//     return this.items[len-1];
//  }

// }
// let Stack1 = new Stack();
// Stack1.add(1);
// Stack1.add(2);
// Stack1.add(3);
// console.log(Stack1.items);
// console.log("after removing element");
// Stack1.remove();
// console.log(Stack1.items);
// Stack1.peek();
// console.log(Stack1.peek());

// class Stack{
//     constructor(){
//         this.items=[];
//     }
//     add(elements){
//        return this.items.push(elements);
//     }

//     remove(){
//         if(this.items.length>0){
//             return this.items.pop();
//         }
        
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
// }

// let stack = new Stack();
// stack.add(20);
// stack.add(40);
// stack.add(30);
// stack.add(40);
// stack.add(50);
// console.log("after adding elements")
// console.log(stack.items);
// console.log("after removing elements")
// stack.remove();
// stack.remove();
// console.log(stack.items);

// function BubbleSort(arr){
//     for(let i = 0;i<arr.length;i++){
//       for(let j = 0;j<arr.length-i-1;j++){
//           if(arr[j]>arr[j+1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//           }
//       }
//     }
//     console.log(arr);
// }
// let arr = [21,65,98,2,45,56,1,65];
// BubbleSort(arr);

// let node1 = new node(15);
// let node2 = new node (20);
// node0.next = node1;
// node1.next = node2;
// let ll = new linkedList(node0);
// const lll_size  = list.size();


// function SelectionShort(arr){
//   var i,j,min_index;
//  for(i=0;i<arr.length-1;i++){
//    min_index = i;
//    for(j = i+1;j<arr.length;j++){
//       if(arr[j]<arr[min_index]){
//         min_index = j;
//       }
//    }
//    let temp = arr[i];
//    arr[i] = arr[min_index];
//    arr[min_index] = temp;
//  }
//  console.log(arr);
// }
// let arr = [20,25,1,17,56,27];
// SelectionShort(arr);


// function Insertion(arr){
//   for(let i = 1;i<arr.length;i++){
//     let curr = arr[i];
//     let prev = i-1;
//     while(prev>=0 && arr[prev]>curr){
//      arr[prev+1] = arr[prev];
//      prev--;
//     }
//      arr[prev+1] = curr;
//   }
//   console.log(arr);
// }
// let arr = [20,25,1,17,56,27];
// Insertion(arr);


// function BubbleSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-i-1;j++){
      
//       if(arr[j]>arr[j+1]){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// let arr = [25,65,45,55,85,98];
// BubbleSort(arr);

// function SelectionShort(arr){
//   for(let i=0;i<arr.length-1;i++){
//     let min_index = i;
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[j]<arr[min_index]){
//        min_index = j;
//       }
//     }
//      let temp = arr[i];
//      arr[i] = arr[min_index];
//      arr[min_index] = temp;
//   }
//   console.log(arr);
// }
// let arr = [25,65,45,55,85,98];
// SelectionShort(arr);

// function quickSort(arr,s,e){
//   if(s>=e){
//     return;
//   }
//   let p = partition(arr,s,e);
//   quickSort(arr,s,p-1);
//   quickSort(arr,p+1,e);
// }
// function partition(arr,s,e){
//   let pivot = arr[s];
//   let count = 0;
//   for(let i =s+1;i<=e;i++){
//     if(arr[i]<=pivot){
//      count++;
//     }
//   }
//   let pivotIndex = s+count;

//   let temp = arr[s];
//   arr[s] = arr[pivotIndex];
//   arr[pivotIndex] = temp;

//   let i = s; j = e;
//   while(i<pivotIndex && j>pivotIndex){
//      while(arr[i]<=pivot){
//          i++;
//      }

//   while(arr[j]>=pivot){
//     j--;
// }
//   if(i<pivotIndex && j>pivotIndex){

//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//    }
//   }
//   return pivotIndex;
// }
// arr = [5,6,8,7,9,3,12,10,15,1,4];
// quickSort(arr,0,10);
// console.log(arr);

// function quickSort(arr, s, e){
//   if(s>=e){
//       return;
//   }
//   let p = partition(arr,s,e);
//   quickSort(arr,s,p-1);
//   quickSort(arr,p+1,e);
// }

// function partition(arr, s, e){
//   let pivot = arr[s];
//   let c = 0;
//   for(let i=s+1; i<=e; i++){
//       if(arr[i]<=pivot){
//           c++;
//       }
//   }
//   let pivotIndex = s + c;
//   let t = arr[pivotIndex];
//   arr[pivotIndex] = arr[s];
//   arr[s] = t;

//   let i=s, j=e;
//   while(i<pivotIndex && j>pivotIndex){
//       while(arr[i]<=pivot){
//           i++;
//       }
//       while(arr[j]>=pivot){
//           j--;
//       }
//       if(i<pivotIndex && j>pivotIndex){
//           let t= arr[i];
//           arr[i] = arr[j];
//           arr[j]=t;
//       }
//   }
//   return pivotIndex;

// }

// arr = [5,4,1,2,3]
// quickSort(arr, 0, 4)
// console.log(arr)

// let a = ['Saikat','Kirti','Didi'];
// let aa = 'Saikat';
// let b = 'jhilik';
// let c = 'Susmit';

// let d = a.concat(''," ",c);
// console.log(d);

// let e = b.toUpperCase();
// console.log(e);
// let f = b.toLowerCase();
// console.log(f);
// let g = aa.split();
// console.log(g);

// a.sort();
// console.log(a);


// function rectangleArea(width, height) {
//   let area = width * height;
//   // return area;
// }
// console.log(rectangleArea(5, 7)) // Prints undefined

// let person = {
// 	first_name: 'John',
// 	last_name: 'Doe',

// 	//method
// 	getPersonDetails: function() {
// 		return `The name of the person is
// 				${person.first_name} ${person.last_name}`
// 	},
// }

// console.log(person.first_name);
// console.log(person.getPersonDetails());

// class saikat{
//     constructor(head=null){
//     this.head = head;
//     }
// }



// let node1 = new node(15);
// let node2 = new node (20);
// node0.next = node1;
// node1.next = node2;
// let ll = new linkedList(node0);
// const lll_size  = list.size();

// class Node{
//   constructor(data,next = null){
//   this.data = data;
//   this.next = next;
//   }

//   addFirst(data){
//    node  = new node(data);
//    if(hade == null){
//     head==tail==new node;
//     return;
//    }
//    node.next = head;
//    head = node;
//   }
// }
// Node.addFirst(1);
// Node.addFirst(2);


// sum = 0;
// for(let i =0;i<=10;i++){
//  sum= sum+i;
// }
// console.log(sum

// (function(){
//     console.log("Saikat");
//     console.log("Samadder");
// })();

// let x = new Date();
// console.log(x)

// const arr = [2,3,6,4,5,6];

// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }
// const output = arr.map(function triple(x){
//     return x*3;
// });
// console.log(output);

// const arr = [2,3,6,4,5,6];

// function isodd(x){
//     return x%2;
// }

// const output = arr.filter(isodd);
// console.log(output);

// const output = arr.reduce(function(acc,crr){
//     if(crr>acc){
//       acc = crr
//     }
//     return acc;
// },0);
// console.log(output)
// const hero =(rupam)=>{
//   return (rupam? 'Saikat': 'Papai')
// }
// console.log (hero(false))

// const hero =['fdg','sdrfg','sagrdg','dsbg','dsg']

// for(let i =0;i<hero.length;i++){
//   console.log(hero[i])
// }
// hero.forEach((element,index,array)=>{
//  console.log(element + " "+"index : " +index)
// })
// const hero =['fdg','sdrfg','sagrdg','dsbg','dsg']

// let newArr1  = hero.map((element,index,arr)=>{
//      return `index no =${index} and the value is ${element} belong with this ${arr}`
// })
// console.log(newArr1)
// let arr = [2,3,4,6,8]
// let hero = arr.map((crelm)=>(crelm*2)).filter((crelm)=>crelm>10).reduce((accumulator,crelm)=>accumulator+=crelm)
// console.log(hero)

// let hero =arr.filter((asd)=>{
//     return asd>4
// })
// console.log(hero)

// let iss = "my name is khan sajb kj asblkefb lakj ljaaaaawilaejhfl j lierueg nsj vzm,xzcv uireanl;nriwe;as,mcx ieurh rjmgnerg"
// let yoo = iss.slice(0,100)
// let hmm = iss.length
// console.log(hmm)

// let curdt = new Date();
// console.log(curdt.toLocaleString());

// const A = 10.256
// console.log(Math.round(A))
// console.log(Math.round(Math.random()*10))


// let yoo = [12,21,33,6,36,41,456145,1324123,4,1256423,4312]

// console.log(yoo[0])
// console.log(yoo[1])
// console.log(yoo[2])
// console.log(yoo[3])

// let [das,sdasad,asdf,fasd,fd,af] = yoo
// console.log(das)

// sum(5)(6)(2)

// function sum(num1){
//     // return(num1)
//    return function(num2){
//     // return(num1,num2)
//       return function(num3){
//     console.log(num1,num2,num3)
//    }
//   }
// }
// var add = function() {
//     return x + y;
// };

// var result = add(3, 5); // result will be 8
// console.log(result)
// console.log("gucgh")
// }
// add()
// var numbers = [1, 2, 3, 4, 5];

// let as = numbers.map(function(number) {
//     return number * 2;
// });
// console.log(as)
// let as = [2,3,26,26,52,52,3,2]
// as.unshift(5,2)
// console.log(as);
// let output = as.filter((x)=>(x % 2))
// console.log(output)
// function doSomethingAsync(callback) {
//   setTimeout(() => {
//     console.log("Async operation done!");
//     callback();
//   }, 1000);
// }

// function callbackFunction() {
//   console.log("Callback function executed!");
// }

// doSomethingAsync(callbackFunction);

// let arr = [25,9,22,12,46,2]

// let start = 0;
// let end = arr.length-1;
// let temp = 0;

// function rsv (){
//   while(start<end){
//     temp = arr[end];
//     arr[end] = arr[start];
//     arr[start] = temp;
//     start++;
//     end--;
// }
// }
// rsv();
// for(let i=0;i<arr.length;i++){
//      console.log(arr[i]);
// }




// let num = 2154687
// let add = 0;
// while(num>0){
   
//   let rem= num % 10;
//   add = add*10+rem;
//   num = Math.floor(num /10)
// }
// console.log(add);

// let a = ''

// console.log(typeof a);

// let crrTime = new Date().toLocaleTimeString();

// function yo(){
//     setInterval(() => {
//         console.log(crrTime);
//     },1000);
// }
// yo()


//  var, let , const 

// var abc = "Saikat";

// abc = "jhilik"


//  === dif == ???


// let a = 15;

// let b = 25;

// if(a<b  &&  b>a ){
//     console.log("its true");
// }else{
//     console.log("its false");
// }

// const http = require('http')
// const data = require('./saikat')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type' : 'applocation\json'})
//     resp.write(JSON.stringify(data))
//     resp.end()
// }).listen(4000)

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'Saikat'
// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('isaikat');
//     let response = await collection.find({dfvbdfb:"ghkh"}).toArray();
//     console.log(response); 
// }

// getData();

// function climbStairs(n) {
//   if (n <= 2) {
//     return n;
//   }

//   const dp = new Array(n + 1);

//   // Initialize base cases
//   dp[1] = 1;
//   dp[2] = 2;

//   // Fill the DP array using a bottom-up approach
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// }

// // Example usage:
// const n = 5;
// const ways = climbStairs(n);
// console.log(`The number of distinct ways to climb ${n} stairs is: ${ways}`);



// (function saikat(){
//     console.log("kdbhgkv0");
// })();


// let yoo = [2,5,6,8,7]

// let res = yoo.map((num)=>{
//     return num*2;
// })

// console.log(res);


// function saikat (){
//   let ss = "samadder"
//    function ds (){
//       console.log(ss);
//    }
//    ds()
// }

// saikat()

// function loop (){
//     for(let i=2;i<10;i=i+2)
//     if(i%2==0){
//         console.log(i);
//     }else{
//         console.log(i);
//     }
// }

// loop();
//  let n = 1; 

//       if(n<2){
//         console.log("its a prime number");
//          return 0;
//       }else{

//         for(i = 2;i<n;i=i+1){
//               if(n%i==0){
//               console.log("not a prime number"); 
//               return 0;
//               }else{
//               console.log("prime number");
//               return 0;
//               }

//         }
        
//     }

// for(let i=1;i<=5;i=i+1){
//     for(let j=1;j<=5;j=j+1){
//         process.stdout.write('*')
//     }
//     process.stdout.write('\n')
// }

//   MIn Value

// let arr = [5,6,2,1,4,8];
// let ans = 4;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<ans){
//         ans = arr[i]
//     }
// }
// console.log(ans);

//   MAX Value


// let arr1 = [5,6,2,1,4,8];
// let ans1 = 4;
// for(let i=0;i<arr.length;i++){
//     if(arr1[i]>ans){
//         ans1 = arr1[i]
//     }
// }
// console.log(ans1);

// let arr =  [2,5,63,5,48,96,3]

// let find = 48;
// let index;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]== find){
//         index = i;
//     }
// }
// console.log(index);



// let arr =  [2,5,63,5,48,96,3]

// let j = arr.length-1;
// let i = 0;
// let temp;

// while(i<j){
//     temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
//     j--;
//     i++;
// }
// console.log(arr);

// let arr =  [2,5,63,5,48,96,3]

// let temp;

// for(let i=0;i<arr.length;i++){

//     for(let j= i+1;j<arr.length;j++){
         
//          if(arr[i]<arr[j]){

//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//          }
//     }
// }
// console.log(arr[1]);



// let N = 7;
// let arr =[1,2,3,4,5,7]

// let sum = 0;

// for(let i=0;i<arr.length-1;i++){
//     sum= sum + arr[i]
// }

// let ans = N*(N-1)/2;

// let res = ans-sum;

// console.log(res);



// let n = 5;

// let arr=[0,1,1,2,3,5,8]

// arr[0] = 0;
// arr[1] = 1;

// for(let i=2;i<n-1;i++){
 
//     arr[i]= arr[i-1]+arr[i-2]

    
// }
// console.log(arr[n-1]);



//pattern



// for (let i = 0; i<=4; i++) {
//     for(let j=0;j<=i;j++){
//         process.stdout.write("*")
        
//     }
//     process.stdout.write("\n")
// }


// for (let i = 1; i<=4; i++) {
//     for(let j=1;j<=i;j++){
//         // process.stdout.write("*")
//         console.log(j);
//     }
//     process.stdout.write("\n")
// }


// for (let i = 1; i<=4; i++) {
//     for(let j=1;j<=i;j++){
//         // process.stdout.write("*")
//         console.log(i);
//     }
//     process.stdout.write("\n")
// }


// for (let i = 0; i<=4; i++) {
//     for(let j=1;j<=5-i;j++){
//         process.stdout.write("*")
//         // console.log(i);
//     }
//     process.stdout.write("\n")
// }


// for (let i = 0; i<=4; i++) {
//     for(let j=1;j<=5-i;j++){
//         // process.stdout.write("*")
//         console.log(j);
//     }
//     process.stdout.write("\n")
// }



// for (let i = 0; i<=4; i++) {

//     for(let j=1;j<=5-i;j++){
//         process.stdout.write(" ")
//         // console.log(j);
//     }
//          for(let k=1;k<=(2*i+1);k++){
//             process.stdout.write("*")
//         }
//                  process.stdout.write("\n")
// }


// for (let i = 0; i<=4; i++) {

//     for(let j=1;j<=i;j++){
//         process.stdout.write(" ")
//         // console.log(j);
//     }
//          for(let k=1;k<=2*4-(2*i+1);k++){
//             process.stdout.write("*")
//         }
//                  process.stdout.write("\n")
// }


// for (let i = 0; i<=4; i++) {

//     for(let j=1;j<=5-i;j++){
//         process.stdout.write(" ")
//         // console.log(j);
//     }
//          for(let k=1;k<=(2*i+1);k++){
//             process.stdout.write("*")
//         }
//                  process.stdout.write("\n")
// }

// for (let i = 0; i<=5; i++) {

//     for(let j=1;j<=i;j++){
//         process.stdout.write(" ")
//         // console.log(j);
//     }
//          for(let k=1;k<=2*5-(2*i+1);k++){
//             process.stdout.write("*")
//         }
//                  process.stdout.write("\n")
// }



// for(let i=0; i<=4; i++){
//       for(let j=0;j<=i;j++){
//          process.stdout.write("*")
//       }
//       process.stdout.write("\n")
// }
// for(let i=1; i<=4; i++){
//      for(let j=0;j<=4-i;j++){
//         process.stdout.write("*")
//      }
//      process.stdout.write("\n")
// }

//  let start = 1
// for(let i=0; i<=4;i++){
//     if(i%2==0){
//       start = 1;
//     }else{
//       start = 0;
//     }
//    for(let j=0; j<=i;j++){
//       console.log(start);
//       start = 1- start;
//    }

//    process.stdout.write("\n")
// }


// for(let i=0;i<=3;i++){
    
//    for(let j=0; j<=i;j++){
//       process.stdout.write("*")
//    }
//       for(let k=0;k<=2*(3-i);k++){
//          process.stdout.write(" ")
//       }
//       for(let j=0; j<=i;j++){
//          process.stdout.write("*")
//       }
//       process.stdout.write("\n")
// }

// let num = 1;
// for(let i=0;i<=4;i++){

//    for(let j=1;j<=i;j++){
//        console.log(num);
//        num = num + 1
//    }
//    process.stdout.write("\n")
// }


for( let i = 0; i <= 100; i++){

    if( i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz.");
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
