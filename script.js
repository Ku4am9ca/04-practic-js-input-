let a = 6;
let b = "hello"


console.log(a);




//document.querySelector(".input-in")//элемент инпут

let inputIn = document.querySelector(".input-in");//из инпута принимает в виде строки

let button = document.querySelector("button");

let div = document.querySelector(".out");


button.onclick = function () {
    // кнопка будет нажата
    console.log("Работает");
    console.log(inputIn.value)//value то что введено Input
    let b = +inputIn.value;
    console.log(b + 10);//"66"+10=6610, добавим +
    div.innerHTML = b;
    inputIn.value = "";
}

