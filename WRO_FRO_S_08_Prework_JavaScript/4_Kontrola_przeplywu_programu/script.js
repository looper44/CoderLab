// Zadanie 1
var liczba1=8;
var liczba2=67;
if(liczba1>liczba2){
  console.log(liczba1);
}
else{
  console.log(liczba2);
}

// Zadanie 2

var l1=5;
var l2=99;
var l3=86;
if(l1>l2 && l1>l3){
  console.log(l1);
}else if(l2>l1 && l2>l3){
  console.log(l2);
}else{
  console.log(l3);
}

// Zadanie 3

for(var i = 0; i < 10; i++){
  console.log("Lubie JavaScript");
}

//Zadanie 4

var result=0;
for(var i = 1; i < 11; i++){
  result=result+i;
}
  console.log(result);

// Zadanie 5
  var n=8;
  var parzysta=" - parzysta";
  var nieparzysta=" - nieparzysta"
  for(var i=0; i<n+1; i++){
    if(i%2==0){
      console.log(i+parzysta);
    }
    else{
      console.log(i+nieparzysta);
    }
  }

  // Zadanie 6

  for(var i=0; i<10; i++){
    for(var j=0; j<5; j++){
    console.log("i= " + i + " j = " + j);
  }
  }


// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

  // Zadanie 8
  var dlugosc=5;
  var linia="";
  for(var k=0; k<dlugosc; k++){
    linia=linia+"*";
    console.log("");
    console.log(linia);
  }
