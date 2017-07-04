// Zadanie 1
var liczby=[1, 11, 111];
for(var i=0; i<3; i++){
  console.log(liczby[i]);
}

// Zadanie 2
var owoce=["banan", "jablko", "truskawki", "jezyny"];
console.log(owoce[0]);
console.log(owoce[owoce.length-1]);
for(var j=0; j<owoce.length; j++){
  console.log(owoce[j]);
}

//Zadanie 3
var numbers=[20, 56, 8, 99, 44, 88, 5, 7, 2, 10];
var sum=0;
for(var k=0; k<numbers.length; k++){
  sum=sum+numbers[k];
}
console.log(sum);

//Zadanie 4
var liczb=[20, 56, 8, 99, 44, 88, 5, 7, 2, 10];
var suma=0;
for(var i=0; i<liczb.length;i++){
  if(liczb[i]%2==0){
    suma=suma+liczb[i];
  }
}
console.log(suma);

//Zadanie 5
var nums=[20, 56, 8, 99, 44, 88, 5, 7, 2, 10];
var max=0;
for(var i=0; i<nums.length; i++){
    if(nums[i]>max){
      max=nums[i];
    }
}
console.log(max);

// Zadanie 6

var tabelaliczb=[2, 1, 12, 8, 4, 6, 8, 6, 54, 6];
var firstIndex=0;
for(var i=0; i<tabelaliczb.length; i++){
  for(var j=i+1; j<tabelaliczb.length; j++){
    if(tabelaliczb[i]==tabelaliczb[j]){
      var przerwa=true;
    }
  }
  if(przerwa==true){
    break;
  }
}
firstIndex=i;
console.log(firstIndex);

//Zadanie 7

var nums1=[20, 56, 8, 99, 44, 88, 5, 7, 2, 10];
for(var i=nums1.length; i>0; i--){
  console.log(nums1[i-1]);
}
