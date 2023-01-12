var arr=["Hema Sundar","Sundar Raj","SundarLal","Kumar"];
var count =0;
for(i=0;i<arr.length;i++){
// console.log(arr[i])

var names = arr[i].split(" ");
for(j=0;j<names.length;j++){
console.log(names[j]);
if(names[j]==="Sundar"){
    count++;
}
}
console.log("Count is"+count)
}




function sum() 
{
    var a = parseInt(document.getElementById("text1").value);
    var b = parseInt(document.getElementById("text2").value);
    var c =  (a+b)
    window.alert(c)
}

/* To find out the smallest number in an array */
var arr=[20,30,80,3,25,6,9,7,8,1001];
var small = arr[0];
for(i=1;i<arr.length;i++){
    if(arr[i]<small){
        small=arr[i]
    }
}
console.log(small)
/* To find out the how many times repeat the letters or words */
var arr1 =[1,2,3,4,5,6,7,8,9,8,8,8,8,8,8,8,7];
var num1 = 1;
var num2 = 0;
var items;
for(var i=0;i<arr1.length;i++){
    for(var j=i;j<arr1.length;j++){
        if(arr[i]==arr1[j])
        num2++;
        if(num1<num2){
            num1=num2;
            items = arr[i];
        }
    }
    num2=0;
}
console.log(items+"("+num1+"times)");



/*To saparate the strings and number */

var array = ['krishna','78523','ashok','74296521','prasad','9637423954'];
var int = [];
var string = [];
for(i=0;i<array.length;i++){
    if(parseInt(array[i])){
        int.push(array[i])
    }
    else{
        string.push(array[i])
    }
}
console.log(int);
console.log(string);


/*       */ 
function myfunction(){
    var arr2 = ['aasas','jasasasasas','assasasasa','yasasas','asasasasasasasd','asasasau','abcdefghijklmnopqrstuvwxyz'];
    var smallChar = arr2[0];
    for(i=0;i<arr2.length;i++){
        if(arr2[i].length<smallChar.length){
            smallChar=arr2[i];
        }
    }
    console.log(smallChar)
}
myfunction();
