/*****************************************************Q1 */
var num = 44;
if (num > 0){
    console.log("the number is positive");

}else if (num < 0) {
    console.log("the number is negative");
} else {
    console.log("the number is 0");
} 

/*****************************************************Q2 */
for (i=0 ; i<=20 ; i++){
    if(i<12){
        console.log("Good morning");

    } else{
         console.log("Good afternoon");
    }
}
//or 
var time = 3;
  if(time<12){
        console.log("Good morning");

    } else{
         console.log("Good afternoon");
    }

/*****************************************************Q3 */
let score = 60;

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
}
else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
}
else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}

/*****************************************************Q4 */
   let day = "sunday";
    switch (day) {      
    case "Friday":   
        console.log("Almost the weekend!");        
        break;      
    default:        
        console.log("It’s weekday.");   
  }
//another sol.
let days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

for (let i = 0; i < days.length; i++) {

    if (days[i] === "Friday") {
        console.log(days[i] + " : Weekend");
    } 
    else {
        console.log(days[i] + " : Weekday");
    }
}