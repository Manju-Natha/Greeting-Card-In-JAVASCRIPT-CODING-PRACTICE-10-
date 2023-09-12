let greeting =
  '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsevalue = JSON.parse(greeting);
//console.log(parsevalue)

let greetFromEl = document.getElementById("greetFrom");
let greetToEl = document.getElementById("greetTo");
let greetTextEl = document.getElementById("greetText");

greetTextEl.textContent = parsevalue.greetText;
greetFromEl.textContent = "From:" + parsevalue.from;
greetToEl.textContent = "To" + parsevalue.to;
