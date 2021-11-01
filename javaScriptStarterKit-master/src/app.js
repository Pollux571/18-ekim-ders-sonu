console.log("hello world");

let konutKredileri=["Konut Kredisi" , "Emlak konut kredisi", "Kamu konut kredisi" ,"Araba konut kredisi", "Vakif konut kredisi"];
console.log("<ul>")


for (let i = 0; i<konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}


function save(ogrenci){
    console.log(ogrenci)
}
save();

//spread
let points=[1,5,6,80,90,65];
console.log(...points);
console.log(Math.max(...points));

//Destructuring

let populations= [1000, 2000, 3000]
let [small,medium,height]=populations;
console.log(small);
console.log(medium);
console.log(height);



