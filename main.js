/*Design JavaScript method to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference*/


let a=prompt("enter the value");
let b=prompt("enter the value");

let num=function(a,b){

let num=a-b;

if(num>b){
    let result=num+num;
    document.write(result);
}
else{
    document.write(num);
}

}
num(a,b)
