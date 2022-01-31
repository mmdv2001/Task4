


let ul = document.querySelector("#one")
let ull = document.querySelector("#two")



let btn = document.querySelector("#btnone")
btn.addEventListener("click", function () {
    let txt = document.querySelector("#personone").value

    if (txt != "") {

        let txt2 = document.querySelector("#personone")
        txt2.value = '';
        let li = document.createElement("LI");
        let h6 = document.createElement("h6");
        h6.textContent = txt;
        li.appendChild(h6)
        ul.appendChild(li);
        ull.appendChild(li.cloneNode(true));
        h6.classList.add("fromYou")
        li.classList.add("fromMe")
    }
    ul.scrollTop = ul.scrollHeight;
    ull.scrollTop = ull.scrollHeight;
})



let btn2 = document.querySelector("#btntwo")
btn2.addEventListener("click", function () {
    let txt = document.querySelector("#persontwo").value

    if (txt != "") {

        let txt2 = document.querySelector("#persontwo")
        txt2.value = '';
        let li = document.createElement("LI");
        let h6 = document.createElement("h6");
        h6.textContent = txt;
        li.appendChild(h6)


        ull.appendChild(li);
        ul.appendChild(li.cloneNode(true));
        h6.classList.add("fromYou")
        li.classList.add("fromMe")
    }
    ul.scrollTop = ul.scrollHeight;
    ull.scrollTop = ull.scrollHeight;
})



var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var feel = document.querySelector('.feel');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
var tempValue = data['main']['temp'];
var nameValue = data['name'];
var feelValue =data['main']['feels_like'];
main.innerHTML = nameValue;
temp.innerHTML =Math.round( tempValue);
feel.innerHTML= Math.round(feelValue);
input.value ="";


})

.catch(err => alert("Wrong city name!"));
})

