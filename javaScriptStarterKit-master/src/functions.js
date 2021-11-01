/*function addtoCart(quantity,productName="armut"){
  console.log(" sepete eklendi : urun : " +  productName + " adet :" + quantity);
}
//addtoCart();
//addtoCart("elma");
//addtoCart("yumurta");
addtoCart(15);

let sayHello= () =>{
    console.log("hello world");
};

sayHello();

let sayHello2= function (){
    console.log("hello world2");
}
sayHello2();
*/

let=product2={productName:"Elma" , unitPrice:10, quantity:5};
let=product3={productName:"Elma" , unitPrice:10, quantity:5};

product2=product3;
product2.productName= "Karpuz";
console.log(product3.productName);

let sayi1=10;
let sayi2=20;
sayi1=sayi2;
sayi2=100;
console.log(sayi1);


function addtoCard4(products){
    console.log(products);
}

 let products=[
{productName:"Elma" , unitPrice:10, quantity:5},
{productName:"Armut" , unitPrice:10, quantity:5},
{productName:"Karpuz" , unitPrice:10, quantity:5}
]

addtoCard4(products);

// rest operatoru

function add(bisey,...numbers){ //rest
       let total=0;
       for(let i=0; i<numbers.length; i++){
           total=total + numbers[i]
       }
       console.log(total)
       console.log(bisey)
}

add(20, 30);
//add(20, 30, 40);
//add(20, 30, 40, 50);

let numbers=[30,10,500,600,120]
 console.log(...numbers) //burda full icini aliriz
console.log(numbers); // array olarak aliriz

console.log(Math.max(...numbers));


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:" ic anadolu" , population:"20m"},
    {name:" marmara" , population:"30m"},
    {name:" ic karadeniz" , poplation:"10m"},
    [
        ["Ankara," ,"Konya"],
        ["Istanbul,", "Bursa"],
        ["Sinop," , "Trabzon"],
    ]
];

 //console.log(icAnadolu.name);
 //console.log(icAnadolu.population);
 console.log(icAnadoluSehirleri);

 let newProductName, newUnitPrice, newQuanTity   // boyle yazarsak eger kesinlikle ({}) << yeni satirdan yazmak lazim
 ({productName:newProductName, unitPrice:newUnitPrice, quanTity:newQuanTity}={productName:"Elma", unitPrice:10, quanTity:5})

 console.log(newProductName);
 console.log(newUnitPrice);
 console.log(newQuanTity);






