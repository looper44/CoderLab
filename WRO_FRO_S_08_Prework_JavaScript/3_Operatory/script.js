//Zadanie 1
var zmienna1=true;
var zmienna2=false;
console.log(zmienna1==zmienna2);
/* Jeśli zmienne mają taką samą wartość, to wynikiem porównania
jest wartość true. Jeśli są różne, to wynikiem jest wartość false.*/

//Zadanie 2
var zm1=5;
var zm2=22;
var resultModulo=0;
resultModulo=22%5;
console.log(resultModulo);

//Zadanie 3
var string1="Ala";
var string2="kot";
var joinedStrings="";
joinedStrings=string1+string2;
console.log(joinedStrings);

//Zadanie 4
var myNumber=4;
var myString="4";
console.log(myNumber==myString);
console.log(myNumber===myString);
/*Pierwsze porównanie daje wartość true, ponieważ operacja == porównuje
tylko wartość zmiennych, a nie ich typy. Operacja === sprawdza także
typy zmiennych, więc jej wynikiem jest wartość false */

//Zadanie 5
var counter=145;
console.log(counter);
counter++;
console.log(counter);
counter--;
console.log(counter);


//Zadanie 6
var liczba1=8;
var liczba2=44;
var result=null;
result=liczba1>liczba2;
console.log(result);
