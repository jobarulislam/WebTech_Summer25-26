function fruit(){
let fruits = ["apple", "banana", "watermelon", "pineapple"];
let flen = fruits.length;
let text = "<ul>";
for(let i = 0; i < flen; i++){
    text +="<li>" + fruits[i] + "</li>" ;
}
let p = document.getElementById("html1").innerHTML = text;
console.log(fruits);
console.log(flen);
console.log(text);
return p;
}
function reload(){
    const list = document.querySelector("#html1 ul");
    if (list){
       list.remove();
    }
    console.log("reload the html1");
}

