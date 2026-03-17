let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[0]);
console.log(colors[4]);
console.log(colors[1]);
colors.splice(2,1,"orange");
console.log(colors);
/*********************************************************** */
let numbers = [10, 20, 30, 40, 50];
for( var i=0 ; i<numbers.length ; i++){
    console.log(numbers[i]);
 }
 
for( var i=numbers.length-1 ; i>=0; i--){
    console.log(numbers[i]);
 }
 
/*********************************************************** */
let nums = [5, 10, 15, 20, 25];
 if(nums.indexOf(25)!==-1){
    console.log('Found at postion'+" "+nums.indexOf(25));
 }else{
     console.log('Not found');
 }
/*********************************************************** */
 let scores = [50, 20, 70, 10, 40];
 console.log(scores.sort((a, b) => a - b));
 console.log(scores.sort((a, b) => b - a));
/*********************************************************** */
 let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
  console.log(names.sort());



/*********************************************************** */
   let animals = ["dog", "cat", "rabbit"];
    console.log(animals.push("elephant"));
    console.log(animals);
    console.log(animals.unshift("lion"));
    console.log(animals);

    console.log(animals.splice(2,0,"tiger"));// start ,delete 
    console.log(animals);
/*********************************************************** */
let fruits = ["apple", "banana", "cherry", "date"];
  console.log(fruits.shift());
  console.log(fruits);
  console.log(fruits.pop());
  console.log(fruits);
  console.log(fruits.splice(0,1));
  console.log(fruits);

  /*********************************************************** */
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  console.log(array1.concat(array2));
  /*********************************************************** */
   let items = ["a", "b", "c", "d", "e"];
    console.log(items.slice(0,3));//start,end not include.
     console.log(items.slice(3));

 /*********************************************************** */
 let numberrs = [1, 5, 10, 15, 20, 25, 30];
 let newArray =[];
numberrs.forEach(function(num) {  
    if(num > 15){
         console.log(newArray.push(num));  
    }  
       
    });
     console.log(newArray);
     
 /*********************************************************** */
let arr = [1, 2, 2, 3, 4, 4, 5];
let newArr = [];

arr.forEach(function(num) {
    if (newArr.indexOf(num) === -1) {
        newArr.push(num);
    }
});

console.log(newArr);

 /*********************************************************** */
 let arr1=[1,3,5];
 let arr2=[2,4,6];

let news = [];
let i = 0;  
let j = 0;  

 
while ( i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        news.push(arr1[i]);
        i++;
    } else {
        news.push(arr2[j]);
        j++;
    }
}


while (i < arr1.length) {
    news.push(arr1[i]);
    i++;
}

while (j < arr2.length) {
    news.push(arr2[j]);
    j++;
}

console.log(news);
//  join=arr1.concat(arr2);
//   console.log(join);
//   let news=[];
//    for(i=0; i<arr1.length; i++){
//      for(j=0; j< arr2.length; j++ ){
//         if(arr1[i]<arr2[j] && arr1[i]===-1){
//             news.push(arr1[i]);
//         }else if (arr1[i]>arr2[j] && arr2[j]===-1) {
//             news.push(arr2[j]);
//         } else {
        
//      }
//    }
//    console.log(news);
//   arr1.forEach(function(num){
//      if(num.indexOf()===-1){
//         news.push();
//      }
//   }); 
//  arr1.forEach(function(num){

//   }); 

 


