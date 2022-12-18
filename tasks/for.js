/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/


function digits(n1,n2){
    let value = 0;
    for (let i = n1;i<n2;i++){
        
    value += i;
    } 
    console.log(value);
}
digits(0,4);
digits(0,100);
digits(574,815);
digits(-50,50);
digits(-70,30);
function abc(n1){
    let value = '';
    for (let i = n1.length - 1;i >= 0; i--){
    value += n1[i];
    } 
    console.log(value);
}

abc('abcdefg');