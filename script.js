'use strict';

const books = document.querySelectorAll('.books'),
    elems = document.querySelectorAll('.book');

books[0].prepend(elems[1]);
books[0].append(elems[2]);
elems[4].after(elems[3]);

const backgroundImage = document.body.style.backgroundImage = ('url(./image/you-dont-know-js.jpg)');

const book3 = document.body.querySelectorAll('h2');
console.log('book3: ', book3);
book3[2].textContent = 'Книга 3. this и Прототипы Объектов';
console.log('book3[2].textContent: ', book3[2].textContent);

const removeAds = document.querySelector('div.adv');
removeAds.remove();

const book2 = document.querySelectorAll('.book')[1];
const boo2Ul = book2.querySelector('ul');
const book2Li = book2 .querySelectorAll('li');
console.log('book2Li: ', book2Li);
const li1 = book2.querySelectorAll('li')[0],
    li2 = book2.querySelectorAll("li")[1],
    li3 = book2.querySelectorAll('li')[3],
    li4 = book2.querySelectorAll('li')[6],
    li5 = book2.querySelectorAll('li')[8],
    li6 = book2.querySelectorAll('li')[4],
    li7 = book2.querySelectorAll('li')[5],
    li8 = book2.querySelectorAll('li')[7],
    li9 = book2.querySelectorAll('li')[9],
    li10 = book2.querySelectorAll('li')[2],
    li11 = book2.querySelectorAll('li')[10];

li2.after(li3);
li3.after(li4);
li4.after(li5);
li5.after(li6);
li6.after(li7);
li7.after(li8);
li8.after(li9);
li9.after(li10);


const book5 = document.querySelectorAll('.book')[4];

const book5Ul = book5.querySelector('ul');
const book5Li = book5.querySelectorAll('li');
console.log('book5Li: ', book5Li);
const lii1 = book5.querySelectorAll('li')[0],
    lii2 = book5.querySelectorAll('li')[1],
    lii3 = book5.querySelectorAll('li')[9],
    lii4 = book5.querySelectorAll('li')[3],
    lii5 = book5.querySelectorAll('li')[4],
    lii6 = book5.querySelectorAll('li')[2],
    lii7 = book5.querySelectorAll('li')[6],
    lii8 = book5.querySelectorAll('li')[7],
    lii9 = book5.querySelectorAll('li')[5],
    lii10 = book5.querySelectorAll('li')[8],
    lii11 = book5.querySelectorAll('li')[10];
   
lii2.after(lii3);
lii3.after(lii4);
lii4.after(lii5);
lii5.after(lii6);
lii6.after(lii7);
lii7.after(lii8);
lii8.after(lii9);
lii9.after(lii10);

const book6 = document.querySelectorAll('.book')[5];    // получили всю коллекцию с book, обратились к элементу с индексом [5]
const newUl = book6.querySelector('ul');    // обратились к ul
const allLi = book6.querySelectorAll('li')[8];  // получили коллекцию li, обратились к элементу с индексом [8]
const newLi = document.createElement("li"); // создали новый элемент с тегом li
newLi.innerHTML = "Глава 8: За пределами ES6";
allLi.after(newLi);

// newLi.innerHTML = <span>"Глава 8: За пределами ES6"</span>;