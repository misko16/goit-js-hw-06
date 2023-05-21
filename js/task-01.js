const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const categories = item.querySelectorAll('li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${categories.length}`);
});
