'use stric';

const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach((list) => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    console.log(`Elements: ${list.lastElementChild.childElementCount}`);
});